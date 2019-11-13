import React from 'react';
import '../index.css';

function Post(props) {
    return(
        <div className={"commentBox"}>
            <p>Dernier commentaire : {props.comment}</p>
            <div className={"super"}><button onClick={props.onClickSuper}>👍 C'est super !</button></div>
            <p> {props.nbSuper}
                <div style={{
                    fontSize: props.nbSuper*2,
                }}>👍</div>
            </p>
        </div>
    )
}

export default Post;