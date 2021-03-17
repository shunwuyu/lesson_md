import React from "react";

export const Header = props =>{
    return(
        <header className="movie-header">
            <h2>{props.title}</h2>
        </header>
    )
}
