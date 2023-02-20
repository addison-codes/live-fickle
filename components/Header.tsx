import Link from "next/link"
import Image from "next/image"

const Header = ({home}: {home?: boolean}) => {
  return (
    <header>
      <nav className={` ${home ? 'bg-transparent' : 'bg-white text-black'} z-10 text-white relative`}>
      <div className="container flex flex-wrap items-center justify-between py-8 mx-auto">
        <Link id="title" href='/' className="font-mono text-2x">
          { home ? <Image
            alt='Horizontal Logo'
            src='/horizontal-white.svg'
            width='650'
            height='120'
            style={{
              maxWidth: "100%",
              height: "auto"
            }} /> : <Image
            alt='Horizontal Logo'
            src='/horizontal-black.svg'
            width='650'
            height='120'
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />}
        </Link>
        <div className="flex justify-end gap-4 mx-auto text-lg uppercase sm:gap-16 md:text-3xl">
          <Link href='/#about'>About</Link>
          <Link href='/support'>Support</Link>
          <Link href='/contact'>Contact</Link>
        </div>
      </div>
    </nav>
    </header>
  )
}

export default Header