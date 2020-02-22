import React from "react";
import { Link } from 'react-router-dom';

export default function (props) {
    return (
        <>
            {/* React Fragment  */}
            <header>
                <Link style={{textDecoration: "none"}} to="/">
                    <h1 className="heading">Rick <span>And</span> Morty</h1>
                </Link>

            </header>
            <main >
                {props.children}
            </main>
        </>
    );
}

