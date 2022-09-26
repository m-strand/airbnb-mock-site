import React, {useState} from 'react';
import LoginDrop from './LoginDrop.js';

function HeaderDrop () {
    const [isLogin, setLogin] = useState(false)
    function showLoginScreen () {
        setLogin(!isLogin)
    }

    return (
        <div className="user-dropdown">
            <div className="login">
                <h4>Sign up</h4>
                <p onClick={showLoginScreen}>Log in</p>
                {isLogin? <LoginDrop/>: null}
             </div>
  
            <div className="host">
                <p>Host your home</p>
                <p>Host an experience</p>
                <p>Help</p>
            </div>

        
        </div>
    )
}

export default HeaderDrop;