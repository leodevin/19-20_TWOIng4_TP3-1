import React from 'react';
import '../index.css';

function Post(props) {
    return(
        <div className={"commentBox"}>
            <p>Dernier commentaire : {props.comment}</p>
            <div className={"super"}><button onClick={props.onClickSuper}>👍 C'est super !</button></div>
            <p> {props.nbSuper} 👍</p>
        </div>
    )
}

export default Post;