import React, {FC, useState} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from 'antd';
import {rules} from '../utils/rules';
import {IUser} from '../models/IUser';
import {IEvent} from '../models/IEvent';
import {Moment} from 'moment';
import {formatDate} from '../utils/date';
import {useTypedSelector} from '../hooks/useTypedSelector';

interface EventFormProps {
    guests: IUser[];
    submit: (event: IEvent) => void;
}

const EventForm: FC<EventFormProps> = ({guests, submit}) => {
    const {user} = useTypedSelector(state => state.auth)
    const [event, setEvent] = useState<IEvent>({
        author: '',
        date: '',
        guest: '',
        description: '',
    });

    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date.toDate())});
        }
    };

    const submitForm = () => {
        submit({...event, author: user.username});
    };

    return (
        <Form onFinish={submitForm}>
            <Form.Item
                label='Event description'
                name='description'
                rules={[rules.required()]}
            >
                <Input
                    onChange={e => setEvent({...event, description: e.currentTarget.value})}
                    value={event.description}
                />
            </Form.Item>
            <Form.Item
                label='Event Date'
                name='date'
                rules={[rules.required(), rules.isCorrectDate('You can not add event to the past')]}
            >
                <DatePicker
                    onChange={(date) => selectDate(date)}

                />
            </Form.Item>
            <Form.Item
                label='Select the guest'
                name='quest'
                rules={[rules.required()]}
            >
                <Select onChange={(guest: string) => setEvent({...event, guest})}>
                    {
                        guests.map(guest =>
                            <Select.Option value={guest.username} key={guest.username}>
                                {guest.username}
                            </Select.Option>
                        )
                    }
                </Select>
            </Form.Item>
            <Row justify='end'>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>
                        Add
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;
