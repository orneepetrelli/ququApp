import React from "react";
import Header from "./header";
import Footer from "./footer";

function Login() {
    return (
        <div>
            <Header />
            <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="col-md-4">
                    <div className="card p-4 shadow-sm login-card">
                        <h3 className="text-center mb-4">Login</h3>
                        <form className="needs-validation login-form" noValidate>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter your username" required />
                                <div className="invalid-feedback">Please provide a username.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                                <div className="invalid-feedback">Please provide a password.</div>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;