import { useState } from "react";
import BookingForm from "./bookingform";
// import Axios from "axios";

function BookTickets()
{
    const [arr,setArr] = useState([]);

    const getState = (childData) => { 
        setArr(childData);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {date: arr[0],city:arr[1],theatre:arr[2],seats:arr[4]};
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <BookingForm getState={getState} date="" city="" theatre="" seats="">
                Book Tickets
            </BookingForm>
        </form>
    )
}
export default BookTickets;
