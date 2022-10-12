import React, { Component } from 'react';
import "./PageNav.css";

class PageNav extends Component {
    constructor(){
        super();
        this.state = {
            currentPage : 1,
        }
    };


    onChangePage = (e) => {
        let page = this.props.page;
        if(e.target.id === 'next'){
            // if(page===)
            page = page+1;
        }else{
            if(page===1){}
            else{page = page-1;}  
        }
        this.props.updatePage(page);
    }
    render() { 
        const page = this.props.page;
        return ( 
            <div className={"mainHead"}>
                <div id='prev' onClick={this.onChangePage}>
                    Prev
                </div>
                <div id='page'>
                    {page}
                </div>
                <div id='next' onClick={this.onChangePage}>
                    Next
                </div>
            </div>
         );
    }
}
 
export default PageNav;