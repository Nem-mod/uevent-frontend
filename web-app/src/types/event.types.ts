import { IEventFormat, IEventTheme } from '@/types/theme-format.types';

export interface EventTypes {
    id: string | number;
    title: string;
    description: string;
    startTime: Date;
    duration: number;
    location: string;
    poster: string;
}


export interface ICreateEventTicket {
    ticket: {
        type: string;
        description: string;
        cost: number;
    };
    amount: number
}

export interface IEventGetRes extends EventTypes {
    organization: {
        id: string;
    };
    themes: IEventTheme[];
    format: IEventFormat;
}

export interface IEventsGetWithPagination {
    data: IEventGetRes[];
    count: number; // Number of events in database
}

export interface ICreateEventAndTickets {
    title: string;
    description: string;
    format: IEventFormat // | number;
    themes: IEventTheme[] // | number[];
    startTime: string;
    duration: number; // s? ms? m? h?
    poster: string; // url to event poster
    location?: string;
    tickets?: ICreateEventTicket[];
}


