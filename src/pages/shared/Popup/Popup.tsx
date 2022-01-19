import React from 'react';
import s from './Popup.module.scss';
import ThisDayItem from "../../Home/components/ThisDayInfo/ThisDayItem";
import cloud from "../../../assets/images/Cloud.png";
import {Item} from "../../Home/components/ThisDayInfo/ThisDayInfo";
import GlobalSVGSelector from "../../../assets/icons/global/GlobalSVGSelector";
import IndicatorSVGSelector from "../../../assets/icons/indicators/IndicatorSVGSelector";

interface Props {
}

const Popup = ({}: Props) => {
    const items = [
        {
            icon_id: 'temp',
            name: 'Температура',
            value: '20°',
        },
        {
            icon_id: 'pressure',
            name: 'Давление',
            value: '765 мм рт. столба - нормальное',
        },
        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: 'Без осадков',
        },
        {
            icon_id: 'wind',
            name: 'Ветер',
            value: '3 м/с юго-запад - лёгкий ветер',
        }
    ]
    return (
        <>
            <div className={s.blur}></div>
            <div>
                <div className={s.popup}>
                    <div className={s.day}>
                        <div className={s.day__temp}>20°</div>
                        <div className={s.day__name}>Среда</div>
                        <div className={s.img}>
                            <IndicatorSVGSelector id='sun_small' />
                        </div>
                        <div className={s.day__time}>
                            Время: <span>21:00</span>
                        </div>
                        <div className={s.day__city}>
                            Город: <span>Томск</span>
                        </div>
                    </div>
                    <div className={s.this__day_info}>
                        <div className={s.this__day_info_items}>
                            {items.map((item: Item) => (
                                <ThisDayItem key={item.icon_id} item={item}/>
                            ))}
                        </div>
                    </div>
                    <div className={s.close}>
                        <GlobalSVGSelector id='close' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;