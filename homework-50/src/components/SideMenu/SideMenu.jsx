import MenuProfile from "../MenuProfile";
import MenuList from "../MenuList";
import "./side-menu.scss";


function SideMenu() {

    return (
        <div className="menu">
            <MenuProfile />
            <MenuList />
        </div>
    );
};

export default SideMenu;