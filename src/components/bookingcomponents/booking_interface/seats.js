import React, { useState } from 'react';


const SeatsCheck = (props) => {
  const seatsarr = props.obj.seats;
  const [selectedSeats, setSelectedSeats] = useState(new Set());

  const handleSeatClick = (seatId, isOccupied) => {
    if (!isOccupied) {
      const updatedSelectedSeats = new Set(selectedSeats);
      if (selectedSeats.has(seatId)) {
        updatedSelectedSeats.delete(seatId);
      } else {
        updatedSelectedSeats.add(seatId);
      }
      setSelectedSeats(updatedSelectedSeats);
    }
  };

  const handleClick = () => {
        const updatedSeats = seatsarr.map((seatData) => {
        if (selectedSeats.has(seatData.seatId)) {
            seatData.isOccupied = true;
        }
        return seatData;
        });
        props.getChilddata(updatedSeats);
    };

  const renderSeats = () => {
    const seatRows = [];
    for (let i = 0; i < 8; i++) {
      const seatRow = [];
      for (let j = 0; j < 8; j++) {
        const seatIndex = i * 8 + j;
        const seatData = seatsarr[seatIndex];
        seatRow.push(
          <div
            key={seatIndex}
            className={`col-1 ${
              seatData.isOccupied
                ? 'btn btn-dark'
                : selectedSeats.has(seatData.seatId)
                ? 'btn btn-success'
                : 'btn btn-light'
            }`}
            onClick={() => handleSeatClick(seatData.seatId, seatData.isOccupied)}
          >
            {seatData.seatId}
          </div>
        );
      }
      seatRows.push(
        <div key={i} className="row">
          {seatRow}
        </div>
      );
    }
    return seatRows;
  };

  return (
    <center>
        <div className="container">
            {renderSeats()}
            <p>{Array.from(selectedSeats).join(", ")}</p>
            <div className='btn btn-success' onClick={handleClick}>Confirm Tickets</div>
        </div>
    </center>
  );
};

export default SeatsCheck;
