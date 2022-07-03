import React from "react";
import './index.scss';

export default class TugasStyling extends React.Component{
    render() {
        return(
            <div className="body">
                <div>
                    {/*=================== Navbar ====================*/}
                    <nav className="navigasi">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Me</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    {/*=================== Body ====================*/}
                    <div className="container">
                        <div className="picture">
                            <img src="picture.png" alt=""/>
                        </div>
                        <div className="home__content">
                            <h1 className="home__title">Hi, I'm Sukma Giri Pratama</h1>
                            <h3 className="home__subtitle">Junior UI UX Designer and Frontend Developer</h3>
                            <p className="home__description">Junior experience in Frontend & Web Design as well as development 
                            <br/>knowladge producing quality work.</p>
                            <a href="#contact" className="home__buttons">Contact Me <i className="uil uil-message button__icon"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}