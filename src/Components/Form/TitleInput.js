import React from 'react';

export default function TitleInput(props) {
 const {ticket, onChange, disabled} = props;

 return (
  <div className="form input ticket-title">
   Title: <input name="title" type="text" disabled={disabled} size="50" value={ticket.title} onChange={onChange} />
  </div>
 );
}
