import React from "react";
import "../../src/assets/css/courseDetails.css";

const Calendar = () => {
  return (
    <div className="calendar-page">
      <h1 className="text-center my-4" style={{
        fontWeight: "lighter",
      }}>Events and Class Schedules</h1>
      <iframe
        title="Google Calendar"
        src="https://calendar.google.com/calendar/embed?src=daphinenambafu%40gmail.com&ctz=Africa%2FNairobi"
        style={{ border: "0", width: "100%", height: "600px" }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Calendar;
