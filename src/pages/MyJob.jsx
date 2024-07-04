import { Link } from 'react-router-dom';
import Button from '../components/Button'

function MyJob() {
    return (
        <>
            <div className='box'>
            <h1>My Job</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
            <Button/>
            </div>
        </>
    )
}

export default MyJob;