import './home.css'
import { Links } from '../../components/link'
import { Social } from '../../components/social-icons'
import { FaFacebook, FaInstagram, FaYoutube, FaGithub,FaLinkedin  } from 'react-icons/fa'
import { db } from '../../services/firebase'
import { useEffect,useState } from 'react'
import { collection,query,orderBy, getDocs, } from 'firebase/firestore'
export default function Home(){

    const [links, setLinks] = useState([]);
    const [social, setSocial] = useState([]);

    useEffect(() => {

        function getLinks(){
            const mylinks = collection(db, 'links'); //pega os links do banco de dados
            const q = query(mylinks, orderBy('created', 'desc')); //ordena os links por data de criação

            getDocs(q)
            .then((snapshot) => {
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



        }

        getLinks()

    }, [])


    return (
        <div className='home-container'>
            <h1>Kleitomberg</h1>

            <p>Meus links 👇</p>
            <main className='links'>


                { links.map((link,index) => {
                    return (
                        <Links textcolor={link.color} bg={link.bg} key={index} text={link.titulo} link={link.url}/>
                    )
                })}

                <footer className='icones'>
                    <Social url="https://www.linkedin.com/in/kleitomberg/">
                        <FaLinkedin size={35} color='#fff'/>
                    </Social>
                    <Social url="https://github.com/Kleitomberg">
                        <FaGithub size={35} color='#fff'/>
                    </Social>
                    <Social url="https://www.instagram.com/kleitomberg/">
                        <FaInstagram size={35} color='#fff'/>
                    </Social>
                </footer>
            </main>
        </div>
    )
}
