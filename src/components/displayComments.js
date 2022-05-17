import React from "react";
import './displayTable.css';


class Comments extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.getAllUserId = this.getAllUserId.bind(this)
        this.getAllUserId();
    }

    getAllUserId = async () => {

        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        const jsonData = await response.json();

        //can filter only needed data here
        const comments = jsonData.map(comment => {
            return {
                postId: comment.postId,
                id: comment.id,
                name: comment.name,
                email: comment.email,
                body: comment.body
            }
        });

        this.setState({
            list: comments
        })

        console.log(comments);
        return comments;
    }

    render() {
        let tb_data = this.state.list.map((item) => {
            return (

                <tr key={item.postId}>
                    <td>{item.id}</td>
                    <td>{item.postId}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.body}</td>
                    <td>
                        <button className="btn btn-danger">Remove</button>
                    </td>
                </tr>

            )
        })

        return (
            <div>
                <h1>Comments table</h1>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Comment NO.</th>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Comment</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tb_data}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Comments;
