import React from 'react';
import s from './Days.module.scss';
import Card from "./Card";
import Tabs from "./Tabs";

interface Props {
}

export interface Day {
    day: string,
    day_info: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string
}

const Days = (props: Props) => {
    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            day: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь и солнце'
        }, {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            day: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь и солнце'
        }, {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно'
        },
        {
            day: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Небольшой дождь и солнце'
        },
    ]

    return (
        <>
            <Tabs/>
            <div className={s.days}>
                {days.map((day: Day) => (
                    <Card day={day}/>
                ))}
            </div>
        </>
    );
};

export default Days;