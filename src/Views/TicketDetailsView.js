import React, { useEffect, useState } from 'react';
import { updateTicket, getTicket,closeTicket } from '../Service/TicketService';
import { useParams } from 'react-router-dom';
import { useTickets } from '../Contexts/TicketsContext';
import ErrorMessageList from '../Components/ErrorMessageList';
import { ThreeDots } from 'react-loader-spinner';
import TitleInput from '../Components/Form/TitleInput';
import EmailInput from '../Components/Form/EmailInput';
import ProblemInput from '../Components/Form/ProblemInput';
import PriorityInput from '../Components/Form/PriorityInput';

export default function TicketDetailsView() {
 const { loadTickets } = useTickets();
 const { ticketId } = useParams();
 const [ticket, setTicket] = useState();
 const [errors, setErrors] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [isSuccessful, setIsSuccessful] = useState(false);

 useEffect(() => {
  async function loadTicket(id) {
   const { response, errorMessages } = await getTicket(id);
   if (response) {
    setErrors([]);
    setTicket(response);
   } else {
    setTicket(null);
    setErrors(errorMessages);
   }
   setIsLoading(false);
  }
  setIsSuccessful(false);
  loadTicket(ticketId);
 }, [ticketId]);
 

 const handleSubmit = async (event) => {
  event.preventDefault();
  const { response, errorMessages } = await updateTicket(ticket);
  if (response) {
   setIsSuccessful(true);
   await loadTickets();
  } else {
   setErrors(errorMessages);
  }
 }

 async function onCloseClick() {
  const { response, errorMessages } = await closeTicket(ticketId);
  if (response) {
   setTicket(response);
   setIsSuccessful(true);
   await loadTickets();
  } else {
   setErrors(errorMessages);
  }
 }

 if (isLoading) {
  return <ThreeDots color="#00BFFF" height={100} width={100} />;
 }

 const onTitleChange = (event) => {
  setIsSuccessful(false);
  setTicket({ ...ticket, title: event.target.value });
 }

 const onEmailChange = (event) => {
  setIsSuccessful(false);
  setTicket({ ...ticket, email: event.target.value });
 }

 const onProblemChange = (event) => {
  setIsSuccessful(false);
  setTicket({ ...ticket, problem: event.target.value });
 }

 const onPriorityChange = (event) => {
  setIsSuccessful(false);
  setTicket({ ...ticket, priority: event.target.value });
 }

 if(isLoading) {
  return <ThreeDots color="#00BFFF" height={100} width={100}/>;
 }

 if (!isLoading && !ticket){
  return <ErrorMessageList errorMessages={[`Failed to find ticket with id: ${ticketId}`]}/>
 }

 return (
  <div>
   <div className="ticket-form">
    <form hidden={!ticket} onSubmit={handleSubmit}>
     <div className="form ticket-id">
      <h2>Ticket: {ticket.id}</h2>
     </div>
     <TitleInput ticket={ticket} onChange={onTitleChange} disabled={ticket.closed}/>
     <EmailInput ticket={ticket} onChange={onEmailChange} disabled={ticket.closed}/>
     <ProblemInput ticket={ticket} onChange={onProblemChange} disabled={ticket.closed}/>
     <PriorityInput ticket={ticket} onChange={onPriorityChange} disabled={ticket.closed}/>

     <div className="form"> Created: {ticket.createdDate} </div>
     <div className="form" hidden={!ticket.closed}>
      Closed: {ticket.closedDate}
     </div>
     <div className="form-submit">
      <input hidden={ticket.closed} type="submit" value="Update" />
      <button type="button" className="close-button" hidden={ticket.closed} onClick={onCloseClick}>
       Close
      </button>
     </div>
    </form>
   </div>

   {isSuccessful && <div className="success-message">{ticket.closed ? 'Closed successfully' : 'Updated successfully'}</div>}
   {errors.length > 0 && <ErrorMessageList errorMessages={errors} />}
  </div>
 );
}
