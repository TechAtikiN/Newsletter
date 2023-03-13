import Link from 'next/link'

const Navbar = () => {

  return (
    <nav className=' flex justify-between items-center mx-20 pt-5'>
      <div>
        <h1 className='text-4xl font-extrabold text-purple-500'>mail-at</h1>
      </div>

      <div className='flex justify-between items-center space-x-4'>
        <Link href='/' className='nav-link'>Home</Link>
        <Link href='/about' className='nav-link'>About</Link>
        <Link href='/more' className='nav-link'>Know More</Link>
      </div>

      <div>
        <button className='text-xl hover:scale-105 transition-all duration-200 text-white bg-purple-500 hover:bg-purple-600 px-3 py-3 m-3 w-full rounded-full'>Contact</button>
      </div>
    </nav>
  )
}

export default Navbar
