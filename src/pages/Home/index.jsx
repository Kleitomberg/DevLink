import './home.css'
import { Links } from '../../components/link'
import { Social } from '../../components/social-icons'
import { FaFacebook, FaInstagram, FaYoutube, FaGithub,FaLinkedin  } from 'react-icons/fa'
export default function Home(){
    return (
        <div className='home-container'>
            <h1>Kleitomberg</h1>

            <p>Meus links 👇</p>
            <main className='links'>

                <Links text="Meu canal do youtube!" link="https://youtube.com"/>
                <Links text="Meu Repositorio no Github!" link="https://youtube.com"/>

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
