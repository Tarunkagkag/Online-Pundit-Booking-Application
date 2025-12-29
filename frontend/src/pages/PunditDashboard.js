import React, { useEffect, useState, useContext } from "react";
import API from "../api";
import { AuthContext } from "../context/AuthContext";

function PunditDashboard() {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await API.get("/pundits/bookings"); // Only pundit’s bookings from backend
      setBookings(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch bookings");
    } finally {
      setLoading(false);
    }
  };

  const cancelBooking = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this booking?")) return;

    try {
      await API.put(`/pundits/cancel/${id}`);
      alert("Booking cancelled successfully!");
      fetchBookings(); // refresh bookings after cancellation
    } catch (err) {
      console.error(err);
      alert("Failed to cancel booking");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-black">Pundit Dashboard</h2>
      {user && <p>Welcome, {user.name}</p>}

      <h4>Your Bookings:</h4>

      {loading ? (
        <p>Loading bookings...</p>
      ) : bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td>{b.user.name}</td>
                <td>{new Date(b.date).toLocaleString()}</td>
                <td>{b.status}</td>
                <td>
                  {b.status === "pending" && (
                    <button
                      onClick={() => cancelBooking(b._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PunditDashboard;
