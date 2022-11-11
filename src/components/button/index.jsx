import './button.css'

export function Button({children, text, icon, type, onClick, className}){

    return (
        <button className='button' type={type} onClick={onClick}>
            {text}{children}{icon}
        </button>
    )
}
