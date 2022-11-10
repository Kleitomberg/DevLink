import { Logo } from "../../components/logo"
import { Input } from "../../components/input"
import { Button } from "../../components/button"
import  './login.css'

import {auth} from '../../services/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'

import { useState } from "react"
import { toast } from 'react-toastify';

import { useNavigate} from 'react-router-dom'


export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();



    function handleLogin(e){
        e.preventDefault();
        if (email === '' && password === ''){

            toast.warn('Preencha todos os campos!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return;
        } else if(email === ''){
            toast.warn('Preencha o email!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return;
        }else if(password === ''){
            toast.warn('Preencha a senha!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return;
        }
        else if(password.length < 6){
            toast.info('A senha deve ter no mínimo 6 caracteres!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate('/admin', {replace: true})
            toast.success('Login Realizado com Sucesso!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

        })
        .catch((error) => {
            toast.error('Error ao Tentar Fazer Login!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

        });

    }
    return (
        <div className="login-container">
        <Logo/>
        <form action="" className="form-login" onSubmit={handleLogin}>
        <Input placeholder="Digite seu E-mail" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Input placeholder="Digite sua Senha" type="password" value={password}onChange={(e)=>setPassword(e.target.value)}/>
        <Button text="Entrar" type="submit"/>
        </form>
        </div>
    )
}
