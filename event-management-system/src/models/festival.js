class FestivalEvent {
    constructor(name, location, time, type) {
        this.name = name;
        this.location = location;
        this.time = time;
        this.type = type;
        this.participants = [];
    }
    addParticipant(participant) {
        this.participants.push(participant);
    }
    removeParticipant(participant) {
        const index = this.participants.indexOf(participant);
        if (index !== -1) {
            this.participants.splice(index, 1);
        }
    }
}
exports.default = FestivalEvent;
