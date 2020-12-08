import React, {useState} from 'react'

// styles
import './Home.scss'

//assets
import logo from '../assets/bench.png';


const Home = () => {
    const [title] = useState('Online čakáreň')

    return (
        <div className="home">

        <h1>{title}</h1>
        <img className="logo" src={logo} alt="react logo" />
        <p>
            Čakajte kdekoľvek, len nie v čakárni! <br />
            Hotter react in your&nbsp;
            <a
                href="https://reactjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
            >
                documentation
            </a>
            .
        </p>
        </div>
    )
}

export default Home
