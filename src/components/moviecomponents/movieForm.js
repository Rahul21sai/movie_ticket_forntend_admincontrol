import { useEffect, useState } from "react";

function MovieForm(props)
{
    const [name,setName] = useState(props.nameValue);
    const [length,setLength] = useState(props.lengthValue);
    const [genre,setGenre] = useState(props.genreValue);
    const [image, setImage] = useState(props.imageValue);
    const [rating,setRating] = useState(props.ratingValue);
    
    useEffect(()=>{
        setName(props.nameValue);
        setLength(props.lengthValue)
        setGenre(props.genreValue)
        setImage(props.imageValue);
        setRating(props.ratingValue)
    },[props.nameValue,props.lengthValue,props.genreValue,props.imageValue,props.ratingValue]);
   
    const arr = [name, length, genre, image, rating];
   
    const handleClick = () =>{
        props.getState(arr)
    }

    return(
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter movie name" />
            <input defaultValue={props.lengthValue} onChange={(event)=>setLength(event.target.value)} class="form-control my-3" placeholder="Enter movie length" />
            <input defaultValue={props.genreValue} onChange={(event)=>setGenre(event.target.value)} class="form-control my-3" placeholder="Enter movie genre" />
            <input defaultValue={props.imageValue} onChange={(event)=>setImage(event.target.value)} class="form-control my-3" placeholder="Enter movie imageurl" />
            <input defaultValue={props.ratingValue} onChange={(event)=>setRating(event.target.value)} class="form-control my-3" placeholder="Enter movie rating" />
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">Add Movie</button>
        </div>
    )
}

export default MovieForm;
