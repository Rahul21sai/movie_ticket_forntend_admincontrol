import { useParams } from "react-router-dom";
import MovieForm from "./movieForm";
import { useEffect, useState } from "react";
import Axios from "axios";

function Editmovie() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ name: "", length: "", genre: "", image: "", banner:"",rating: ""});
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("https://showtimesquad-backend.onrender.com/movies/update-movie/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { name, length, genre, image,banner, rating} = res.data;
                    setInitialValue({ name, length, genre, image,banner, rating});
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }, [id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = { name: newData[0], length: newData[1], genre: newData[2], image: newData[3],banner: newData[4], rating: newData[5] };
        Axios.put("https://showtimesquad-backend.onrender.com/movies/update-movie/" + id, data)
            .then((res) => {
                if (res.status === 200)
                    alert("Record updated successfully")
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }
    return (
        <form onSubmit={handleSubmit}>
            <MovieForm getState={getState}
                nameValue={initialValue.name}
                lengthValue={initialValue.length}
                genreValue={initialValue.genre}
                imageValue={initialValue.image}
                bannerValue={initialValue.banner}
                ratingValue={initialValue.rating}>
                    Update Movie
            </MovieForm>
        </form>
    )
}
export default Editmovie;
