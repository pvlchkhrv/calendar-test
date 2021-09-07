import {EventAction, EventActionEnum, EventState} from './types';
import {IEvent} from '../../../models/IEvent';
import {IUser} from '../../../models/IUser';

const initialState: EventState = {
    events: [] as IEvent[],
    guests: [] as IUser[],
}

const eventReducer = (state = initialState, action: EventAction): EventState => {
    switch(action.type) {
        case EventActionEnum.SET_EVENTS:
            return {...state, events: action.payload};
        case EventActionEnum.SET_GUESTS:
            return {...state, guests: action.payload};
        default:
            return state;
    }
}

export default eventReducer;
