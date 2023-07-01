import React from 'react';
import OpenTickets from './OpenTickets';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
 return (
  <div className="menu">
   <div className="menu-header">Service Desk</div>
   <div className="new-ticket-button">
    <NavLink to="/add/ticket">New Ticket</NavLink>
   </div>
   <OpenTickets />
  </div>
 );
}
