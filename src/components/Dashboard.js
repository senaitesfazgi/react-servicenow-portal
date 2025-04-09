// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getIncidents } from '../services/serviceNowClient';  // Import the ServiceNow API client

const Dashboard = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch incidents when the component mounts
    const fetchIncidents = async () => {
      try {
        const data = await getIncidents();
        setIncidents(data.result);  // Assuming the response data is under `result`
      } catch (error) {
        console.error('Error loading incidents', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIncidents();
  }, []);  // Empty dependency array means this effect runs once, after the component mounts

  return (
    <div>
      <h1>ServiceNow Dashboard</h1>
      {loading ? (
        <p>Loading incidents...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Incident Number</th>
              <th>Short Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map((incident) => (
              <tr key={incident.sys_id}>
                <td>{incident.number}</td>
                <td>{incident.short_description}</td>
                <td>{incident.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
