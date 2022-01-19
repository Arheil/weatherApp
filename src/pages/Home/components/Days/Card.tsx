import React from 'react';
import s from './Days.module.scss';
import { Day } from "./Days";
import GlobalSVGSelector from "../../../../assets/icons/global/GlobalSVGSelector";
import IndicatorSVGSelector from "../../../../assets/icons/indicators/IndicatorSVGSelector";

interface Props {
    day: Day
}

const Card = ({day}: Props) => {
    const { day_info, icon_id, temp_day, temp_night, info } = day;

    return (
        <div className={s.card}>
            <div className={s.day}>{day.day}</div>
            <div className={s.day__info}>{day_info}</div>
            <div className={s.img}>
                <IndicatorSVGSelector id={icon_id} />
            </div>
            <div className={s.temp__day}>{temp_day}</div>
            <div className={s.temp__night}>{temp_night}</div>
            <div className={s.info}>{info}</div>
        </div>
    );
};

export default Card;