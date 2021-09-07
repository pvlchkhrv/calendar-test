import {IUser} from '../../../models/IUser';
import {IEvent} from '../../../models/IEvent';

interface EventState {
    guests: IUser [];
    events: IEvent [];
}

export enum EventActionEnum {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS',
}

interface SetGuestsAction {
    type: EventActionEnum.SET_GUESTS;
    payload: IUser[];
}

interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS;
    payload: IEvent[];
}

type EventAction = SetEventsAction | SetGuestsAction;

export type {
    EventState,
    SetGuestsAction,
    SetEventsAction,
    EventAction
}

