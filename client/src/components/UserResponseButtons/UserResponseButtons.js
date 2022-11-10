import { React } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../UserResponseButtons/userresponsebuttons.css';

export const UserResponseButtons = ({ userResponse, setEventResolution }) => {
  return (
    <div>
      {console.log(userResponse)}
      <h2>What would you like to do?</h2>
      {userResponse.eventOutcome.map((response, index) => {
        return (
          <Button key={`response-index: ${index}`} as="input" type="button" value={response.userResponse} data-severity={response.severity} data-message={response.resolutionMessage} onClick={(e) => {
            console.log(e.target);
            setEventResolution(response.resolutionMessage)
          }} />
        )
      })}
    </div>
  );
}

