import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <header>
                <div className="nav" >
                    <Link  className="navchild" style={{textDecoration: 'none'}}to='/'>
                        My list
                    </Link>
                    <Link  className="navchild" style={{textDecoration: 'none'}}to='/add-todo'>
                        Add item
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Navbar