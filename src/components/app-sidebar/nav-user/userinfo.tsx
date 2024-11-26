import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

import {User} from './api'
import {useGlobal} from "@/components/global-provider";

const def = {
  avatar: '',
  nickname: '游客',
  email: 'xxx@github.com',
}

export default function Userinfo() {
  const {session} = useGlobal()
  const user = session ? session.user : def
  return (
    <>
      <Avatar className="h-8 w-8 rounded-lg">
        <AvatarImage src={user.avatar} alt={user.nickname} />
        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">{user.nickname || '游客'}</span>
        <span className="truncate text-xs">{user.email || 'xxx@github.com'}</span>
      </div>
    </>
  )
}
