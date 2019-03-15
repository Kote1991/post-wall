import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Title from './components/title';
import PostsWall from './components/postWall';
import AddPost from './components/add-post';

import './App.css';

class App extends Component {
  state = {
    posts: [
      
    ]

  }
  addPost(a) {
    // alert(a);
    console.log(this.state.posts);
    // var x = {
    //   ...this.state,
    //   posts: this.state.posts.push({
    //     "imgLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCxwRDlCkX6-POt3UOs8jDP8digru_0cci_NjKI4CQnVkuEnP_",
    //     "description": 'Test application '
    //   })
    // }
    // this.setState({
    //   x
    // })
    // this.setState((prevState) => {
    //   posts: prevState.posts.push({
    //     "imgLink": "https://ak7.picdn.net/shutterstock/videos/8569357/thumb/1.jpg",
    //     "description": 'Test application '
    //   })
    // })
    // this.setState((prevState) => {
    //   posts: prevState.posts.push(a)
    // })
    this.setState((prevState) => {
      posts: prevState.posts.push(a)
    })
  }
  removePost(id) {
    // this.setState((prevState) => {
    //   posts: prevState.filter()
    // })
    debugger;
    this.setState(prevState => ({
      posts: prevState.posts.filter((el, i) => el.id != id)
    }));

  }
  render() {
    return (
      <Router>
        <div className="container">
          <Title title="photo-wall" />

          <Route path="/" exact render={() => <PostsWall posts={this.state.posts} removePost={this.removePost.bind(this)} />} />
          <Route path="/addPost" render={() => <AddPost addPost={this.addPost.bind(this)} />} />
        </div>
      </Router>
    );
  }
}

export default App;
