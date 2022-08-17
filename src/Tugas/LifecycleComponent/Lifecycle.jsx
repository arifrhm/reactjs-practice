import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Row } from 'react-bootstrap'
import Articles from './Articles'
import './Styling.scss';
import { API_URL } from './Constants'
import axios from 'axios';

export default class Lifecycle extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            search: "",
        }
    }


    componentDidMount() {
        axios
            .get(API_URL)
            .then(res => {
                const articles = res.data.articles;
                // console.log(articles);
                this.setState({ articles });
            })
            .catch(error => {
                console.log('Maap Mas ada yang error', error);
            })
    }

    searcharticles(){
        let value = this.state.search
        axios
        .get(API_URL + '&q= ' + value)
        .then(res => {
            const articles = res.data.articles;
            // console.log(articles);
            this.setState({ articles });
        })
        .catch(error => {
            console.log('Maap Mas ada yang error', error);
        })
    }

    render() {
        const { articles } = this.state
        // console.log(this.state.articles);
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

                {/* <!--========== Form Searching ==========--> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="input-group mb-3">
                                <input 
                                type="text"
                                id="search-input" 
                                className="form-control form-search" 
                                placeholder="Search News..."
                                aria-label="Recipient's username" 
                                aria-describedby="button-addon2"
                                onChange={(e) =>
                                    this.setState({
                                      search: e.target.value,
                                    })
                                  } 
                                />
                                <button 
                                id="inputan-search" 
                                className="btn btn-primary search-button" 
                                type="button"
                                onClick={(e) =>
                                    this.searcharticles(e)}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!--========== Content ==========--> */}
                    <div id="data" className="row cards">
                        <Row>
                            {articles && articles.map((article) => (
                                <Articles
                                    key={articles.id}
                                    article={article}
                                />
                            ))}
                        </Row>
                    </div>
                </div>

                {/* <!--========== Footer ==========--> */}
                <footer className="footer">
                    <p className="footer__copy">&#169; sukmagp. All right reserved</p>
                </footer>

            </div>
        )
    }
}