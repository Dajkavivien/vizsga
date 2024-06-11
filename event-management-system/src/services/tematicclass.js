class EventCategory {
    constructor(name) {
        this.name = name;
        this.events = [];
    }
    addEvent(event) {
        this.events.push(event);
    }
    removeEvent(event) {
        const index = this.events.indexOf(event);
        if (index !== -1) {
            this.events.splice(index, 1);
        }
    }
}
exports.EventCategory = EventCategory;
