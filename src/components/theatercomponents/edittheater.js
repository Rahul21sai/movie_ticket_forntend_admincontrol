import { useParams } from "react-router-dom";
import Theaterform from "./theaterform";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditTheater() {
    const { id } = useParams();
    const [initialValue, setInitialValue] = useState({ name: "", city: ""});
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:4000/theatres/update-theatre/" + id)
            .then((res) => {
                if (res.status === 200) {
                    const { name, city} = res.data;
                    setInitialValue({ name, city});
                }
                else
                    Promise.reject();
            })
            .catch((err) => alert(err));
    }, [id])

    const getChild = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () => {
        const data = { name: newData[0], city: newData[1]};
        Axios.put("http://localhost:4000/theatres/update-theatre/" + id, data)
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
            <Theaterform getChild={getChild}
                nameValue={initialValue.name}
                cityValue={initialValue.city}>
                    Update Theater
            </Theaterform>
        </form>
    )
}
export default EditTheater;
