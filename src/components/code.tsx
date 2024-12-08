import { Pre, RawCode, highlight, HighlightedCode, AnnotationHandler, Inline } from "codehike/code"
import { cn } from "@/lib/utils"
import { callout } from "./annotations/callout"
import {mark} from './annotations/mark'
import { diff } from "./annotations/diff"
import { focus } from "./annotations/focus"
import { CodeIcon } from "./annotations/icons"
import {CopyButton} from './annotations/copy-button'
import theme from "@/theme.mjs"
import React from "react";
import Auth from './Auth'

export async function InlineCode({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, theme)
  return (
    <Inline code={highlighted} style={highlighted.style} className="selection:bg-editor-selectionBackground" />
  )
}

type CodePorps = {
  codeblock: RawCode
}

export function Code({codeblock}: CodePorps) {
  return (
    <div
      className={"border rounded overflow-hidden my-2 border-gray-200 dark:border-gray-700"}
      style={{backgroundColor: "var(--ch-code-bg)",} as any}
    >
      <CodeHeader {...codeblock} />
      <Auth>
        <CodeSimple codeblock={codeblock} />
      </Auth>
    </div>
  )
}

export async function CodeSimple({codeblock}: {codeblock: RawCode}) {
  const highlighted = await highlight(codeblock, theme, {})
  const handlers = [mark, diff, callout, focus]

  const {flags} = extractFlags(codeblock.meta)

  return (
    <div className='code-simple'>
      {flags.includes("-c") && (
        <CopyButton text={codeblock.value} className="ml-auto" />
      )}
      <Pre
        code={highlighted}
        className="m-0 py-2 px-0 rounded-none group selection:bg-editor-selectionBackground"
        handlers={handlers}
        style={{
          backgroundColor: "var(--ch-code-bg)",
        }}
      />
    </div>
  )
}

export function CodeHeader({lang = '', meta = '', value}: RawCode) {
  const {title, flags} = extractFlags(meta)

  if (!title) return null

  return (
    <div className='header px-3 py-3 text-sm border-b border-gray-200 dark:border-gray-700' style={{ backgroundColor: 'var(--ch-code-header-bg)'} as any}>
      <CodeTitle meta={meta} />
    </div>
  )
}

export function CodeTitle({meta = ''}: {meta: string}) {
  const {title} = extractFlags(meta)
  return (
    <div className="text-tab-activeForeground flex items-center gap-3">
      {title && <CodeIcon title={title} />}
      <span>{title}</span>
    </div>
  )
}

export function extractFlags(meta: string) {
  const tags = meta.split(' ')
  // 并且以 - 开头的标记
  const flags = tags.filter((flag) => flag.startsWith("-")) ?? ""

  // 以 .md 这种格式结尾的，第一个元素
  const title = tags.filter((tag) => tag.includes('.'))[0]

  return { title, flags }
}
