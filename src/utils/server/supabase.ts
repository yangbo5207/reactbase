import {createServerClient} from '@supabase/ssr'
import {cookies} from 'next/headers'

const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(supabaseURL, supabaseAnonKey, {
    cookies: {
      getAll: cookieStore.getAll,
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({name, value, options}) => cookieStore.set(name, value, options))
        } catch(e) {}
      }
    }
  })
}

