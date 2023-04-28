import { Link } from "react-router-dom";

function EventsPage() {
  const EVENTS = [
    { id: "ev1", title: "First Event" },
    { id: "ev2", title: "Second Event" },
    { id: "ev3", title: "Third Event" },
  ];

  return (
    <>
      <h1>My Events Page</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
