import FestivalEvent from '../models/festival'; 
import { EventCategory } from './tematicclass'; 
import Participant from '../models/participant';

interface EventManagementSystemInterface {
    createEvent(name: string, location: string, time: Date, type: string): FestivalEvent;
    deleteEvent(event: FestivalEvent): void;
    addParticipantToEvent(participant: Participant, event: FestivalEvent): void;
    removeParticipantFromEvent(participant: Participant, event: FestivalEvent): void;
}

class EventManagementSystem implements EventManagementSystemInterface {
    events: FestivalEvent[];
    eventCategories: EventCategory[];

    constructor() {
        this.events = [];
        this.eventCategories = [];
    }

    createEvent(name: string, location: string, time: Date, type: string): FestivalEvent {
        if (!name || !location || !time || !type) {
            throw new Error('Missing required parameters');
        }
        const event = new FestivalEvent(name, location, time, type);
        this.events.push(event);
        return event;
    }

    deleteEvent(event: FestivalEvent): void {
        const index = this.events.indexOf(event);
        if (index !== -1) {
            this.events.splice(index, 1);
        }
    }

    addParticipantToEvent(participant: Participant, event: FestivalEvent): void {
        event.addParticipant(participant);
    }

    removeParticipantFromEvent(participant: Participant, event: FestivalEvent): void {
        event.removeParticipant(participant);
    }
}

export { EventManagementSystem };
