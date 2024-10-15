import React, {SyntheticEvent, useState} from 'react';
import {Navigate} from "react-router-dom";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false)

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8000/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            if (!response.ok) {
                const errorContent = await response.json();
                throw new Error(errorContent.message || "Ошибка регистрации");
            }

            const content = await response.json();
            console.log(content);
            setRedirect(true);
        } catch (error) {
            console.error("Ошибка:", error);
        }

    };
    if (redirect) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                <input type="name"
                       className="form-control"
                       placeholder="Your name"
                       required
                       autoFocus
                       onChange={e => setName(e.target.value)}
                />
                <input type="email"
                       className="form-control"
                       placeholder="Email address"
                       required
                       autoFocus
                       onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            </form>
        </div>
    );
};

export default Register;