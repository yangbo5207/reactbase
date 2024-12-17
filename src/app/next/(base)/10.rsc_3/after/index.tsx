import Tooltip from './tooltip'

export default function Demo() {

  return (
    <div className='article'>
      <p>These new APIs improve on renderToString by waiting for data to load for static HTML generation. They are designed to work with streaming environments like Node.js Streams and Web Streams. For example, in a Web Stream environment, you can prerender a React tree to static HTML with prerender</p>
      <p>Prerender APIs will wait for all data to load before returning the static HTML stream. Streams can be converted to strings, or sent with a streaming response. </p>
      <p>... ...</p>
      <Tooltip />
    </div>
  )
}
