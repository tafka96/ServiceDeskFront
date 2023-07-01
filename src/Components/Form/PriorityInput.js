import React from 'react';
import { usePriorities } from '../../Contexts/PriorityContext';

export default function PriorityInput(props) {
 const { priorities } = usePriorities();
 const { ticket, onChange, disabled } = props;

 return (
  <div className="form ticket-priority">
   Priority:
   <select name="priority" disabled={disabled} value={ticket.priority} onChange={onChange}>
    {priorities.map((p) => (
     <option key={p} value={p}>
      {p}
     </option>
    ))}
   </select>
  </div>
 );
}
