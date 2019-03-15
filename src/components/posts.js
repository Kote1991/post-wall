import React from 'react';


const Posts = (props) => {
    const post = props.post;

    // const imagePath = require(post.imgLink);
    return (
        <div className="card">
            <button type="button" className="close" onClick={props.removePost.bind(this,post.id)} >&times;</button>
            <img className="card-img-top" src={post.imgLink} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{post.imgLink.split('/')[2]}</h5>
                <p className="card-text">{post.description}.</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>

    )

}
export default Posts;