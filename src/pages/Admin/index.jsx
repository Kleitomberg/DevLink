import { useState } from 'react'
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

        <article
        className='container-link animate-pop'


        >
            <Links bg='#fff'  color="#f00" text="texto do link">
           <button title='Excluir Link' className='btn-trash'><FiTrash2 size={18}  color="#fff"/></button>
            </Links>
        </article>

        </div>
    )
}
