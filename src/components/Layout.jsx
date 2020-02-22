import React from "react";

export default function (props) {
    return (
        <>
            {/* React Fragment  */}
            <header>
                <h1 className="heading">Rick <span>And</span> Morty</h1>
            </header>
            <main >
                {props.children}
            </main>
        </>
    );
}

