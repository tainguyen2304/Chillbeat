import { logo_img, navTabs } from 'constans';
import { sortBy } from "lodash";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';


function Navbar_tab({ url }) {
    const { pathname } = useLocation();
    const unActive = "nav-item text-center Navbar__list__item";
    const active = "nav-item text-center Navbar__list__item active";

    const { t, i18n } = useTranslation();
    const changeLang = (lang) => {
        setTimeout(() => i18n.changeLanguage(lang), 2000)
    }

    const menu = (
        <Menu>
            {sortBy(i18n.languages).map((lang, index) => (
                <Menu.Item key={index}>
                    <li key={lang} disabled={lang === i18n.language} onClick={() => changeLang(lang)}>
                        {lang}
                    </li>
                </Menu.Item>)
            )}
        </Menu>
    )

    return (
        <div className="Navbar  bg-dark d-flex flex-column justify-content-between">
            <div>
                <div>
                    <img src={logo_img} alt="" className="w-100 p-4 rounded-circle" />
                </div>
                <ul className="nav flex-column nav-pills Navbar__list">
                    {navTabs.map((tap, idx) => (
                        <li
                            key={idx}
                            className={pathname === `${url}${tap.url}` ? active : unActive}
                        >
                            <Link to={`${url}${tap.url}`} >
                                <span className="text-secondary Navbar__list__item--icon ">
                                    {tap.icon}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="Navbar__options text-center text-secondary ">
                <hr />
                <ul className='list-unstyled text-left pl-5'>
                    <li>{t(" Help")}</li>
                    <li>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <p className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                {i18n.language} <DownOutlined />
                            </p>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </div>
    
    );
}

export default Navbar_tab;