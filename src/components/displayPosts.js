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
            check: posts.any,
            //flag
            bundle: true
        })

        return posts;
    }

    render() {

        let tb_data = this.state.list.map((item) => {

            /* const [item, setTitle] = useState(item.title); */

            /* const { bundle } = this.state; */

            //click handler function
            const handleClick = () => {

                //wierd setState
                this.setState({ check: item.id = undefined })
                this.setState({ check: item.userId = undefined })
                this.setState({ check: item.title = undefined })
                this.setState({ check: item.body = undefined })

                /* this.setState({ bundle: !this.state.bundle }) */
            }

            return (
                /* key={item.userId} removed */
                /* there are two userId here */

                <tr>
                    <td>{item.id}</td>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    {/* <td>{bundle ? item.userId : undefined}</td> */}
                    {/* {bundle ? <td>{item.title}</td> : <td></td>} */}
                    {/* <td>{bundle ? item.title : undefined}</td> */}
                    {/* <td>{bundle ? item.body : undefined}</td> */}
                    <td>
                        <button name={item.userId} className="btn btn-danger" onClick={handleClick}>Remove</button>
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
