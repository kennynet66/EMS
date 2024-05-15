import './notFound.css';
import { Link } from 'react-router-dom'

export default function NotFound() {
    return(
        <>
        <div className="notFoundcontent">
            <Link to="/" className='backHome' >Back Home</Link>
        </div>
        </>
    )
}
