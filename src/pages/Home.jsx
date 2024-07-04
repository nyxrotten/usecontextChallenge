import {useParams, Links} from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button'

function Home() {
    return (
        <>
            <div className='box'>
            <h1>Home</h1>
            <nav>
                <ul>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/myjob">My Job</Link></li>
                </ul>
            </nav>
            <Button/>
            </div>
        </>
    )
}

export default Home;