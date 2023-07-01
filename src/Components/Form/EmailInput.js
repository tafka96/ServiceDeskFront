import React from 'react';

export default function EmailInput(props) {
 const {ticket, onChange, disabled} = props;

 return (
  <div className="form input ticket-email">
   Email: <input name="email" type="text" disabled={disabled} size="50" value={ticket.email} onChange={onChange} />
  </div>
 );
}
