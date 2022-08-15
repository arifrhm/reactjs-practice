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
        }
        this.cancelToken = ''
        this.onIptClick = this.onIptClick.bind(this)
        this.node = React.createRef()
    }


    componentDidMount() {
        // axios
        //     .get(API_URL)
        //     .then(res => {
        //         const articles = res.data.articles;
        //         // console.log(articles);
        //         this.setState({ articles });
        //     })
        //     .catch(error => {
        //         console.log('Maap Mas ada yang error', error);
        //     })
        document.addEventListener('mousedown', this.onIptClick)
    }


    componentWillUnmount() {
        document.removeEventListener('mousedown', this.onIptClick)
    }


    onIptClick = (e) => {
        if (this.node.current.contains(e.target)) {
            return
        }
        this.setState({
            articles: [],
        })
    }


    onLsChange = async (e) => {
        if (this.isReqToken) {
            this.isReqToken.cancel()
        }
        this.isReqToken = axios.CancelToken.source()
        await axios
            .get('https://newsapi.org/v2/top-headlines?country=id&apiKey=9e43a771c30c4b81aa1d0c1f5aaba310', {
                isReqToken: this.isReqToken.token,
            })
            .then((res) => {
                this.setState({
                    articles: res.data.articles,
                })
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    console.log('Could not get')
                }
            })
        let filterSearch = e.target.value.toLowerCase()
        let searchRes = this.state.Posts.filter((e) => {
            let finalRes = e.title.toLowerCase()
            return finalRes.indexOf(filterSearch) !== -1
        })
        this.setState({
            articles: searchRes,
        })
    }


    render() {
        const { articles } = this.state
        // console.log(this.state.articles);
        return (
            <div className="body">

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



                <div className="searchModule">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="input-group mb-3">
                                <input 
                                onClick={this.onIptClick}
                                onChange={this.onLsChange}
                                type="text" value="" 
                                id="search-input" className="form-control form-search" 
                                placeholder="Search News..."
                                ref={this.node} 
                                aria-label="Recipient's username" 
                                aria-describedby="button-addon2" 
                                />
                                <button 
                                id="inputan-search" className="btn btn-primary search-button" 
                                type="button">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>

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