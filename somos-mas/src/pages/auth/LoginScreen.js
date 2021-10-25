import React from 'react'

export const LoginScreen = () => {
    return (
        <div className="d-flex align-items-center justify-content-center p-5">
            <form className="text-center p-5 border rounded">
                <div className="mb-3">
                    <label for="inputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" />
                </div>
                <div className="mb-3">
                    <label for="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}
