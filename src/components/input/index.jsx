import './input.css'

export function Input({placeholder,id, type, value, onChange}){

    return (
        <input className='input' id={id} placeholder={placeholder} type={type} value={value} onChange={onChange}/>
    )
}
