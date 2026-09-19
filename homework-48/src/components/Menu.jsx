

function Menu() {

    const linkStyles = 'text-gray-600 cursor-pointer hover:underline underline-offset-3';

    return (
        <div>
            <ul className='flex gap-4'>
                <li 
                    className={linkStyles}
                >
                    Main
                </li>
                <li className={linkStyles}
                >
                    About
                </li>
                <li className={linkStyles}
                >
                    Information
                </li>
            </ul>
        </div>
    )
}

export default Menu;