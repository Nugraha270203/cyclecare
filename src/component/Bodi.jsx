import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bdi.css'; 

const App = () => {
    return (
        <div className="container center-container">
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="username" placeholder="Username" />
                </div>
                <div className="form-group md-8">
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="form-group text-center">
                    <a href="#">Forgot Password?</a>
                </div>
                <div className="form-group text-center">
                    <button type="button" className="btn btn-danger btn-lg btn-sm rounded-pill" style={{ width: '63%' }}>Login</button>
                </div>
                <div class="form-group text-center">
                    Don't have an account?
                    <a href="/Regis" >Sign up</a>
                </div>
            </form>
        </div>
    );
};

export default App;