import { EventManagementSystem } from './services/eventhand';
import { EventCategory } from './services/tematicclass';
import Participant from './models/participant';

const eventSystem = new EventManagementSystem();

const myEvent = eventSystem.createEvent("My Festival", "Location", new Date(), "Music");

const participant = new Participant("John Doe", 30, "john@example.com");

eventSystem.addParticipantToEvent(participant, myEvent);

eventSystem.removeParticipantFromEvent(participant, myEvent);

eventSystem.deleteEvent(myEvent);

const musicCategory = new EventCategory("Music");
const sportsCategory = new EventCategory("Sports");

musicCategory.addEvent(myEvent);
