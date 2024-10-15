import React from 'react';
import {Link} from "react-router-dom";

const Nav = (props: {name: string, setName: (name: string) => void}) => {

    let menu;

    const logout = async () => {
        await fetch("http://localhost:8000/api/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });
        props.setName("");
    }
    if (!props.name) {
        menu = (<nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </nav>)
    } else {
        menu = (<nav>
            <Link to="/">Home</Link>
            <Link to="/login" onClick={logout} >Logout</Link>
        </nav>)
    }

    return (
        <div>
            <nav>
                {menu}
            </nav>
        </div>
    );
};

export default Nav;