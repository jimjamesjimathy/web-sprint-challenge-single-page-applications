import React from "react";
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="home-page">
            <div className='header-text'>
                <h1>Lambdominos Pizza</h1>
                <p>"When you're here, you're here."</p>
            </div>
            <nav>
                <Link to='/pizza'><button id='order-pizza'>Order a pie!</button></Link>
            </nav>
        </div>
    );
}

export default Home;