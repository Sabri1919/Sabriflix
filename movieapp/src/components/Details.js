import React from "react";
import {list} from "./list"

import {Link} from "react-router-dom"

function Details(props) {
    const id = props.match.params.id
    const movie = list.find(movie=>movie.id===Number(id))
return (
    <div>
        <div id="navbar">
            <Link to="/" id="leeft" className="Link"><h1>Home</h1></Link>
        </div>
        <div id="fl">
        
        <div><p id="des">{movie.description}</p></div>
        </div>
    </div>
);
}

export default Details;