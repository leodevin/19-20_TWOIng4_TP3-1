import React from 'react';
import '../index.css';

function Post(props) {
    return(
        <div>
            <p>Dernier commentaire : {props.comment}</p>
            <button>👍 C'est super !</button>
        </div>
    )
}

export default Post;