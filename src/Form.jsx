import { useRef } from "react"

function Form(){
    const userRef =useRef(null)
    const pssRef = useRef(null)
    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(useRef.current.value);
        console.log(pssRef.current.value); 
    }
    return(
        <form onSubmit={handleSubmit}>
            
            <input ref={userRef} type="text" placeholder="username"/>
            <input ref={pssRef} type="password" placeholder="password" />
            <button ref={btnRef} >cleck</button>
        </form>
    )
}
export default Form;