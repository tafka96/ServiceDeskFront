import React, { useContext, useEffect, useState } from 'react';
import { getPriorities } from '../Service/TicketService';

export const PriorityContext = React.createContext(undefined);

export const PriorityProvider = ({ children }) => {
 const [priorities, setPriorities] = useState([]);
 const [prioritiesLoading, setPrioritiesLoading] = useState(true);
 console.log(priorities);

 useEffect(() => {
  async function loadPriorities() {
   const {response} = await getPriorities();
   console.log(response);
   if (response) {
    setPriorities(response);
   }
   setPrioritiesLoading(false);
  }
  console.log('context')
  loadPriorities();
 }, []);


 return <PriorityContext.Provider value={{ priorities, prioritiesLoading }}>{children}</PriorityContext.Provider>;
};

export const usePriorities = () => {
 return useContext(PriorityContext);
};