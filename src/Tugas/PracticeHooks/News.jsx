import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar} from 'react-bootstrap'
import styled from "styled-components";
import { Circles } from "react-loader-spinner";
import { useState } from "react";
import { useEffect } from "react";
import './Styling.scss';

const Paragraph = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export const News = () => {
    const [search, setSearch] = useState();
    const [news, setNews] = useState([]);
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        getNews()
    }, [])

    function getNews() {
        setLoading(loading = true);
        const url = `https://newsapi.org/v2/everything?q=${search}&sortBy=publishedAt&apiKey=9e43a771c30c4b81aa1d0c1f5aaba310`;
        const news = fetch(url);
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
                                    onClick={getNews}
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
                                            <div className="card shadow-sm">
                                                <img
                                                    src={item.urlToImage}
                                                    alt="image"
                                                    className="bd-placeholder-img card-img-top"
                                                    width="100%"
                                                    height={225}
                                                />
                                                <div className="card-body">
                                                    <h3>{item.title}</h3>
                                                    <small className="text-muted">{item.author}</small>

                                                    <Paragraph className="card-text">
                                                        {item.content}
                                                    </Paragraph>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="btn-group">
                                                            <a
                                                                href={item.url}
                                                                type="button"
                                                                className="btn btn-sm btn-outline-secondary read-news"
                                                            >
                                                                Read More..
                                                            </a>
                                                        </div>
                                                        <small className="text-muted p-6">
                                                            {item.publishedAt}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
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