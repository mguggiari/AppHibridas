import {Outlet, Link} from 'react-router-dom'
import 'minireset.css'
import './App.css'

function App(){
    
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Productos</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default App