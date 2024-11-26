import {LogOut, LogIn} from "lucide-react"
import {DropdownMenuItem} from "@/components/ui/dropdown-menu"
import {useGlobal} from "@/components/global-provider";
import {signOut, signInWithGithub} from './api'

export default function LoginButton() {
  const {session} = useGlobal()

  function __signoutHandler() {
    signOut()
  }

  if (session) {
    return (
      <DropdownMenuItem onClick={__signoutHandler}>
        <LogOut />Log Out
      </DropdownMenuItem>
    )
  }

  return (
    <DropdownMenuItem onClick={signInWithGithub}>
      <LogIn />Log In with Github
    </DropdownMenuItem>
  )
}
