import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div className="main">
            <h2>
                HomePage
            </h2>
            <ul>
                <li>
                <Link to="post/1" >Satu</Link>
                </li>
                <li>
                <Link to="post/2" >Dua</Link>
                </li>
                <li>
                <Link to="post/3" >Tiga</Link>
                </li>
            </ul>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate in voluptatibus minima deserunt quo, atque ea sequi eveniet perspiciatis, deleniti,
            rem reiciendis eligendi voluptatum velit praesentium architecto expedita similique commodi?</p>
        </div>
    )
}

export default Home;