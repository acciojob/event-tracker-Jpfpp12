import React, { useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

function EventForm({ popupInfo, onSave, onDelete }) {
  const isEdit = popupInfo.type === 'edit';
  const event = popupInfo.event || {};
  const [title, setTitle] = useState(event.title || '');
  const [location, setLocation] = useState(event.location || '');

  const handleSave = () => {
    const newEvent = {
      id: isEdit ? event.id : uuidv4(),
      title,
      location,
      start: isEdit ? event.start : popupInfo.start,
      end: moment(popupInfo.start).add(1, 'hours').toDate(),
    };
    onSave(newEvent);
  };

  return (
<div className="mm-popup">
  <div className="mm-popup__box">
    <input placeholder="Event Title" value={title} onChange={e => setTitle(e.target.value)} />
    <input placeholder="Event Location" value={location} onChange={e => setLocation(e.target.value)} />
    <div className="mm-popup__box__footer__right-space">
      <div></div>
      <div></div>
      <div></div>
      <button
        className="btn mm-popup__btn mm-popup__btn--info"
        data-cy="save-event"
        onClick={handleSave}
      >
        Save
      </button>
      <button
        className="btn mm-popup__btn mm-popup__btn--danger"
        onClick={() => onDelete(event.id)}
        style={{ display: isEdit ? 'inline-block' : 'none' }}
      >
        Delete
      </button>
    </div>
  </div>
</div>

  );
}

export default EventForm;
