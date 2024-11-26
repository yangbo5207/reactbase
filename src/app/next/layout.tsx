
export default async function NextLayout({ children }: any) {
  return (
    <div>
      <div className='keep max-w-3xl mx-auto px-6'>
        {children}
      </div>

    </div>
  )
}
