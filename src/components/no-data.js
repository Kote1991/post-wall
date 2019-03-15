import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NoDataBanner extends Component {
    render() {
        return (
            <div class="container">
                <Link to="/addPost" className="add-pic">+</Link>
                <div className="alert alert-primary fade in alert-dismissible show">
                    <strong>Oops!</strong> As of now NO posts are added, Be a first person to post message.
                </div>
            </div>)
    }

}

export default NoDataBanner;