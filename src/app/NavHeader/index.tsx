import Flex from "@/components/Flex";
import ThemeToggleButton from "./ThemeToggleButton";
import Link from '@/components/Link'
import ChatButton from "./ChatButton";
import ActiveCodeButton from "./ActiveCodeButton";
import Background from "./Background";

const links = [
  {path: 'tutorial', text: '教程'},
  {path: 'component', text: '组件'},
  {path: 'blog', text: '博客'},
]

export default function Nav() {
  return (
    <header className='pt-16'>
      <Flex between className='fixed top-0 z-50 w-full h-16 border-b border-slate-200 bg-white px-8 bg-opacity-70'>
        <Flex>
          <Link className='font-bold text-md flex items-center' href='/'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd"
                    d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"/>
            </svg>
            <div className='ml-2'>React Base</div>
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
              <path fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"/>
            </svg>
          </a>
        </Flex>
        <Flex>
          <ChatButton />
          <ActiveCodeButton />
          <ThemeToggleButton/>
        </Flex>
      </Flex>
      <Background />
    </header>
  )
}
