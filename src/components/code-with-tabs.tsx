import { Block, CodeBlock, parseProps } from 'codehike/blocks'
import { highlight, RawCode } from 'codehike/code'
import { z } from 'zod'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import theme from "@/theme.mjs"
import {CodeSimple, extractFlags, CodeTitle} from './code'
import Auth from './Auth'

import {CodeTabHeader} from "./code-tab-header";

const Schema = Block.extend({ tabs: z.array(CodeBlock) })

export function CodeWithTabs(props: unknown) {
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
        <CodeTabHeader tabs={tabs} />
        {tabs.map((tab, i) => (
          <TabsContent key={tab.meta} value={tab.meta} className="mt-0">
            <Auth><CodeSimple codeblock={tab} /></Auth>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
