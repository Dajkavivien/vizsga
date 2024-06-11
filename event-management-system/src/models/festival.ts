import Participant from './participant';

class FestivalEvent {
    name: string;
    location: string;
    time: Date;
    participants: Participant[];
    type: string;

    constructor(name: string, location: string, time: Date, type: string) {
        this.name = name;
        this.location = location;
        this.time = time;
        this.type = type;
        this.participants = [];
    }

    addParticipant(participant: Participant) {
        this.participants.push(participant);
    }

    removeParticipant(participant: Participant) {
        const index = this.participants.indexOf(participant);
        if (index !== -1) {
            this.participants.splice(index, 1);
        }
    }
}

export default FestivalEvent;
