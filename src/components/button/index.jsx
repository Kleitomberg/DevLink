import './button.css'

export function Button({children, text, type}){

    return (
        <button className='button' type={type}>
            {text}
        </button>
    )
}
