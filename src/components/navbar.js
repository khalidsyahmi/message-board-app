import './main.css';

function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/#">Message Board</a>
                    <div>
                    <a class="navbar-brand" href="/#">Posts</a>
                    <a class="navbar-brand" href="/#">Comments</a>
                    </div>
                    <button class="navbar-toggler" type="button">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;