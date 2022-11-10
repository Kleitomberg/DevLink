import { Link } from "react-router-dom"
import './links.css'
export function Links({color, text,link}){
    return (
        <section className="link-area">
            <a target="_blank" className="link" href={link}>
                <p className='link-text'>{text}</p>
            </a>
        </section>

    )
}
