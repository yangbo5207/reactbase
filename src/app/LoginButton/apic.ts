import supabase from '@/utils/client/supabase'

export async function signInWithGithub() {
  const {data, error} = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
  console.log(data)
}

export async function getSession() {
  const {data, error} = await supabase.auth.getSession()
  console.log(data)
}
