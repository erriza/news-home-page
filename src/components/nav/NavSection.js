import logo from './../../images/logo.svg'

function NavSection() {

    return (
        <nav className='bg-white border-gray-200'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <a href='' className='flex items-center'>
                    <img src={logo} className='h-8 mr-3' alt='W logo'/>
                </a>
                <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
                    <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-gray-500'>
                        <li className='cursor-pointer hover:text-red-400'>
                            Home
                        </li>
                        <li className='cursor-pointer hover:text-red-400'>
                            New
                        </li>
                        <li className='cursor-pointer hover:text-red-400'>
                            Popular
                        </li>
                        <li className='cursor-pointer hover:text-red-400'>
                            Trending
                        </li>
                        <li className='cursor-pointer hover:text-red-400'>
                            Categories
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavSection