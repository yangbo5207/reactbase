'use clinet'

// 这样也可以
// import {createClient} from '@supabase/supabase-js'
//
// const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL as string
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
//
// export default createClient(supabaseURL, supabaseAnonKey)


// 使用这种方式可以创建客户端组件，并且是单例模式
import {createBrowserClient} from '@supabase/ssr'

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export default createBrowserClient(supabaseURL, supabaseAnonKey)
