import React from 'react';
import { render, screen } from '@testing-library/react';

import Sidebar from './Sidebar';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { TicketsContext } from '../../Contexts/TicketsContext';
import * as service from '../../Service/TicketService';


service.getOpenTickets = jest.mock();
jest.mock('./OpenTickets', () => {
 const OpenTickets = () => {
  return <div data-testid="open-tickets-div" />;
 };
 return OpenTickets;
});

it('renders Sidebar with open tickets and navlink', async () => {
 const tickets = [{ id: 1, title: 'asd' }];
 const isLoading = false;

 render(
  <BrowserRouter>
   <TicketsContext.Provider value={{ tickets, isLoading }}>
    <Sidebar />
   </TicketsContext.Provider>
  </BrowserRouter>
 );

 expect(screen.getByTestId('open-tickets-div')).toBeInTheDocument();
 expect(screen.getByTestId('navlink-add-ticket')).toBeInTheDocument();
});

