import React, { useState } from "react";
import './nav-bar.css'
import ProfileMenu from "../profileMenu/ProfileMenu";

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

    const dynamicBackground = ["nav-bg-color-gray","nav-bg-color-sky1","nav-bg-color-sky2"]

  return (
    <div className="main-navbar">

            <div className="navbar-container">

                <div style={{ display: "inline-flex", width: "100%" }}>
                    <div>
                        <button className="nav-left-button" onClick={toggleDropdown}>
                            {/* <img className="nav-left-image" src={`/src/nav/Image/${selectedTeam.navImage}`} /> */}
                            <img className="nav-left-image" src={`../src/assets/Images/NavBar-Images/${selectedTeam.navImage}`} />
                            <span className="nav-left-title">{selectedTeam.navTitle}</span>
                            <span className={`nav-left-subtitle ${dynamicBackground[navData.navContent.indexOf(selectedTeam)]}`}>{selectedTeam.navSubTitle}</span>
                        </button>

                        {isOpen && (
                            <div>
                                <div style={{ position: "absolute" }} className="nav-drop-container">
                                    <ul className="nav-drop p-0 pb-2">
                                        {navData.navContent.map((team, index) => (
                                            <li key={index} style={{ marginTop: "10px" }} className="nav-left-active">
                                                <button className="nav-left-button py-2 px-1" onClick={() => handleSelectedTeam(team)}>
                                                    <img className="nav-left-image" src={`../src/assets/Images/NavBar-Images/${team.navImage}`} />
                                                    <div>
                                                        <span className="nav-left-title nav-drop-left-title">{team.navTitle}</span>
                                                        <span className={`nav-left-subtitle nav-drop-left-subtitle ${dynamicBackground[index]}`}>{team.navSubTitle}</span>
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

                        <div className="nav-rotating-border"></div>

                        <button className="nav-right-button">
                            {/* <div className="nav-profile-right">
                                <div className="nav-Image-div">
                                    <img className="nav-profile-image" src={`../src/assets/Images/NavBar-Images/avatar.webp`} />
                                </div>
                            </div> */}
                        </button>

                        <ProfileMenu />                        

                    </div>
                </div>
            </div>
    
    </div>
  )
}

export default NavBar
