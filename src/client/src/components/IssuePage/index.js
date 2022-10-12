import React, { Component } from 'react';
import axios from 'axios';
import IssueCard from '../common/IssueCard';
import PageNav from '../common/PageNav';
import Issues from '../IssuesHead/Issues';

class IssuePage extends Component {
    constructor(){
        super();
        this.state = {
            issueList : [],
            page : 1,
            isOpen : null,
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    updatePage = (page) => {
        this.setState({page},()=>{this.fetchData()});
    }

    filter = (page=1, isOpen) => {
        this.setState({page,isOpen}, () =>{this.fetchData()});
    }

    fetchData = () => {
        const {isOpen, page} = this.state;
        const fetchUrl = (isOpen == null) ? `/api/issue?page=${page}` : `/api/issue?page=${page}&isOpen=${isOpen}`;
        axios.get(fetchUrl)
        .then(res => {
            console.log(res)
            this.setState({
                issueList : res &&  res.data && res.data.length > 0 ? res.data : [],
                page : page
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() { 
        const {issueList, page} = this.state;
        return (
            <>
            <Issues filter = {this.filter}/>
             <div style={{"width":"80%", "margin":"auto"}}>
                {
                issueList.map((issue,i) => {
                    return (<IssueCard key={i} issue={issue} index={i}/>);
                })
                }
            </div>
            <PageNav page= {page} updatePage = {this.updatePage} filter = {this.filter}/>
            </>
        );
    }
}
 
export default IssuePage;