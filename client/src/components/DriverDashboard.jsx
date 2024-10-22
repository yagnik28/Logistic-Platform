import { useState, useEffect } from 'react';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/"
});

const DriverDashboard = () => {
  const [currentJob, setCurrentJob] = useState(null);
  const [availableJobs, setAvailableJobs] = useState([]);
  const [pastJobs, setPastJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axiosInstance.get('/active-jobs');
      setAvailableJobs(res.data);
      const res2 = await axiosInstance.get('/past-jobs');
      setPastJobs(res2.data);
    };
    fetchJobs();
  }, []);

  const updateJobStatus = (status) => {
    setCurrentJob({ ...currentJob, status });
    if (status === 'completed') {
      currentJob.status = 'completed';
      setPastJobs([...pastJobs, currentJob]);
      setCurrentJob(null);
    }
  };

  const acceptJob = async (job) => {
    setCurrentJob({...job, status: 'accepted'});
    const config = { headers: { 'Content-Type': 'application/json' } };    
    const res = await axiosInstance.delete('/remove-job', {data: job}, config);
    setAvailableJobs(availableJobs.filter((availableJob) => availableJob._id !== job._id));
  };

  const renderJobList = (jobs, title) => (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
          {jobs.map((job) => (
            <li key={job._id} className="px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {`${job.pickupLoc} to ${job.dropoffLoc}`}
                  </p>
                  <p className="text-sm text-gray-500">Vehicle: {job.vehicle}</p>
                  <p className="text-sm text-gray-500">Earnings: ₹{job.price}</p>
                  <p className="text-sm text-gray-500">Date: {new Date(job.date).toLocaleString()}</p>
                </div>
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${job.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                  {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto min-h-[88vh]  py-8 px-40">
      <h1 className="text-2xl font-semibold mb-6">Driver Dashboard</h1>
      {currentJob ? (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Current Job</h2>
          <p>PickupLoc: {currentJob.pickupLoc}</p>
          <p>DropoffLoc: {currentJob.dropoffLoc}</p>
          <p>Vehicle: {currentJob.vehicle}</p>
          <p>Earnings: ₹{currentJob.price}</p>
          <p>Status: {currentJob.status}</p>
          {currentJob.status === 'accepted' && (
            <button
              onClick={() => updateJobStatus('in progress')}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Start Job
            </button>
          )}
          {currentJob.status === 'in progress' && (
            <button
              onClick={() => updateJobStatus('completed')}
              className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Complete Job
            </button>
          )}
        </div>
      ) : (
        <p className="mb-6">No current job. Accept a job from the list below.</p>
      )}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Available Jobs Nearby</h2>
        {availableJobs.length ? <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {availableJobs.map((job) => (
              <li key={job._id} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {`${job.pickupLoc} to ${job.dropoffLoc}`}
                    </p>
                    <p className="text-sm text-gray-500">Vehicle: {job.vehicle}</p>
                    <p className="text-sm text-gray-500">Earnings: ₹{job.price}</p>
                  </div>
                  <button
                    onClick={() => acceptJob(job)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    disabled={currentJob && currentJob.length != 0}
                  >
                    Accept
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

          :

          <p> No available jobs Nearby </p>
        }
      </div>
      {renderJobList(pastJobs, "Past Jobs")}
    </div>
  );
};

export default DriverDashboard;