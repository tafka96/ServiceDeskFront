import React, { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import ErrorMessageList from '../Components/ErrorMessageList';
import { addTicket } from '../Service/TicketService';
import { useTickets } from '../Contexts/TicketsContext';
import TitleInput from '../Components/Form/TitleInput';
import EmailInput from '../Components/Form/EmailInput';
import ProblemInput from '../Components/Form/ProblemInput';
import PriorityInput from '../Components/Form/PriorityInput';

export default function AddTicketView() {
 const { loadTickets } = useTickets();
 const [ticket, setTicket] = useState({ title: '', email: '', problem: '', priority: '' });
 const [isLoading, setIsLoading] = useState(false);
 const [isSuccessful, setIsSuccessful] = useState(false);
 const [errors, setErrors] = useState([]);


 async function handleSubmit(event) {
  event.preventDefault();
  setIsLoading(true);
  const { response, errorMessages } = await addTicket(ticket);
  if (response) {
   setIsSuccessful(true);
   setErrors([]);
   await loadTickets();
  } else {
   setErrors(errorMessages);
  }
  setIsLoading(false);
 }

 const onTitleChange = (event) => {
  setTicket({ ...ticket, title: event.target.value });
 };

 const onEmailChange = (event) => {
  setTicket({ ...ticket, email: event.target.value });
 };

 const onProblemChange = (event) => {
  setTicket({ ...ticket, problem: event.target.value });
 };

 const onPriorityChange = (event) => {
  setTicket({ ...ticket, priority: event.target.value });
 };

 if (isLoading) {
  return <ThreeDots color="#00BFFF" height={100} width={100} />;
 }

 return (
  <div>
   <form hidden={isLoading} onSubmit={handleSubmit}>
    <div className="form ticket-id">
     <h2>New Ticket</h2>
    </div>
    <TitleInput ticket={ticket} onChange={onTitleChange} disabled={isSuccessful} />
    <EmailInput ticket={ticket} onChange={onEmailChange} disabled={isSuccessful} />
    <ProblemInput ticket={ticket} onChange={onProblemChange} disabled={isSuccessful} />
    <PriorityInput ticket={ticket} onChange={onPriorityChange} disabled={isSuccessful} />
    <div className="form-submit">
     <input hidden={isSuccessful} type="submit" value="Create" />
    </div>
   </form>
   {isSuccessful && <div className="success-message">{'Created successfully'}</div>}
   {errors.length > 0 && <ErrorMessageList errorMessages={errors} />}
  </div>
 );
}
