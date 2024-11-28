import { Pre, RawCode, highlight, HighlightedCode, AnnotationHandler, Inline } from "codehike/code"
import { cn } from "@/lib/utils"
import { callout } from "./annotations/callout"
import {mark} from './annotations/mark'
import { diff } from "./annotations/diff"
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

export async function Code({
  codeblock,
  ...rest
}: {
  codeblock: RawCode
  className?: string
  style?: React.CSSProperties
  extraHandlers?: AnnotationHandler[]
}) {
  const { flags } = extractFlags(codeblock)
  const highlighted = await highlight(codeblock, theme, {
    annotationPrefix: flags.includes("p") ? "!!" : undefined,
  })
  return <HighCode highlighted={highlighted} {...rest} />
}

type HighCodePorps = {
  highlighted: HighlightedCode,
  className?: string,
  style?: React.CSSProperties,
  extraHandlers?: AnnotationHandler[]
}

export function HighCode({highlighted, className, style, extraHandlers = []}: HighCodePorps) {
  const {title, flags, lang} = extractFlags(highlighted)
  const h = {...highlighted, meta: title}

  const handlers = [
    ...extraHandlers,
    mark,
    diff,
    callout,
  ].filter(Boolean) as AnnotationHandler[]

  const pre = (
    <Auth>
      <Pre
        code={highlighted}
        className="m-0 py-2 px-0 bg-editor-background rounded-none group flex-1 selection:bg-editor-selectionBackground"
        handlers={handlers}
        style={{
          backgroundColor: "var(--bg-color)",
        }}
      />
    </Auth>
  )

  if (title || lang) {
    return (
      <div
        className={cn("border border-editorGroup-border rounded overflow-hidden my-2", className)}
        style={{"--border-color": "var(--ch-23)", borderColor: "var(--border-color)", ...style,} as any}
      >
        <div
          className="px-3 py-2 border-b border-editorGroup-border bg-editorGroupHeader-tabsBackground text-sm text-tab-activeForeground flex"
          style={{ borderColor: "var(--border-color)" }}
        >
          <div className="text-tab-activeForeground text-sm flex items-center gap-3">
            <CodeIcon title={title} lang={`.${lang}`} />
            <span>{title}</span>
          </div>
          {flags.includes("-c") && (
            <CopyButton text={h.code} className="ml-auto" />
          )}
        </div>
        {pre}
      </div>
    )
  } else {
    return (
      <div
        className={cn("border border-editorGroup-border rounded overflow-hidden my-2 relative", className,)}
        style={{"--border-color": "var(--ch-23)", borderColor: "var(--border-color)", ...style,} as any}
      >
        {flags.includes("-c") && (
          <CopyButton text={h.code} className="absolute right-4 my-0 top-2" />
        )}
        {pre}
      </div>
    )
  }
}

export function extractFlags(codeblock: RawCode) {
  const tags = codeblock.meta.split(' ')
  // 并且以 - 开头的标记
  const flags = tags.filter((flag) => flag.startsWith("-")) ?? ""

  // 以 .md 这种格式结尾的，第一个元素
  const title = tags.filter((tag) => tag.includes('.'))[0]

  return { title, flags, lang: codeblock.lang }
}
