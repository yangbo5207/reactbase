import supabase from '@/utils/client/supabase'

export type User = {
  email: string,
  avatar: string,
  id: string,
  nickname: string,
  fullname: string,
}

export type Session = {
  access_token: string,
  refresh_token: string,
  expires_in: number,
  expires_at?: number,
  token_type: string,
  user: User
}

export async function getLoginInfor(): Promise<Session> {
  const {data, error} = await supabase.auth.getSession()
  const s = data.session
  if (!s || error) throw new Error()

  const identifier = s.user.identities
  if (!identifier) throw new Error()

  const identity_data = identifier[0].identity_data
  if (!identity_data) throw new Error()

  const userinfo = {
    access_token: s.access_token,
    refresh_token: s.refresh_token,
    expires_in: s.expires_in,
    expires_at: s.expires_at,
    token_type: s.token_type,
    user: {
      email: identity_data.email,
      avatar: identity_data.avatar_url,
      nickname: identity_data.user_name,
      fullname: identity_data.full_name,
      id: s.user.id,
    }
  }

  localStorage.setItem('login_message', JSON.stringify(userinfo))

  return userinfo
}

export async function signOut() {
  const {error} = await supabase.auth.signOut()
  if (error) throw error
  localStorage.removeItem('login_message')
  window.location.reload()
}

export async function signInWithGithub() {
  const {data, error} = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
}
