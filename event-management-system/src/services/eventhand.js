class EventManagementSystem {
    constructor() {
        this.events = [];
        this.eventCategories = [];
    }
    createEvent(name, location, time, type) {
        if (!name || !location || !time || !type) {
            throw new Error('Missing required parameters');
        }
        const event = new festival_1.default(name, location, time, type);
        this.events.push(event);
        return event;
    }
    deleteEvent(event) {
        const index = this.events.indexOf(event);
        if (index !== -1) {
            this.events.splice(index, 1);
        }
    }
    addParticipantToEvent(participant, event) {
        event.addParticipant(participant);
    }
    removeParticipantFromEvent(participant, event) {
        event.removeParticipant(participant);
    }
}
exports.EventManagementSystem = EventManagementSystem;
