import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJob from '../pages/MyJob';
import {useTheme} from '../themes/ThemeContext'

function RoutesApp() {
    return (
        <>  
            
            <Router>
            <div className={`${useTheme}`}>
                <Routes>
                    <Route path="/" element ={<Home/>}/>
                    <Route path="/profile" element ={<Profile/>}/>
                    <Route path="/myjob" element ={<MyJob/>}/>
                </Routes>
            </div>
            </Router>
        </>
            
    )
}

export default RoutesApp