import './social.css'
import {Header} from '../../components/header'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {MdAddLink} from 'react-icons/md'
import { useState,useEffect } from 'react'
import { db } from '../../services/firebase'
import { collection, onSnapshot,query,orderBy, getDocs, addDoc, deleteDoc, doc, setDoc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

export function SocialMedia(){

    const [linkeding, setLinkeding] = useState('');
    const [instagram, setInstagram] = useState('');
    const [youtube, setYoutube] = useState('');

    useEffect(() => {

        const socialLinks = doc(db, 'social', 'links');
        getDoc(socialLinks).then((doc) => {
            if (doc.exists()) {
                setLinkeding(doc.data().linkeding)
                setInstagram(doc.data().instagram)
                setYoutube(doc.data().youtube)
            }
        }
        ).catch((error) => {
            toast.error('Erro ao carregar links')
        } )

    }, [])

    function hadlesocialLinks(e){
        e.preventDefault();

        if (linkeding === '' || instagram === '' || youtube === ''){
            toast.error('Preencha todos os campos')
            return
        }


        setDoc(doc(db, 'social','links'), {
            linkeding: linkeding,
            instagram: instagram,
            youtube: youtube,
        })
        .then(() => {
            toast.success('Links cadastrados com sucesso!')

        })
        .catch((error) => {
            toast.error('Erro ao cadastrar links')
        })


    }

    return (
        <div className='container-admin'>
            <Header/>
            <h1 className='title'>Redes Sociais</h1>

            <form action="" className='admin-form' onSubmit={hadlesocialLinks}>

                <div className='form-group'>
                    <label htmlFor="linkeding_id">Link do Linkedin:</label>
                    <Input value={linkeding} onChange={(e) => setLinkeding(e.target.value)} type='url' name='linkeding' id='linkeding_id' placeholder='Digite a url'/>
                </div>

                <div className='form-group'>
                    <label htmlFor="instagram_id">Link do Instagram:</label>
                    <Input value={instagram} onChange={(e)=> setInstagram(e.target.value)} type='url' name='instagram' id='instagram_id' placeholder='Digite a url'/>
                </div>

                <div className='form-group'>
                    <label htmlFor="youtube_id">Link do Youtube:</label>
                    <Input value={youtube} onChange={(e)=> setYoutube(e.target.value)} type='url' name='youtube' id='youtube_id' placeholder='Digite a url'/>
                </div>

                <Button type='submit' text="Salvar links">
                    <MdAddLink size={24} color="#fff"/>
                </Button>
            </form>
        </div>
    )
}
