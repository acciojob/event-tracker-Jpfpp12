import React, { useState } from 'react';
import BigCalendar from 'react-big-calendar';
import Popup from 'reactjs-popup';
import moment from 'moment';
import EventForm from './EventForm.js';

const localizer = BigCalendar.momentLocalizer(moment);

function CalendarView({ events, setEvents, allEvents }) {
  const [popupInfo, setPopupInfo] = useState(null);

  const handleSlotSelect = ({ start }) => {
    setPopupInfo({ type: 'create', start });
  };

  const handleEventSelect = (event) => {
    setPopupInfo({ type: 'edit', event });
  };

  const closePopup = () => setPopupInfo(null);

  const saveEvent = (newEvent) => {
    if (popupInfo.type === 'create') {
      setEvents([...allEvents, newEvent]);
    } else {
      setEvents(allEvents.map(e => e.id === newEvent.id ? newEvent : e));
    }
    closePopup();
  };

  const deleteEvent = (id) => {
    setEvents(allEvents.filter(e => e.id !== id));
    closePopup();
  };

  const eventStyleGetter = (event) => {
    const isPast = moment(event.start).isBefore(moment());
    return {
      style: {
        backgroundColor: isPast ? 'rgb(222, 105, 135)' : 'rgb(140, 189, 76)',
      },
    };
  };

  return (
    <>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        selectable
        onSelectSlot={handleSlotSelect}
        onSelectEvent={handleEventSelect}
      />

      {popupInfo && (
        <Popup open modal closeOnDocumentClick onClose={closePopup}>
          <EventForm popupInfo={popupInfo} onSave={saveEvent} onDelete={deleteEvent} />
        </Popup>
      )}
    </>
  );
}

export default CalendarView;
