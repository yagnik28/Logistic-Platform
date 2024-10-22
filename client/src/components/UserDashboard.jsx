import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/"
});

const UserDashboard = () => {
  // Dummy data for active and past bookings
  const [activeBookings, setActiveBookings] = useState([]);

  const [pastBookings, setPastBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      // Fetch active bookings
      const res = await axiosInstance.get('/active-booking');
      console.log(res.data);
      setActiveBookings(res.data);

      // Fetch past bookings
      const res2 = await axiosInstance.get('/past-booking');
      setPastBookings(res2.data);
    };
    fetchBookings();
  }, []);

  const renderBookingList = (bookings, title) => (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {bookings.map((booking) => (
            <li key={booking._id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {`${booking.pickupLoc} to ${booking.dropoffLoc}`}
                  </p>
                  <p className="text-sm text-gray-500">Vehicle: {booking.vehicle}</p>
                  <p className="text-sm text-gray-500">Price: ₹{booking.price}</p>
                  <p className="text-sm text-gray-500">Status: {booking.status}</p>
                  <p className="text-sm text-gray-500">
                    Date: {new Date(booking.date).toLocaleString()}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-40 py-8 min-h-[88vh]">
      <h1 className="text-2xl font-semibold mb-6">User Dashboard</h1>
      <Link
        to="/booking"
        className="mb-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Book a Vehicle
      </Link>

      {renderBookingList(activeBookings, "Active Bookings")}
      {renderBookingList(pastBookings, "Past Bookings")}
    </div>
  );
};

export default UserDashboard;
