import { file_exists_ } from 'ctx-core/fs'
import { TextDecoderStream } from 'ctx-core/stream'
import { line__transform_stream_ } from 'ctx-core/string'
import { readFile } from 'node:fs/promises'
import { SourceMapConsumer } from 'source-map'
/**
 * @param {(str:string)=>(unknown|Promise<unknown>)}write
 * @returns {WritableStream<any>}
 * @private
 */
export function sourcemap_writable_stream_(write) {
	let outstream_controller
	const path_R_SourceMapConsumer = {}
	new ReadableStream({
		start(controller) {
			outstream_controller = controller
		}
	})
		.pipeThrough(new TextDecoderStream())
		.pipeThrough(line__transform_stream_())
		.pipeTo(new WritableStream({
			async write(stream_line) {
				const match =
					stream_line.match(/^\s+at ([^(]+ )?\(?(.*):(.*):([^)]*)\)?/)
				if (!match) {
					await write(stream_line + '\n')
					return
				}
				const [
					,
					methodName_match,
					path,
					line_str,
					column_str
				] = match
				if (!path || !await file_exists_(path + '.map')) {
					await write(stream_line + '\n')
					return
				}
				const methodName = methodName_match ? methodName_match.trim() : ''
				const line = parseInt(line_str)
				const column = parseInt(column_str)
				try {
					const smc =
						path_R_SourceMapConsumer[path] ??= await new SourceMapConsumer(
							JSON.parse(
								await readFile(path + '.map').then(buf=>'' + buf)))
					if (line == null || line < 1) {
						await write('    ' + (methodName || '[unknown]') + '\n')
					} else {
						const pos =
							smc.originalPositionFor({ line, column })
						if (pos && pos.line != null) {
							await write(
								'    at '
								+ (pos.name || methodName || '[unknown]')
								+ ' (' + pos.source + ':' + pos.line + ':' + pos.column + ')\n')
						}
					}
				} catch (err) {
					console.error(err)
					await write('    at FAILED_TO_PARSE_LINE\n')
				}
			}
		}))
	return new WritableStream({
		async close() {
			await outstream_controller.close()
		},
		async write(chunk) {
			await outstream_controller.enqueue(chunk)
		}
	})
}
