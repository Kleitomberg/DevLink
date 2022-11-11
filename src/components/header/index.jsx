import './header.css'
import {BiLogOut} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { toast } from 'react-toastify';
import { useEffect } from 'react';


export function Header(){

    useEffect(() => {
        const user = localStorage.getItem('usuarioLogado');
        if(user === null){
            toast.warn('Você precisa estar logado para acessar essa página!', {});
        }else{

        }

    }, []);

    async function logout(){
        await signOut(auth);
        localStorage.removeItem('user');
        toast.success('Usuario deslogado com Sucesso!', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
    }
    return (
        <header className='admin-header'>
            <nav className='nav-header'>
                <button onClick={logout}>
                    <BiLogOut size={28} color="#d82629"/>
                </button>
                <Link to="/admin">Links</Link>
                <Link to="/admin/social">Redes sociais</Link>
                <h1>{}</h1>
            </nav>
        </header>
    )
}
