import React from 'react';
import './Notifications.css'


function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button style={{color:"#3a3a3a", fontWeight:"bold", background: "none", fontSize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer"}}
      arial-label="Close"
      onClick={console.log("Close button has been clicked")}>

      <img src={closeIcon} alt="closeIcon" width="10px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
      	<li data="default">New course available</li>
      	<li data="urgent">New resume available</li>
      	<li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
export default Notifications;