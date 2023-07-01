import { API_ENDPOINTS, getData, postData } from './FetchService';

export type TicketResponse = {
 title: string;
 id: number;
 email: string;
 problem: string;
 priority: string;
 closed: boolean;
 createdDate: Date;
 closedDate: Date;
}

export async function getOpenTickets():Promise<Array<TicketResponse>>{
 const url = `${API_ENDPOINTS.TICKETS}`;
 return getData(url);
}

export async function getPriorities(){
 const url = `${API_ENDPOINTS.PRIORITIES}`;
 return getData(url);
}

export async function getTicket(id){
 const url = `${API_ENDPOINTS.TICKET}${id}`;
 return getData(url);
}

export async function addTicket(ticket){
 const url = `${API_ENDPOINTS.ADD_TICKET}`;
 return postData(url, JSON.stringify(ticket));
}

export async function updateTicket(ticket){
 const url = `${API_ENDPOINTS.UPDATE_TICKET}`;
 return postData(url, JSON.stringify(ticket));
}

export async function closeTicket(ticketId){
 const url = `${API_ENDPOINTS.CLOSE_TICKET}${ticketId}`;
 return getData(url);
}