import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import styles from './Issues.css';

class Issues extends Component{
    
    constructor(props) {
        super(props);
        this.state = {value: 'Show all'};
      }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({value});
        const page = 1;
        const isOpen = value === "isOpen" ? true : value === "isClosed" ? false : null;
        this.props.filter(page,isOpen);
    }

    render() {
        return(
            <div className={styles.mainHead}>
                    <Row>
                    <Col xs={7}>
                    <form className={styles.filter}>
                        <label>
                        Filters:  
                        <select id='filters' value={this.state.value} onChange={this.handleChange}>
                            <option value="Show all">Show all</option>
                            <option value="isOpen" >isOpen</option>
                            <option value="isClosed" >isClosed</option>
                        </select>
                        </label>
                    </form>
                    </Col>
                    <Col xs={5}>
                    <div className={styles.btn}>
                        <Link to="/addissue">
                            <button id="add-issue">Add Issue</button>
                        </Link>
                        </div>
                    </Col>
                </Row>  
                </div>
        );
    }
}

export default Issues;