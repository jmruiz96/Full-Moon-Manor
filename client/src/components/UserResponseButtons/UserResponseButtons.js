import { React } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../UserResponseButtons/userresponsebuttons.css';
import { useLifeCountContext } from "../../utils/LifeCountContext";

export const UserResponseButtons = ({ userResponse, setEventResolution }) => {
  const { lifeCount, setLifeCount } = useLifeCountContext();

  const handleEventClick = (severity) => {
    switch (severity) {
      case "high": setLifeCount(lifeCount - 2);
        break;
      case "medium": setLifeCount(lifeCount - 1);
        break;
      default: return;
    }
  }

  return (
    <div>
      {console.log(userResponse)}
      <h2>What would you like to do?</h2>
      {userResponse.eventOutcome.map((response, index) => {
        return (
          <Button key={`response-index: ${index}`} as="input" type="button" value={response.userResponse} data-severity={response.severity} data-message={response.resolutionMessage} onClick={(e) => {
            console.log(e.target);
            setEventResolution(response.resolutionMessage);
            handleEventClick(response.severity);
          }} />
        )
      })}
    </div>
  );
}
