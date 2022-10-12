import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './addissue.css';
import axios from 'axios';

class AddIssue extends Component {

  constructor(props) {
    super(props);
    this.state = { author: '', title: '', comment: '' };
  }

  handleChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const data = { author: this.state.author, title: this.state.title, comment: this.state.comment };
    axios.post(`/api/issue/`, data)
      .then(res => {
        console.log(res)
        this.setState({
          issueList: res && res.data && res.data.length > 0 ? res.data : [],
        })
        this.setState({ author: '', title: '', comment: '' });
        console.log("issue added")
        alert("Issue Added");
      })
      .catch(err => {
        console.log(err);
      })
  }


  render() {
    return (
      <form className="form-part" onSubmit={this.handleSubmit}>
        <label>
          Author Name:
                <input type="text" name="author" value={this.state.author} onChange={this.handleChange} /><br />
        </label>
        <label>
          Title:
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} /><br />
        </label>
        <label>
          Comment:
                <input type="text" name="comment" value={this.state.comment} onChange={this.handleChange} /><br />
        </label>

        <Button type="submit" name="submit" value="Submit" color="primary" size="lg" disabled={!(this.state.author && this.state.title && this.state.comment)}>Submit</Button>
      </form>
    );
  }
}

export default AddIssue;