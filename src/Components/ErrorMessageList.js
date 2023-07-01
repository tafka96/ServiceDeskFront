import React from 'react';

function ErrorMessageList(props) {
 const { errorMessages } = props;

 return (
  <div>
   {errorMessages.map(msg => <div className="error-message" key={msg}>{msg}</div>)}
  </div>

);
}
export default ErrorMessageList;
