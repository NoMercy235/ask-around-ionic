import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Subscription } from "rxjs/Subscription";

export interface EventsIndexes {
    [key: string]: Subscription[];
}
@Injectable()
export class EventsService {
    private stream: { [key: string]: Subject<any> } = {};
    private lastValues: { [key: string]: any } = {};

    constructor() {
    }

    notifyDataChanged(event: any, value: any): void {
        this.lastValues[event] = value;
        // If noone subscribed yet to the event, don't call next().
        if (!this.stream[event]) return;
        this.stream[event].next(value);
    }

    // The eventsIndexes is mandatory and is used by the unsubscribe method to get rid of all subscriptions
    // when the component believes it is necessary.
    subscribe(event: string, callback: Function, eventsIndexes: EventsIndexes): void {
        if (!this.stream[event]) this.stream[event] = new Subject();
        const index = this.stream[event].subscribe((value: any) => {
            callback.call(null, value);
        });

        if (!eventsIndexes[event]) eventsIndexes[event] = [];
        eventsIndexes[event].push(index);
    }

    unsubscribe(eventsIndexes: EventsIndexes): void {
        Object.keys(eventsIndexes).forEach((event: string) => {
            eventsIndexes[event].forEach((sub: Subscription) => {
                sub.unsubscribe();
            });
        });
    }

    getCurrentValue(event: string): any {
        return this.lastValues[event];
    }
}
