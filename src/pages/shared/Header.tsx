import React from 'react';
import s from './Header.module.scss';
import GlobalSVGSelector from "../../assets/icons/global/GlobalSVGSelector";
import Select from 'react-select';

interface Props {

}

const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Томск' },
        { value: 'city-2', label: 'Новосибирск' },
        { value: 'city-3', label: 'Красноярск' }
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100
        })
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSVGSelector id='header-logo' />
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <GlobalSVGSelector id='change-theme' />
                </div>
                <Select
                    defaultValue={options[0]}
                    styles={colourStyles}
                    options={options}
                />
            </div>
        </header>
    );
};

export default Header;