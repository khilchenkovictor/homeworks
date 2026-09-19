import Menu from './Menu'

function Header() {

    return(
        <div className='flex items-center h-18 justify-between pr-20 pl-20 border-b-1 border-gray-500 bg-white'>
            <h1 className='text-gray-600 uppercase'>
                Header
            </h1>

            <Menu />
            
        </div>
    )
}

export default Header;