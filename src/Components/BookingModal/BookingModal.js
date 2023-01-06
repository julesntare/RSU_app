import * as React from "react";
import "./BookingModal.scss";
import materialSymbolssche from "../../assets/svg/materialSymbolssche.svg";
import materialSymbolsloca from "../../assets/svg/materialSymbolsloca.svg";
import mdiclose from "../../assets/svg/mdiclose.svg";
import materialSymbolseven from "../../assets/svg/materialSymbolseven.svg";
import mdiuserGroup from "../../assets/svg/mdiuserGroup.svg";
import materialSymbolsedit from "../../assets/svg/materialSymbolsedit.svg";
import mdiaccountHelp from "../../assets/svg/mdiaccountHelp.svg";
import materialSymbolsdele from "../../assets/svg/materialSymbolsdele.svg";
const BookingModal = ({ setShowModal }) => {
  return (
    <div className="frame-1">
      <header>
        <div className="flex-container">
          <img className="material-symbolsedit" src={materialSymbolsedit} />
          <img className="material-symbolsdele" src={materialSymbolsdele} />
          <img
            className="mdiclose"
            src={mdiclose}
            onClick={() => setShowModal(false)}
          />
        </div>
      </header>
      <div className="flex-container-body">
        <div className="flex-container-1">
          <img className="material-symbolseven" src={materialSymbolseven} />
          <h4>Weekly Final Year Project Progress Meeting</h4>
        </div>
        <div className="descriptions">
          Dear all , This is to inform you that every Friday we are going to
          have meeting with you regarding the progress of your final year
          project .I&#39;m expecting to see you all in the meeting . For any
          question feel free to contact me. Best Regards
        </div>
        <div className="flex-container-2">
          <img className="material-symbolssche" src={materialSymbolssche} />
          <span>2023-01-06 - 2023-01-04, 08:00 - 11:00 (weekly on friday)</span>
        </div>
        <div className="flex-container-3">
          <img className="mdiuser-group" src={mdiuserGroup} />
          <span className="year-4-cs">Year 4 CS</span>
        </div>
        <div className="flex-container-4">
          <img className="material-symbolsloca" src={materialSymbolsloca} />
          <span className="muhabura-building-fl">
            Muhabura building Floor 1, P001
          </span>
          <div className="rectangle-2">Join The Event</div>
        </div>
        <div className="flex-container-5">
          <img className="mdiaccount-help" src={mdiaccountHelp} />
          <div className="flex-user-booked">
            <span className="user-booked">
              Vanson NKURUNZIZA (CP, year 4 CSC)
            </span>
            <span className="user-booked">vanshonkurunziza@gmail.com</span>
            <span className="user-booked">0780674459</span>
          </div>
        </div>
        <div className="rectangle-1">
          <div className="rectangle-3-1">
            <a href="#">Occupy Now</a>
          </div>
          <div className="rectangle-3-2">
            <a href="#">Free It</a>
          </div>
          <div className="rectangle-3">
            <a href="#" 
            onClick={() => setShowModal(false)}>Cancel</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingModal;
