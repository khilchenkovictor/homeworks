import './menu-list.scss';

function MenuList() {

return(
    <nav className = "menu__nav">
        <ul className="menu__list">
            <li className="menu__item menu__item--active">
                Користувачі
            </li>
            <li className="menu__item">
                Запити
            </li>
            <li className="menu__item">
                Cтатистика
            </li>
            <li className="menu__item">
                Налаштування
            </li>
        </ul>
    </nav>
)

}

export default MenuList;