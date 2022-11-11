import './button.css'

export function Button({children, text, icon, type}){

    return (
        <button className='button' type={type}>
            {text}{children}{icon}
        </button>
    )
}
