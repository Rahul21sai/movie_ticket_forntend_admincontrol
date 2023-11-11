import Axios from "axios";
import { Link } from "react-router-dom";

function Movielistrow(props) {
    const { _id, name, length, genre, image, banner, rating} = props.obj;

    const handleClick = () => {
        Axios.delete("https://showtimesquad-backend.onrender.com/movies/delete-movie/" + _id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Record deleted successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{length}</td>
            <td>{genre}</td>
            <td><img src={image} alt={name} height="90px"/></td>
            <td><img src={banner} alt={name} height="90px"/></td>
            <td>{rating}</td>
            <td>
                <Link class="text-decoration-none text-light my-5" to={"/edit-movie/" + _id}>
                    <button class="btn btn-success">
                        Edit
                    </button>
                </Link>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}
export default Movielistrow;
