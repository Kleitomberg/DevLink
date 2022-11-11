
import './links.css'
export function Links({key,textcolor, bg, text,link, children}){
    return (
        <section
        key={key}
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
