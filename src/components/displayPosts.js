//import ExpenseDate from './expenseDate';
//import { render } from '@testing-library/react';
import React from "react";
import './displayTable.css';


class Posts extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.getAllUserId = this.getAllUserId.bind(this)
        this.getAllUserId();
    }

    getAllUserId = async () => {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await response.json();

        //can filter only needed data here
        const posts = jsonData.map(posts => {
            return {
                userId: posts.userId,
                id: posts.id,
                title: posts.title,
                body: posts.body
            }
        });

        this.setState({
            list: posts
        })

        console.log(posts);
        return posts;
    }

    render() {
        let tb_data = this.state.list.map((item) => {
            return (

                <tr key={item.userId}>
                    <td>{item.id}</td>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>
                        <button className="btn btn-danger">Remove</button>
                    </td>
                </tr>

            )
        })

        return (
            <div>
                <h1>Posts table</h1>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Post NO.</th>
                                <th>user ID</th>
                                <th>Title</th>
                                <th>Content</th>
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

export default Posts;
