import { useEffect, useState } from "react";

function Theaterform(props)
{
    const [name,setName] = useState(props.nameValue);
    const [city,setCity] = useState(props.cityValue);
    
    useEffect(()=>{
        setName(props.nameValue);
        setCity(props.cityValue)
    },[props.nameValue,props.cityValue]);
   
    const arr = [name, city];
   
    const handleClick = () =>{
        props.getChild(arr)
    }

    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter theater name" />
            <input defaultValue={props.cityValue} onChange={(event)=>setCity(event.target.value)} class="form-control my-3" placeholder="Enter theater location" />
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">{props.children}</button>
        </div>
    )
}

export default Theaterform;
