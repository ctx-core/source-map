/// <reference lib="dom" />
import { sleep } from 'ctx-core/function'
import { dirname, join, resolve } from 'path'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { sourcemap_writable_stream_ } from './index.js'
test('sourcemap_writable_stream_', async ()=>{
	const fixtures_dir = resolve(join(dirname(new URL(import.meta.url).pathname), '..', '_fixtures'))
	const stderr_text = `
server__build|watch
browser__build|watch
server started on port 3000
http://localhost:3000/
18096 |
18097 | // src/app/index.server.ts
18098 | var index_server_default = (middleware_ctx) => {
18099 |   return new import_elysia.Elysia().get("/", ({ request }) => {
18100 |     const route_ctx = route_ctx__new(middleware_ctx);
18101 |     throw Error("test error");
                  ^
error: test error
      at ${fixtures_dir}/index.server-OQQ3QH33.js:18101:11
      at processTicksAndRejections (:61:77)

	`.trim()
	const write_stream_out_a:string[] = []
	await new ReadableStream({
		start(controller) {
			controller.enqueue(stderr_text)
			controller.close()
		}
	})
		.pipeThrough(new TextEncoderStream())
		.pipeTo(sourcemap_writable_stream_(
			str=>write_stream_out_a.push(str)))
	await sleep(100)
	equal(write_stream_out_a.join(''), `
server__build|watch
browser__build|watch
server started on port 3000
http://localhost:3000/
18096 |
18097 | // src/app/index.server.ts
18098 | var index_server_default = (middleware_ctx) => {
18099 |   return new import_elysia.Elysia().get("/", ({ request }) => {
18100 |     const route_ctx = route_ctx__new(middleware_ctx);
18101 |     throw Error("test error");
                  ^
error: test error
    at [unknown] (../../src/app/index.server.ts:8:9)
      at processTicksAndRejections (:61:77)
	`.trim() + '\n')
})
test.run()
