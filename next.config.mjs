import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import {remarkCodeHike, recmaCodeHike} from 'codehike/mdx'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkToc from 'remark-toc'

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
  experimental: { // 缓存 Pages，默认时间为 0
    staleTimes: {
      dynamic: 30, // 针对 ssr，非静态、非预取，Link 的 prefetch 不为 true
      static: 180, // 静态，或者 Link 的 prefetch 为 true
    },
  },
  reactStrictMode: true
};

const autolinkHeadingOptions = {
  behavior: 'append',
  properties: {
    className: ['anchor-link'],
    title: 'Permalink to this heading',
  },
  content: {
    type: 'element',
    tagName: 'span',
    properties: { className: ['anchor-icon'] },
    children: [{ type: 'text', value: '#' }],
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkToc, [remarkCodeHike, chConfig]],
    recmaPlugins: [[recmaCodeHike, chConfig]],
    rehypePlugins: [[rehypeSlug, [rehypeAutolinkHeadings, autolinkHeadingOptions]]],
    jsx: true,
  }
})

export default withMDX(nextConfig);
