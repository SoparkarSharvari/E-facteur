import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IPInfoComponent = () => {
    const [ipInfo, setIpInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchIPInfo = async () => {
            try {
                const response = await axios.get('https://ipinfo.io/8.8.8.8?token=d535a4260646df');
                setIpInfo(response.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchIPInfo();

        // Clean up function to cancel any pending requests
        return () => {
            // Abort the fetch request if component unmounts
        };
    }, []);

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {ipInfo && (
                <div>
                    <p>Location for IP {ipInfo.ip}:</p>
                    <p>Country: {ipInfo.country}</p>
                    <p>City: {ipInfo.city}</p>
                    <p>Latitude: {ipInfo.loc.split(',')[0]}</p>
                    <p>Longitude: {ipInfo.loc.split(',')[1]}</p>
                </div>
            )}
        </div>
    );
};

export default IPInfoComponent;