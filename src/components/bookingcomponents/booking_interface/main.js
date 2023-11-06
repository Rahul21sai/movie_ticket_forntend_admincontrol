import React, { useState } from 'react';
import Seatscheck from './seats';
import  Axios  from 'axios';

const SeatBooking = (props) => {
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const prevSelected = props.obj
  const {_id} = props.obj;
  console.log(prevSelected)
  console.log(_id);

  const getChilddata = (data) => {
    setSelectedSeats(data)
    const copy={showName:props.obj.showName,location:props.obj.location,theater:props.obj.theater,date:props.obj.date,time:props.obj.time,seats:data};
    Axios.put("http://localhost:4000/shows/updateshow/"+_id, copy)
    .then((res) => {
      if(res.status === 200) alert("Booked Successfully")
      else Promise.reject()
    })
    .catch((err) => {
      alert(err)
    });
  }

  // const seatRows = 8;
  // const seatsPerRow = 8;

  // const toggleSeat = (row, seat) => {
  //   const seatId = `${String.fromCharCode(65 + row)}-${seat + 1}`;
  //   const updatedSelectedSeats = new Set(selectedSeats);

  //   if (updatedSelectedSeats.has(seatId)) {
  //     updatedSelectedSeats.delete(seatId);
  //   } else {
  //     updatedSelectedSeats.add(seatId);
  //   }

  //   setSelectedSeats(updatedSelectedSeats);
  // };

  // const isSeatSelected = (row, seat) => {
  //   return selectedSeats.has(`${String.fromCharCode(65 + row)}-${seat + 1}`);
  // };

  // const handleClick = () => {
  //   props.getVal(Array.from(selectedSeats).join(', '))
  // }

  // const Seats=()=>{
  //   var num=0;
  //   const seatinfo=prevSelected.seats;
  //   return seatinfo.map((val)=>{
  //     if(val.isOccupied){
  //       return <button className={'col-1 btn btn-light'}>
  //         {String.fromCharCode(65 + parseInt(num/8))}-{num++}
  //       </button>
  //     }
  //     else{
  //       return <button className={`col ${isSeatSelected(parseInt(num/8), (num+1)%8) ? 'btn btn-success' : 'btn btn-primary'}`} onClick={()=>toggleSeat(num/8,num%8)} key={num}>
  //         {String.fromCharCode(65 + parseInt(num/8))}-{num++%8}
  //       </button>
  //     }
  //   })
  // }
  return (
    <div>
      <Seatscheck obj={prevSelected} getChilddata={getChilddata} />
    </div>
    
  );
};

export default SeatBooking;
