import React from 'react';
import {ThreeDots} from 'react-loader-spinner';
import TicketList from './TicketList';
import ErrorMessageList from './ErrorMessageList';
import { useTickets } from '../Contexts/TicketsContext';

export default function OpenTickets() {
 const {tickets, isLoading, errors} = useTickets();


 return (
  <div data-testid="open-tickets-div" className="open-tickets">
   <span>Open Tickets:</span>
   {!isLoading && tickets.length > 0 && <TicketList tickets={tickets} />}
   {isLoading && <ThreeDots color="#00BFFF" height={100} width={100} />}
   {errors.length > 0 && <ErrorMessageList errorMessages={errors}  />}
  </div>
 );
}
