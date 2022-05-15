import Comments from './displayComments';
import Navbar from './navbar';
import './main.css';

function Main(props) {
    return (
        <div>
            <Navbar></Navbar>
            <Comments> </Comments>
        </div>
    );
}

export default Main;