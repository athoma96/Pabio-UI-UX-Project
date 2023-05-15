import React, { useState } from "react";
import "./LoginPage.css";
import {Link} from "react-router-dom";
function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <div className="login-page" style={{background: '#FFE6C7'}}>
            <h1>Pabio</h1>
            <h2>Login here:</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        placeholder="Email"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"

                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <Link to="/home">
                <button type="submit">Login</button>
                </Link>
                <Link to="/signup">
                    <button type="submit">New User?</button>
                </Link>
            </form>
        </div>
    );
}

export default LoginPage;