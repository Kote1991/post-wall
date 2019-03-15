import React, { Component } from 'react';
import Posts from './posts';
import NoDataHOC from '../hoc/no-data-HOC'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// const PostsWall = (props) => {
//     const post = props.posts;
//     return (
//         <div>
//             <Link to="/addPost" className="add-pic">+</Link>

//             <div className="card-deck">  {props.posts.map((post, i) => <Posts post={post} key={post.id}  removePost={props.removePost} />)}</div>
//         </div>
//     )
// }

class PostsWall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incCount() {
        this.setState((prev) => {
            return ({ count: prev.count + 1 })
        })
        this.setState(function (prevState) {
            return { count: prevState.count + 1 }
        })
    }
    render() {
        const post = this.props.posts;
        return (
            <div>
                <Link to="/addPost" className="add-pic">+</Link>
                {this.state.count}
                <button onClick={this.incCount.bind(this)}>Click me </button>
                <div className="card-deck {props.baColor}">  {this.props.posts.map((post, i) => <Posts post={post} key={post.id} removePost={this.props.removePost} />)}</div>
            </div>
        )
    }

}


export default NoDataHOC(PostsWall);
