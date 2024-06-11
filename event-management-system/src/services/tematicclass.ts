import FestivalEvent from '../models/festival';

interface EventCategoryInterface {
    name: string;
    events: FestivalEvent[];
    addEvent(event: FestivalEvent): void;
    removeEvent(event: FestivalEvent): void;
}

class EventCategory implements EventCategoryInterface {
    name: string;
    events: FestivalEvent[];

    constructor(name: string) {
        this.name = name;
        this.events = [];
    }

    addEvent(event: FestivalEvent) {
        this.events.push(event);
    }

    removeEvent(event: FestivalEvent) {
        const index = this.events.indexOf(event);
        if (index !== -1) {
            this.events.splice(index, 1);
        }
    }
}

export { EventCategory };
