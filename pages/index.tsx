import Link from 'next/link'

const Index = () => {
  return (
    <>
      <div>Portfolio</div>
      <Link href="/secondPage">
        Second Page
      </Link>
    </>
  )
}

export default Index