import './admin.css'
import {Logo} from '../../components/Logo'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Header } from '../../components/header'
export default function Admin(){
    return (
        <div className='container-admin'>
        <Header/>
        <Logo/>
        <form className='admin-form' action="">

            <div className='form-group'>
                <label htmlFor="titulo">Titulo do Link:</label>
                <Input type='text' name='titulo' id='titulo' placeholder='Titulo do Link'/>
            </div>

            <div className='form-group'>
                <label htmlFor="url">Url do Link:</label>
                <Input type='url' name='url' id='url' placeholder='Url do Link' />
            </div>

        </form>
        </div>
    )
}
