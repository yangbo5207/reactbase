import {createClient} from '@/utils/server/supabase'

type User = {
  isLogin: boolean,

}

export async function getLoginInfor(): Promise<any> {
  const supabase = await createClient()
  const {data, error} = await supabase.auth.getSession()
  console.log(data, error)
}
