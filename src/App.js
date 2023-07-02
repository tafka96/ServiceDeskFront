import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import TicketDetails from './Views/TicketDetailsView';
import AddTicketView from './Views/AddTicketView';
import HomeView from './Views/HomeView';
import { PriorityProvider } from './Contexts/PriorityContext';
import { TicketsProvider } from './Contexts/TicketsContext';

function App() {
 return (
  <BrowserRouter>
   <PriorityProvider>
    <TicketsProvider>
     <div className="main">
      <Sidebar />
      <div className="content">
       <Routes>
        {<Route exact path="/tickets/:ticketId" element={<TicketDetails />} />}
        {<Route exact path="/add/ticket" element={<AddTicketView />} />}
        {<Route exact path="/" element={<HomeView />} />}
       </Routes>
      </div>
     </div>
    </TicketsProvider>
   </PriorityProvider>
  </BrowserRouter>
 );
}

export default App;
