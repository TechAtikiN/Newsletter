import Image from 'next/image'
import Link from 'next/link'

type FooterLinks = {
  page: { text: string, href: string }[],
  tech: { title: string, links: string[] }[],
}

const footerLinks: FooterLinks = {
  page: [
    {
      text: 'Home',
      href: '/home',
    },
    {
      text: 'About Us',
      href: '/about'
    },
    {
      text: 'Know More',
      href: '/more'
    },
    {
      text: 'Contact',
      href: '/contact'
    }
  ],
  tech: [
    {
      title: 'Tech Stack',
      links: ['TypeScript', 'React', 'NextJS']
    }
  ]
}

const Footer = () => {
  return (
    <footer className='w-full bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 text-white px-10 pb-8 overflow-x-auto'>

      {/* bottom section */}
      <div className='flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:justify-center pb-5 mt-14 pt-3 bg-purple-800 text-white text-sm'>
        <p className='hover:underline hover:cursor-pointer hover:text-purple-600'>Privacy Policy</p>
        <span className='hidden md:inline-flex mx-4'>|</span>
        <Link href='/sitemap.xml' className='hover:underline hover:cursor-pointer hover:text-purple-600'>Sitemap</Link>
        <span className='hidden md:inline-flex mx-4'>|</span>
        <p className='hover:underline hover:cursor-pointer hover:text-purple-600'>
          &copy; 2023 TechatikiN.
        </p>
      </div>
    </footer>
  )
}

export default Footer