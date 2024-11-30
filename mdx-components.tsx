import type { MDXComponents } from 'mdx/types'
import { Code, InlineCode } from './src/components/code'
import {MdxH1, MdxH2, MdxH3, MdxH4, MdxH5, MdxH6} from './src/components/Heading'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // @ts-ignore
    Code,
    // @ts-ignore
    InlineCode,
    // h1: MdxH1,
    // h2: MdxH2,
    // h3: MdxH3,
    // h4: MdxH4,
    // h5: MdxH5,
    // h6: MdxH6
  }
}
