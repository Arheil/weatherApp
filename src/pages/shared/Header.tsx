import React from 'react';
import s from './Header.module.scss';
import GlobalSVGSelector from "../../assets/icons/global/GlobalSVGSelector";

interface Props {

}

const Header = (props: Props) => {
    return (
        <header className={s.header}>
            <div className="wrapper">
                <div className="logo">
                    <GlobalSVGSelector id='header-logo' />
                </div>
                <div className="title">React weather</div>
            </div>
            <div className="wrapper"></div>
        </header>
    );
};

export default Header;