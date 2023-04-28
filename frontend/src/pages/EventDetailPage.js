import { useParams } from "react-router-dom";

function EventDetailPage() {
    const params = useParams();

    return (
      <>
        <h1>My Event Detail Page</h1>
        <li>Event ID: {params.eventId}</li>
      </>
    );
  }
  
  export default EventDetailPage;