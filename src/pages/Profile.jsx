import { Link } from 'react-router-dom';
import Button from '../components/Button'

function Profile() {
    return (
        <>
            <div className='box'>
            <h1>Profile</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/myjob">My Job</Link></li>
                </ul>
            </nav>
            <Button/>
            </div>
        </>
    )
}

export default Profile;