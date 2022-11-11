import { Link } from "react-router-dom"
import './links.css'
export function Links({textcolor, bg, text,link, children}){
    return (
        <section
         className="link-area"
         style={{backgroundColor: bg, color: textcolor}}

        >
            <a  style={{backgroundColor: bg, color: textcolor}} target="_blank" className="link" href={link}>
                <p className='link-text'>{text}</p>

            </a>


            {children}

        </section>

    )
}
