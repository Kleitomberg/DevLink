import './input.css'

export function Input({placeholder, type, value, onChange}){

    return (
        <input className='input' placeholder={placeholder} type={type} value={value} onChange={onChange}/>
    )
}
