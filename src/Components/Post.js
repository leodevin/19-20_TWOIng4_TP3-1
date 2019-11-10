import React from 'react';
import '../index.css';

function Post(props) {
    return(
        <div className={"commentBox"}>
            <p>Dernier commentaire : {props.comment}</p>
            <div className={"super"}><button>👍 C'est super !</button></div>
        </div>
    )
}

export default Post;