import React, { useState } from "react";
import './nav-bar.css'

const navData = {
    navContent: [
        {
            navImage: "logo-1.webp",
            navTitle: "Team 1",
            navSubTitle: "Free"
        },
        {
            navImage: "logo-2.webp",
            navTitle: "Team 2",
            navSubTitle: "Pro"
        },
        {
            navImage: "logo-3.webp",
            navTitle: "Team 3",
            navSubTitle: "Pro"
        },
    ]
}

function NavBar() {

    const [selectedTeam, setSelectedTeam] = useState(navData.navContent[0]);

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleSelectedTeam = (team) => {
        setSelectedTeam(team);
        setIsOpen(false);
    };

    const dynamicBackground = ["bg-color-gray","bg-color-sky1","bg-color-sky2"]

  return (
    <div className="main-navbar">

            <div className="navbar-container">

                <div style={{ display: "inline-flex", width: "100%" }}>
                    <div>
                        <button className="nav-left-button" onClick={toggleDropdown}>
                            <img className="nav-left-image" src={`/src/nav/Image/${selectedTeam.navImage}`} />
                            <span className="nav-left-title">{selectedTeam.navTitle}</span>
                            <span className={`nav-left-subtitle ${dynamicBackground[navData.navContent.indexOf(selectedTeam)]}`}>{selectedTeam.navSubTitle}</span>
                        </button>

                        {isOpen && (
                            <div>
                                <div style={{ position: "absolute" }} className="nav-drop-container">
                                    <ul className="nav-drop">
                                        {navData.navContent.map((team, index) => (
                                            <li key={index} style={{ marginTop: "10px" }} className="nav-left-active">
                                                <button className="nav-left-button" onClick={() => handleSelectedTeam(team)}>
                                                    <img className="nav-left-image" src={`/src/nav/Image/${team.navImage}`} />
                                                    <div>
                                                        <span className="nav-left-title drop-left-title">{team.navTitle}</span>
                                                        <span className={`nav-left-subtitle drop-left-subtitle ${dynamicBackground[index]}`}>{team.navSubTitle}</span>
                                                    </div>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        )}
                        
                    </div>

                    <div className="nav-divider"></div>

                    <div className="nav-right-container">

                        <div className="rotating-border"></div>

                        <button className="nav-right-button">
                            <div className="nav-profile-right">
                                <div className="nav-Image-div">
                                    <img className="nav-profile-image" src={`/src/nav/Image/avatar.webp`} />
                                </div>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
    
    </div>
  )
}

export default NavBar
