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
                    {/*=================== Home ====================*/}
                    <section id="home">
                        <div className="container">
                            <div className="home__img">
                            <img src="./picture.png" alt="" className="picture" />
                            </div>
                            <div className="home__content">
                            <h1 className="home__title">Hi, I'm Sukma Giri Pratama</h1>
                            <h3 className="home__subtitle">UI UX Designer and Frontend Developer</h3>
                            <p className="home__description">Junior experience in Frontend &amp; Web Design as well as development 
                                <br />knowladge producing quality work.</p>
                            <a href="#contact" className="home__buttons">Contact Me <i className="uil uil-message button__icon" /></a>
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    {/*=================== About ====================*/}
                    <section id="about">
                        <h2 className="about-tittle">About Me</h2>
                        <p className="about-description">I am an Informatics Engineering student at a private university in Jakarta.
                            I have an interest in technology and design, so I join the program organized by eduwork
                            and keep up with my design interests by exploring the world of UI UX in my spare time.
                        </p>
                        <h2 className="q-tittle">Qualification</h2>
                        <div className="about__container">
                            <div className="q-1">
                            <h4 className="q-tittle1">Suku Dinas Sosial Jakarta Barat <br /> (2017)</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Velit aspernatur dolores deserunt, eaque harum, repellat doloremque obcaecati aliquam, 
                                maxime saepe similique consequatur dolore iure officia laborum! Nostrum, harum. Ea, eveniet!</p>
                            </div>
                            <div className="q2">
                            <h4 className="q-tittle2">Lembaga Penerbangan dan Antariksa Nasional <br /> (2021)</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Quas nulla ad officia laborum doloribus commodi cupiditate tempore dignissimos pariatur iusto. 
                                Dolores modi accusantium libero qui cum porro alias dicta enim.</p>
                            </div>
                        </div>
                    </section>
                </div>

                <div>
                    {/*=================== Contact ====================*/}
                    <section className="contact section" id="contact">
                        <h2 className="contact__title">Contact Me</h2>
                        <form action="" className="contact__form">
                            <div className="contact__inputs">
                            <div className="contact__content">
                                <label htmlFor="" className="contact__label">Name</label>
                                <input type="text" className="contact__input" />
                            </div>
                            <div className="contact__content">
                                <label htmlFor="" className="contact__label">Email</label>
                                <input type="email" className="contact__input" />
                            </div>
                            <div className="contact__content">
                                <label htmlFor="" className="contact__label">Message</label>
                                <textarea name="" cols={0} rows={7} className="contact__input" defaultValue={""} />
                            </div>
                            <div>
                                <button type="submit" className="contact_button">
                                Send Message
                                </button>
                            </div>
                            </div>
                        </form>
                    </section>

                </div>

                <div>
                    {/*=================== Footer ====================*/}
                    <footer className="footer">
                        <p className="footer__copy">© sukmagp. All right reserved</p>
                    </footer>
                </div>
            </div>
        )
    }
}