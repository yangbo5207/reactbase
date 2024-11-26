import {LogOut, LogIn} from "lucide-react"
import {DropdownMenuItem} from "@/components/ui/dropdown-menu"
import {useGlobal} from "@/components/global-provider";

export default function LoginButton() {
  const {isLogin} = useGlobal()

  if (isLogin) {
    return <DropdownMenuItem><LogOut />Log Out</DropdownMenuItem>
  }

  return (
    <DropdownMenuItem><LogIn />Log In</DropdownMenuItem>
  )
}
