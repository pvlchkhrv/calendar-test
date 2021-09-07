import React, {FC} from 'react';
import {Calendar} from 'antd';
import {IEvent} from '../models/IEvent';
import {Moment} from 'moment';
import {formatDate} from '../utils/date';

interface EventCalendarProps {
    events: IEvent [];
}

const EventCalendar: FC<EventCalendarProps> = ({events}) => {
    function dateCellRender(value: Moment) {
        const formattedDate = formatDate(value.toDate());
        const currentDayEvents = events.filter(ev => ev.date === formattedDate);
        return (
            <div>
                {currentDayEvents.map((ev, i) =>
                    <div key={i}>{ev.description}</div>
                )}
            </div>
        );
    }

    return (
        <Calendar dateCellRender={dateCellRender}/>
    );
};

export default EventCalendar;
