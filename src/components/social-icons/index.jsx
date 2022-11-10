import './icon.css'


export function Social({url, children}){
    return (
        <div className='social'>
            <a className='social' href={url} target='_blank' rel='noopener noreferrer'>
                {children}
            </a>

        </div>
    )
}
