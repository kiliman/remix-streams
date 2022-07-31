# remix-streams example

Remix supports standard [Web Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API). However, these streams are not interchangeable with [Node streams](https://nodejs.org/api/stream.html).

This example shows how to use a helper function [`createReadableStreamFromReadable`](https://github.com/remix-run/remix/blob/40a7a390063836607c76aad9754b7881f8c82303/packages/remix-node/stream.ts#L70) from `@remix-run/node` package to convert from Node [Readable](https://nodejs.org/api/stream.html#readable-streams) to Web [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream) which can be used as the body of your `Response`.
