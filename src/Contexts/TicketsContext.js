import React, { useContext, useEffect, useState } from 'react';
import { getOpenTickets } from '../Service/TicketService';

export const TicketsContext = React.createContext(undefined);

export const TicketsProvider = ({ children }) => {
 const [tickets, setTickets] = useState([] );
 const [isLoading, setIsLoading] = useState(false);
 const [errors, setErrors] = useState([]);

 async function loadTickets() {
  setIsLoading(true);
  const { response}  = await getOpenTickets();
  if (response) {
   setTickets(response);
  } else {
   setTickets([]);
   setErrors(['Failed to load']);
  }
  setIsLoading(false);
 }

 useEffect(() => {
  loadTickets();
 }, []);


 return <TicketsContext.Provider value={{ tickets, isLoading, errors, loadTickets }}>{children}</TicketsContext.Provider>;
};

export const useTickets = () => {
 return useContext(TicketsContext);
};