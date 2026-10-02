import picture from '@assets/picture.png';
import settings from '@assets/settings.svg';
import './menu-profile.scss';

function MenuProfile() {

    return(
        <div className="menu__profile">
            <img src={picture} alt="Мой профиль" className="menu__avatar" />
            <div className="menu__settings-button">
                <img src={settings} alt="Настройки" className="menu__settings-icon" />
            </div>
        </div>
    );
};

export default MenuProfile;