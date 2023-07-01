import React from 'react';
import { NavLink } from 'react-router-dom';

function TicketList(props) {
 const { tickets } = props;

 return (
  <ul className="tickets-list">
   {tickets.map((ticket) => (
    <NavLink key={ticket.id} to={`/tickets/${ticket.id}`}>
     <li>
      <img src={`../${ticket.priority}.png`} alt="No logo found" />
      <span>{ticket.title}</span>
     </li>
    </NavLink>
   ))}
  </ul>
 );
}

export default TicketList;
