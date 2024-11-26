import Flex from "@/components/Flex";
import ThemeToggleButton from "./ThemeToggleButton";
import Link from '@/components/Link'
import ChatButton from "./ChatButton";
import ActiveCodeButton from "./ActiveCodeButton";

import { MousePointerClick } from 'lucide-react';

const links = [
  {path: 'base', text: 'React'},
  {path: 'perfomance', text: 'Performance'},
  {path: 'next', text: 'NextJS'},
]

export default function Nav() {
  return (
    <header className='w-full top-0 sticky flex justify-center border-b border-border z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <Flex between className='w-full max-w-[1400px] h-16 px-8 bg-opacity-70'>
        <Flex>
          <Link className='font-bold flex items-center' href='/'>
            <MousePointerClick />
            <div className='ml-2 text-md'>NextJS 启动</div>
          </Link>

          <div>
            {links.map((link, i) => (
              <Link href={link.path} key={link.path} className='ml-8 text-gray-500 hover:text-gray-800 animate-bounce' active='text-gray-900'>
                {link.text}
              </Link>
            ))}
          </div>

          <a
            className='hidden md:flex text-xs ml-8 rounded-full bg-red-100 py-2 px-3 text-red-400 transition hover:bg-red-300 hover:text-red-700 cursor-pointer'
            href='https://appxw863qeq2150.h5.xiaoeknow.com/p/decorate/homepage?entry=2&entry_type=2002&share_user_id=u_626bf7dfafe72_zLCXc4Qr0O&wework_share_customer_id=u_626bf7dfafe72_zLCXc4Qr0O'
            target='_blank'
          >
            推荐：JavaScript 核心进阶
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 ml-1">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
            </svg>
          </a>
        </Flex>
        <Flex>
          <ChatButton />
          <ActiveCodeButton />
          <ThemeToggleButton/>
        </Flex>
      </Flex>
    </header>
  )
}
