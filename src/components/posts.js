import Posts from './displayPosts';
import Navbar from './navbar';
import './main.css';

function Main(props) {
    return (
        <div>
            <Navbar></Navbar>
            <Posts></Posts>
        </div>
    );
}

export default Main;