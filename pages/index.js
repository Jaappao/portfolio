import Link from 'next/link'
import { Introduction } from '../components/introduction/introduction'

const Index = () => {
  return (
    <>
      <div>Portfolio</div>
      <Introduction/>
      <Link href="/secondPage">
        Second Page
      </Link>
    </>
  )
}

export default Index