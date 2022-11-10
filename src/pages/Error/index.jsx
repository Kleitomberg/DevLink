import './error.css'
import { Link } from 'react-router-dom'
import {Logo} from '../../components/logo'

export default function Error404(){
    return (
        <div className='error'>
            <Logo/>
        <h1>Error 404</h1>
        <p>Page not found</p>
        <Link className='to-home' to='/'>
        Voltar para Home
        </Link>
        </div>
    )
}
