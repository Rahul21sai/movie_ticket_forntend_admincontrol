import React, { useState } from 'react';

const SeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState(new Set());

  const seatRows = 8;
  const seatsPerRow = 8;

  const toggleSeat = (row, seat) => {
    const seatId = `${String.fromCharCode(65 + row)}-${seat + 1}`;
    const updatedSelectedSeats = new Set(selectedSeats);

    if (updatedSelectedSeats.has(seatId)) {
      updatedSelectedSeats.delete(seatId);
    } else {
      updatedSelectedSeats.add(seatId);
    }

    setSelectedSeats(updatedSelectedSeats);
  };

  const isSeatSelected = (row, seat) => {
    return selectedSeats.has(`${String.fromCharCode(65 + row)}-${seat + 1}`);
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4">Choose Your Seats</h2>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <div className="grid">
            {Array.from({ length: seatRows }, (_, row) => (
              <div key={row} className="row">
                {Array.from({ length: seatsPerRow }, (_, seat) => (
                  <button
                    key={seat}
                    className={`col seat ${isSeatSelected(row, seat) ? 'btn btn-success' : 'btn btn-light'}`}
                    onClick={() => toggleSeat(row, seat)}
                  >
                    {String.fromCharCode(65 + row)}-{seat + 1}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center mt-3">Selected Seats: {Array.from(selectedSeats).join(', ')}</p>
    </div>

  );
};

export default SeatBooking;
