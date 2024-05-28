  import React, { useState } from 'react';
  import './css/Sample_Booking.css';
  
  const Sample_Booking = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const layout = [
        {
          id: 1,
          sections:'A',
          seats: [
            { id: 1, isAvailable: true },
            { id: 2, isAvailable: true },
            { id: 3, isAvailable: true },
            { id: 4, isAvailable: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: 5, isAvailable: true },
            { id: 6, isAvailable: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: 7, isAvailable: true },
            { id: 8, isAvailable: true },
            { id: 9, isAvailable: true },
            { id: 10, isAvailable: true },
            { id: 11, isAvailable: true }
          ]
        },
        {
          id: 2,
          sections:'B',
          seats: [
            { id: 1, isAvailable: true },
            { id: 2, isAvailable: true },
            { id: 3, isAvailable: true },
            { id: 4, isAvailable: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: 5, isAvailable: true },
            { id: 6, isAvailable: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: 7, isAvailable: true },
            { id: 8, isAvailable: true },
            { id: 9, isAvailable: true },
            { id: 10, isAvailable: true },
            { id: 11, isAvailable: true }
          ]
        },
        {
          id: 3,
          sections:'C',
          seats: [
            { id: 1, isAvailable: true },
            { id: 2, isAvailable: true },
            { id: 3, isAvailable: true },
            { id: 4, isAvailable: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: 5, isAvailable: true },
            { id: 6, isAvailable: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: 7, isAvailable: true },
            { id: 8, isAvailable: true },
            { id: 9, isAvailable: true },
            { id: 10, isAvailable: true },
            { id: 11, isAvailable: true }
          ]
        },
        {
          id: 4,
          sections:'D',
          seats: [
            { id: 1, isAvailable: true },
            { id: 2, isAvailable: true },
            { id: 3, isAvailable: true },
            { id: 4, isAvailable: true },
            { id: 5, isAvailable: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: 6, isAvailable: true },
            { id: 7, isAvailable: true },
            { id: 8, isAvailable: true },
            { id: 9, isAvailable: true },
            { id: 10, isAvailable: true },
            { id: 11, isAvailable: true },
          ]
        },
        {
          id: 5,
          sections:'E',
          seats: [
            { id: 1, isAvailable: true },
            { id: 2, isAvailable: true },
            { id: 3, isAvailable: true },
            { id: 4, isAvailable: true },
            { id: 5, isAvailable: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: 6, isAvailable: true },
            { id: 7, isAvailable: true },
            { id: 8, isAvailable: true },
            { id: 9, isAvailable: true },
            { id: 10, isAvailable: true },
            { id: 11, isAvailable: true },
          ]
        },
        {
          id: 6,
          sections:'F',
          seats: [
            { id: 1, isAvailable: true },
            { id: 2, isAvailable: true },
            { id: 3, isAvailable: true },
            { id: 4, isAvailable: true },
            { id: 5, isAvailable: true },
            { id: 6, isAvailable: true },
            { id: 7, isAvailable: true },
            { id: 8, isAvailable: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: 9, isAvailable: true },
            { id: 10, isAvailable: true },
            { id: 11, isAvailable: true },
            { id: 12, isAvailable: true },
            { id: 13, isAvailable: true },
            { id: 14, isAvailable: true },
            { id: 15, isAvailable: true },
            { id: 16, isAvailable: true },
            { id: 17, isAvailable: true }
          ]
        },
        {
          id: 7,
          sections:'G',
          seats: [
            { id: 1, isAvailable: true },
            { id: 2, isAvailable: true },
            { id: 3, isAvailable: true },
            { id: 4, isAvailable: true },
            { id: 5, isAvailable: true },
            { id: 6, isAvailable: true },
            { id: 7, isAvailable: true },
            { id: 8, isAvailable: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: 9, isAvailable: true },
            { id: 10, isAvailable: true },
            { id: 11, isAvailable: true },
            { id: 12, isAvailable: true },
            { id: 13, isAvailable: true },
            { id: 14, isAvailable: true },
            { id: 15, isAvailable: true },
            { id: 16, isAvailable: true },
            { id: 17, isAvailable: true }
          ]
        },
        {
          id: 8,
          sections:'H',
          seats: [
            { id: 1, isAvailable: true },
            { id: 2, isAvailable: true },
            { id: 3, isAvailable: true },
            { id: 4, isAvailable: true },
            { id: 5, isAvailable: true },
            { id: 6, isAvailable: true },
            { id: 7, isAvailable: true },
            { id: 8, isAvailable: true },
            { id: null, isAvailable: false, isSpace: true },
            { id: 9, isAvailable: true },
            { id: 10, isAvailable: true },
            { id: 11, isAvailable: true },
            { id: 12, isAvailable: true },
            { id: 13, isAvailable: true },
            { id: 14, isAvailable: true },
            { id: 15, isAvailable: true },
            { id: 16, isAvailable: true },
            { id: 17, isAvailable: true }
          ]
        }
      ];
  
      const handleSeatClick = (section, seatId) => {
        setSelectedSeats((prevSelectedSeats) => {
          const seatKey = `${section}-${seatId}`;
          if (prevSelectedSeats.includes(seatKey)) {
            return prevSelectedSeats.filter((id) => id !== seatKey);
          } else {
            return [...prevSelectedSeats, seatKey];
          }
        });
      };
    
      return (
        <div className="centered-container">
          <div className="seat-layout">
            {layout.map((row) => (
              <div key={row.id} className="row">
                <div className="section-label">{row.sections}</div>
                {row.seats.map((seat) =>
                  seat.isSpace ? (
                    <div key={seat.id || Math.random()} className="space"></div>
                  ) : (
                    <div
                      key={seat.id}
                      className={`seat ${seat.isAvailable ? 'available' : 'unavailable'} ${
                        selectedSeats.includes(`${row.sections}-${seat.id}`) ? 'selected' : ''
                      }`}
                      onClick={() => seat.isAvailable && handleSeatClick(row.sections, seat.id)}
                    >
                      {seat.id}
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
          <button onClick={() => alert(`Selected seats: ${selectedSeats.join(', ')}`)}>Show Selected Seats</button>
        </div>
      );
    };
  
  export default Sample_Booking;
  