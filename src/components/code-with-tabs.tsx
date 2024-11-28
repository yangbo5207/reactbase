import { Block, CodeBlock, parseProps } from "codehike/blocks"
import { Pre, highlight, RawCode } from "codehike/code"
import { z } from "zod"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import theme from "@/theme.mjs"
import {Code} from './code'

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
    <Tabs defaultValue={tabs[0]?.meta} className="...">
      <TabsList className="...">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.meta} value={tab.meta}>
            {tab.meta}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, i) => (
        <TabsContent key={tab.meta} value={tab.meta} className="mt-0">
          <Code codeblock={tab} />
        </TabsContent>
      ))}
    </Tabs>
  )
}
