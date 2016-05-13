import React from 'react';
import './styles'

export default class Login extends React.Component {
    render() {
        return <div className="Login">
            <div className="Login__form">
                <input type="text" name="u" placeholder="Username" required="required"/>
                <input type="password" name="p" placeholder="Password" required="required"/>
                <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
            </div>
        </div>;
    }
}
