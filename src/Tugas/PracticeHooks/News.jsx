import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Container, Navbar, } from 'react-bootstrap'
import { Circles } from "react-loader-spinner";
import { useState } from "react";
import { useEffect } from "react";
import { API_URL } from './Constants'
import './Styling.scss';


export const News = () => {
    const [search, setSearch] = useState();
    const [news, setNews] = useState([]);
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        // other code
        getNews()
     
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

    function getNews() {
        setLoading(loading = true);
        const news = fetch(API_URL);
        news
            .then(function (res) {
                return res.json();
            })
            .then((res) => {
                setNews(res.articles || []);
                setLoading(loading = false);
            })
            .catch((err) => {
                // table.innerHTML = message(err.message)
            });
    };

    function searchNews() {
        setLoading(loading = true);
        const news = fetch(API_URL + '&q= ' + search);
        news
            .then(function (res) {
                return res.json();
            })
            .then((res) => {
                setNews(res.articles || []);
                setLoading(loading = false);
            })
            .catch((err) => {
                // table.innerHTML = message(err.message)
            });
    };

    return (
        <div className="body">
            {/* <!--========== Navbar ==========--> */}
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="text-brand">
                        <img
                            alt=""
                            src="/logoQ.png"
                            width="100"
                            height="68"
                            className="brands"
                        />{' '}
                        Joysite News
                    </Navbar.Brand>
                </Container>
            </Navbar>
            {/* <!--========== Form Serach ==========--> */}
            <main>
                <section className="py-5 text-center container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <form className="d-flex">
                                <input
                                    className="form-control me-2 form-search"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    onChange={e => setSearch(e.target.value)}
                                />
                                <button
                                    className="search-button"
                                    type="button"
                                    onClick={searchNews}
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
                {/* <!--========== Content ==========--> */}
                <div className="album py-5">
                    <div className="container cards">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {loading ?
                                <Circles color="#ff8000" />
                                : (
                                    news.map((item, index) => (
                                        <div className="col" key={index}>
                                            <Col className="cards">
                                                <Card style={{ width: '22rem' }}>
                                                    <Card.Img variant="top" src={item.urlToImage} />
                                                    <Card.Body>
                                                        <Card.Title>{item.title}</Card.Title>
                                                        <Card.Text>{item.description}</Card.Text>
                                                        <Button href={item.url} className="read-news">Read More...</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </div>
                                    ))
                                )}
                        </div>
                    </div>
                </div>
            </main>
            {/* <!--========== Footer ==========--> */}
            <footer className="footer">
                <p className="footer__copy">&#169; sukmagp. All right reserved</p>
            </footer>
        </div>
    );
};