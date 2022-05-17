import React, { useState } from "react";
import './displayTable.css';


class Posts extends React.Component {

    //idk how this constructor or super works...
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            /*  bundle: [] */
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

        //
        this.setState({
            //entire array
            list: posts,
            //specific array item
            bundle: posts.any
        })

        console.log(posts);
        return posts;
    }

    render() {

        let tb_data = this.state.list.map((item) => {

            //click handler function
            const handleClick = () => {

                //wierd setState
                this.setState({ any: item.id = '' })
                this.setState({ any: item.userId = '' })
                this.setState({ any: item.title = '' })
                this.setState({ any: item.body = '' })
            }

            return (
                /* key={item.userId} removed */
                <tr>
                    <td>{item.id}</td>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>
                        <button className="btn btn-danger" onClick={handleClick}>Remove</button>
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
