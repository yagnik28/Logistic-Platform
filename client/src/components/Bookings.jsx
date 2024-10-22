import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/"
});

const Booking = () => {
  // pickup and dropoff location coordinates
  const [pickup, setPickup] = useState('123 Main St, New York, NY'); // Dummy pickup location
  const [dropoff, setDropoff] = useState('456 Elm St, Brooklyn, NY'); // Dummy dropoff location
  const [vehicleType, setVehicleType] = useState('car');
  const [priceEstimate, setPriceEstimate] = useState(null);
  const navigate = useNavigate();

  const handlePickupChange = (e) => {
    setPickup(e.target.value);
  };

  const handleDropoffChange = (e) => {
    setDropoff(e.target.value);
  };

  const estimatePrice = async () => {
    if(vehicleType == 'bike') {
      setPriceEstimate(270);
    }
    else if(vehicleType == 'car') {
      setPriceEstimate(430);
    }
    else {
      setPriceEstimate(550);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { 'Content-Type': 'application/json' } };
    const data = {pickupLoc: pickup, dropoffLoc: dropoff, vehicle: vehicleType, price: priceEstimate};
    const res = await axiosInstance.post('/book-vehicle', data, config);
    console.log(res.data);
    navigate("/customer-dashboard");
  };

  return (
    <div className="container min-h-[88vh] mx-auto py-8 px-40">
      <h1 className="text-2xl font-semibold mb-6">Book a Ride</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="pickup" className="block text-zinc-700 text-sm font-bold mb-2">
            Pickup Location
          </label>
          <input
            type="text"
            id="pickup"
            value={pickup}
            onChange={handlePickupChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dropoff" className="block text-zinc-700 text-sm font-bold mb-2">
            Dropoff Location
          </label>
          <input
            type="text"
            id="dropoff"
            value={dropoff}
            onChange={handleDropoffChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehicleType" className="block text-zinc-700 text-sm font-bold mb-2">
            Vehicle Type
          </label>
          <select
            id="vehicleType"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 leading-tight focus:outline-none focus:shadow-outline "
          >
            <option value="car">Car</option>
            <option value="truck">Truck</option>
            <option value="bike">Bike</option>
          </select>
        </div>
        <div className="mb-6">
          <button
            type="button"
            onClick={estimatePrice}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          >
            Estimate Price
          </button>
          {priceEstimate && (
            <p className="mt-2 text-zinc-700">Estimated Price: ₹{priceEstimate}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;