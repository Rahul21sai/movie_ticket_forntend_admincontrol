import { useState } from "react";
import MovieForm from "./movieForm";
import Axios from "axios";

function AddMovie()
{
    const [arr,setArr] = useState([]);

    const getState = (childData) => { 
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {name: arr[0],length:arr[1],genre:arr[2],image:arr[3],rating:arr[4]};
        Axios.post("http://localhost:4000/movies/add-movie/",data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record added successfully");
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <MovieForm getState={getState} nameValue="" lengthValue="" genreValue="" imageValue="" ratingValue="">
                Add Movie
            </MovieForm>
        </form>
    )
}
export default AddMovie;
