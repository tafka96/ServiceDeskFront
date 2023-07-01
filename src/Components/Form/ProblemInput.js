import React from 'react';

export default function ProblemInput(props) {
 const { ticket, onChange, disabled } = props;

 return (
  <div className="form ticket-problem">
   <label>
    Problem:
    <textarea name="problem" cols="50" rows="5" disabled={disabled} value={ticket.problem} onChange={onChange} />
   </label>
  </div>
 );
}
