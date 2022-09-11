import "./app-style.css"
import Popup from "./components/Popup"
import {useState} from 'react';
import folderIcon from "./directory_closed-5.png"
import computer5Icon from "./computer-5.png"
import computer4Icon from "./computer-4.png"
import folderOpenIcon from "./directory_open_cool-0.png"
import notepadIcon from "./notepad_file-2.png"
import notepadOpenIcon from "./notepad_file_gear-2.png"
import envelopeClosedIcon from "./envelope_closed-0.png"
import envelopeOpenIcon from "./message_envelope_open-0.png"
import documentIcon from "./message_file-0.png"
import fileQuestionIcon from "./file_question.png"
import document0Icon from "./document-0.png"
import userCardIcon from "./user_card.png"

import startButton from "./start-button.png"
import {ProjectsWindow} from "./components/ProjectsWindow/ProjectsWindow.jsx"
import {ContactInfoWindow} from "./components/ContactInfoWindow/ContactInfoWindow.jsx"
import {AboutWindow} from "./components/AboutWindow/AboutWindow.jsx"


function App() {
  const [buttonPopup, setButtonPopup] = useState(true);
  const[ProjectsWindowOpen, setProjectsWindowOpen] = useState(false);
  const[ContactInfoWindowOpen, setContactInfoWindowOpen] = useState(false);
  const[AboutWindowOpen, setAboutWindowOpen] = useState(false);

  return (
    <div className="App" >
      <div className="main-screen" >
        <div className="icons">
          <div className="folder-icon" onClick={() => setProjectsWindowOpen(true)}>
            <img src={ProjectsWindowOpen ? computer4Icon: computer5Icon}/>
            <p>Academic Projects</p>
          </div>
          <div className="folder-icon" >
            <img src={document0Icon }/> 
            <p>Leetcode Solutions</p>
          </div>
        </div>

        <div className="icons-row-2">
          <div className="folder-icon" onClick={() => setContactInfoWindowOpen(true)}>
            <img src={ContactInfoWindowOpen ? envelopeOpenIcon: envelopeClosedIcon}/>
            <p>Contact Info</p>
          </div>
          <div className="folder-icon" onClick={() => setAboutWindowOpen(true)}>
            <img src={userCardIcon}/>
            <p>About Me</p>
          </div>
        </div>
      </div>
      <div className="bottom-bar" >
        <div className="windows-logo" onClick={() => setButtonPopup(true)} >
            <img src={startButton}/>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
      </Popup>

      <ProjectsWindow trigger={ProjectsWindowOpen} setTrigger={setProjectsWindowOpen}>
      </ProjectsWindow>

      <ContactInfoWindow trigger={ContactInfoWindowOpen} setTrigger={setContactInfoWindowOpen}>
      </ContactInfoWindow>

      <AboutWindow trigger={AboutWindowOpen} setTrigger={setAboutWindowOpen}>
      </AboutWindow>

    </div>
  );
}

export default App;
