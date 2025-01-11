import styles from './loginView.module.css';
import React from "react";
import {useNavigate} from "react-router-dom";

const LoginView: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/home');
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 vw-100 container-sm">
            {/* Left Card */}
            <div className="card-group" style={{ maxWidth: '90%', height: '40em'}}>
                <div className="card d-none d-md-block">
                    <img src="/images/scrimmage.jpg"
                         className="card-img-top"
                         style={{width:'100%', height:'100%', objectFit:'cover'}}
                         alt="Scrimmage" />
                </div>

                {/* Right Card */}
                <div className="card p-4 d-flex flex-column justify-content-center">
                    <h1 className="fw-bold">Pocket Office Pool</h1>
                    <h5 className="fw-normal mt-3 text-center">Sign into your account</h5>
                    <form onSubmit={handleLogin}>
                        <div className="form-group mb-4">
                            <label htmlFor="emailInput">Email Address</label>
                            <input type="email"
                                   className="form-control"
                                   id="emailInput"
                                   placeholder={"Enter email"} />
                            </div>
                        <div className="form-group mb-4">
                            <label htmlFor="passwordInput">Password</label>
                            <input type="password"
                                   className="form-control"
                                   id="passwordInput"
                                   placeholder={"Password"} />
                        </div>
                        <button type="submit" className={`${styles.loginBtn} btn w-100 mb-3`}>Login</button>
                        <a className="small text-muted d-block text-center mb-3" href="">Forgot Password?</a>
                        <p className="mb5 pb-lg-2 d-block text-center" style={{color: '#393f81'}}>
                            Don't have an account?
                            <a href="">Register here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        );
}

export default LoginView;