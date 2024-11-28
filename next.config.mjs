import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
// import rehypePrettyCode from 'rehype-pretty-code'
// import { transformerNotationDiff } from '@shikijs/transformers';
// import { transformerCopyButton } from '@rehype-pretty/transformers'
import {remarkCodeHike, recmaCodeHike} from 'codehike/mdx'

// const options = {
//   // Use one of Shiki's packaged themes
//   // https://shiki.style/themes#themes
//   theme: "one-dark-pro",
//   // Keep the background or use a custom background color?
//   keepBackground: true,
//   defaultLang: "plaintext",
//   transformers: [
//     transformerNotationDiff(),
//     transformerCopyButton({
//       visibility: 'hover',
//       feedbackDuration: 3_000
//     })
//   ]
// };

const chConfig = {
  components: {
    inlineCode: "InlineCode",
    code: "Code"
  },
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  distDir: 'docs',
  // 缓存 Pages，默认时间为 0
  experimental: {
    staleTimes: {
      dynamic: 30, // 针对 ssr，非静态、非预取，Link 的 prefetch 不为 true
      static: 180, // 静态，或者 Link 的 prefetch 为 true
    },
  },
  reactStrictMode: true
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, chConfig]],
    recmaPlugins: [[recmaCodeHike, chConfig]],
    jsx: true,
  }
})

export default withMDX(nextConfig);
