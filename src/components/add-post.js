import React, { Component } from 'react';
import {
    withRouter
} from 'react-router-dom';


class AddPost extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     "imgLink": "data:image/jpeg;base64,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",
        //     "description": 'Test application '
        // }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);

    }
    handleSubmit() {

        if (this.state) {
            this.setState({ id: new Date }, () => {
                this.props.addPost(this.state);
                this.props.history.push('/');
            })



        }
    }
    handleOnchange(e) {

        let { name, value } = e.target;
        this.setState({
            [name]: value
        }, () => {
            console.log("to get state data immedaitly after update", this.state);
        })
    }
    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img-link">Image link address</label>
                    <input name="imgLink" type="text" className="form-control" id="img-link" placeholder="Image link" onChange={this.handleOnchange} />
                </div>
                <div className="form-group">
                    <label htmlFor="image-description">Describe image</label>
                    <textarea name="description" className="form-control" id="image-description" rows="3" onChange={this.handleOnchange}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }

}

export default withRouter(AddPost);