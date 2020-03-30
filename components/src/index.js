import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetails'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>Sure?</ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Linh" 
                    timeAgo="Today at 4:00PM"  
                    text="Nice blog post!" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="asasa" timeAgo="Yesterdat at 4:00PM" text="asdasdasdf" avatar={faker.image.avatar()}/>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Lierergnh" timeAgo="Today at 6:00PM" text="asd affg uhif" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))