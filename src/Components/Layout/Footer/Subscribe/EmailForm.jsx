import { useState } from "react";
import { buildAzureFunctionURL } from "../../../../UtilityFunctions/urlBuilders";
import './Subscribe.css';

export const EmailForm = () => {
  const [emailText, setEmailText] = useState(<></>);
  const [formWasSubmitted, setFormWasSubmitted] = useState(false);
  const [apiResponse, setResponse] = useState(null);
  
  const statusText = {
    pleaseWait: 'Please Wait...',
    success: 'Submission was a success, Thank You!',
    failure: 'Something went wrong, please refresh and try again'
  }
  
  async function submitEmail() {
    setFormWasSubmitted(true);
    const url = buildAzureFunctionURL(process.env.REACT_APP_INSERT_EMAIL, "InsertCustomerEmail");

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailText })
    };
    
    await fetch(url, requestOptions).then((response) => {
        setResponse(response);
    });
  }
  
  const  handleTextChange = (event) => {
    setEmailText(event.target.value);
	};
  
  const form = (
    <form className="subscribe-button">
      <input type="email" className="subscribe-textinput" id="submitemail" onChange={handleTextChange} placeholder="Enter Your Email..."></input>
      <button onClick={submitEmail} id="subscribe-subscribebutton" type="Submit">Submit</button>
    </form>
  );

  let text = '';

  if (formWasSubmitted) {
    if(!apiResponse) 
        text = statusText.pleaseWait;

    else if(apiResponse.ok) 
        text = statusText.success

    else if(apiResponse.status !== 200) 
        text = statusText.failure;
  }

  if(!formWasSubmitted) {
    return form;
  }
  else {
    return <p className="subscribe-button">{text}</p>;
  }
}