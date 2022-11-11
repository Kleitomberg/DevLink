import { useState, useEffect } from 'react'
import './admin.css'
import {Logo} from '../../components/Logo'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Header } from '../../components/header'
import {MdAddLink} from 'react-icons/md'
import {FiTrash2} from 'react-icons/fi'
import { toast } from 'react-toastify'

import { db } from '../../services/firebase'
import { collection, onSnapshot,query,orderBy, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'


import { Links } from '../../components/link'


export default function Admin(){

    const [link, setLink] = useState('');
    const [text, setText] = useState('');
    const [bg, setBg] = useState('');
    const [color, setColor] = useState('');
    const [links, setLinks] = useState([]);

   async function linkDelete(id){
        await deleteDoc(doc(db, 'links', id))
        .then(() => {
        toast.success('Link deletado com sucesso!')
        })
        .catch((error) => {
        toast.error('Erro ao deletar link')
        })
    }

    useEffect(() => {
        const mylinks = collection(db, 'links'); //pega os links do banco de dados
        const q = query(mylinks, orderBy('created', 'desc')); //ordena os links por data de criação
        const unsubscribe = onSnapshot(q, (snapshot) => { //escuta as mudanças no banco de dados
            let list = [];

            snapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    titulo: doc.data().titulo,
                    url: doc.data().url,
                    bg: doc.data().bg,
                    color: doc.data().color,
                })
            })

            setLinks(list)
        })

    }, [])

    function handleAddLink(e){
        e.preventDefault();
        if (link === '' || text === '' || bg === '' || color === ''){

            toast.warn('Preencha todos os campos!', {});
            return;
        }
        addDoc(collection(db, 'links'), {
            url: link,
            titulo: text,
            bg: bg,
            color: color,
            created: new Date()
        })
        .then(() => {
            toast.success('Link adicionado com sucesso!', {});
            setLink('');
            setText('');
            setBg('');
            setColor('');
        })
        .catch((error) => {
            toast.error('Erro ao adicionar link!', {});
        }
        )


    }


    return (
        <div className='container-admin'>
        <Header/>
        <Logo/>
        <form className='admin-form' action="" onSubmit={handleAddLink}>

            <div className='form-group'>
                <label htmlFor="titulo">Titulo do Link:</label>
                <Input value={text} onChange={(e) => setText(e.target.value)}  type='text' name='titulo' id='titulo' placeholder='Titulo do Link'/>
            </div>

            <div className='form-group'>
                <label htmlFor="url">Url do Link:</label>
                <Input value={link} onChange={(e) => setLink(e.target.value)} type='url' name='url' id='url' placeholder='Url do Link' />
            </div>

            <section className='container-colors'>
                <div className='form-group-color'>
                    <label className='right' htmlFor="bg-link">Bg Link:</label>
                    <input value={bg} onChange={ (e) => setBg(e.target.value) } className='bg-color' id='bg-link' type="color" />
                </div>
                <div className='form-group-color'>
                    <label className='right' htmlFor="text-link">Text Link:</label>
                    <input value={color} onChange={(e) => setColor(e.target.value)} className='text-color' id='bg-link' type="color" />
                </div>

            </section>

            { text !== "" &&(
                <div className='preview'>
                <p className='title'>Veja como ficará o seu link 👇</p>
                <article
                className='container-link animate-pop'

                >
                    <Links bg={bg}  textcolor={color} text={text}>
                   <button title='Excluir Link' className='btn-trash'><FiTrash2 size={18}/></button>
                    </Links>
                </article>


                </div>
            )}
        <Button className='btn-register' text='Salvar'><MdAddLink size={24} color="#fff"/>  </Button>
        </form>

        <h2 className='my-links'>Meus Links</h2>

       {links.map((item,index) => {
        return(
            <article
            key={index}
            className='container-link animate-pop'>
                <Links bg={item.bg} color={item.color}text={item.titulo}>
               <button onClick={(e) => linkDelete(item.id)} title='Excluir Link' className='btn-trash'><FiTrash2 size={18}  color="#fff"/></button>
                </Links>
            </article>
        )
       })}



        </div>
    )
}
