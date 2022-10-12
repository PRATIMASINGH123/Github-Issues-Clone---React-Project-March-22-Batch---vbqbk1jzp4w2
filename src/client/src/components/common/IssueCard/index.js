import React, { Component } from 'react';
import './IssueCard.css';
import img1 from '../../../assets/images/issueOpen.svg';
import img2 from '../../../assets/images/issueClosed.svg';

class IssueCard extends Component {

    render() {
        const title = this.props.issue && this.props.issue.title ? this.props.issue.title : 'My First Issue';
        const author = this.props.issue && this.props.issue.author ? this.props.issue.author : 'nitesh mahawar';
        const date = this.props.issue && this.props.issue.date ? this.props.issue.date : '4 Dec 2020';
        const id = this.props.issue && this.props.issue.id ? this.props.issue.id : 1;
        const isOpen = this.props.issue && this.props.issue.isOpen ? this.props.issue.isOpen : false;
        return (
            <>
                <div className={"issueCardParent"}>
                    <div className={"issueStatus"}>
                        <div id="status_image" className={"issueImageParent"}>
                            <img className={"issueStatus"} src={isOpen ? img1 : img2} alt={isOpen ? 'Open' : 'closed'} id={isOpen ? 'Open' : 'Closed'} />
                        </div>
                    </div>
                    <div className={"issueDetails"}>
                        <div id={"issue_title" + this.props.index} className={"title"}>
                            {title}
                        </div>
                        <div id="issue_metadata" className={"metadata"}>
                            {isOpen ? `#${id} opened on ${date} by ${author}` : `#${id} by ${author} was closed on ${date} `}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default IssueCard;