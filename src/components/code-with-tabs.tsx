import { Block, CodeBlock, parseProps } from "codehike/blocks"
import { Pre, highlight, RawCode } from "codehike/code"
import { z } from "zod"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import theme from "@/theme.mjs"
import {CodeSimple, extractFlags, CodeTitle} from './code'
import {cn} from "@/lib/utils";

const Schema = Block.extend({ tabs: z.array(CodeBlock) })

export async function CodeWithTabs(props: unknown) {
  const { tabs } = parseProps(props, Schema)
  return <CodeTabs tabs={tabs} />
}

export async function CodeTabs(props: { tabs: RawCode[] }) {
  const { tabs } = props
  const highlighted = await Promise.all(
    tabs.map((tab) => highlight(tab, theme)),
  )

  return (
    <div className='border rounded border-gray-200 dark:border-gray-700 overflow-hidden'>
      <Tabs defaultValue={tabs[0]?.meta}>
        <div className='border-b py-1 border-gray-200 dark:border-gray-700' style={{ backgroundColor: 'var(--ch-code-header-bg)'} as any}>
          <TabsList style={{backgroundColor: 'var(--ch-code-header-bg)'} as any}>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.meta} value={tab.meta}>
                <CodeTitle meta={tab.meta} />
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {tabs.map((tab, i) => (
          <TabsContent key={tab.meta} value={tab.meta} className="mt-0">
            <CodeSimple codeblock={tab} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
