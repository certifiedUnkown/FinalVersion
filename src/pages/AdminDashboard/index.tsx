// src/pages/AdminDashboard/AdminDashboard.tsx
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import axios from "axios";

interface Archer {
    id: string;
    licenseNumber: string;
    score: number | null;
}

const AdminDashboard = () => {
    const { cibleId } = useParams<{ cibleId: string }>();
    const history = useHistory();
    const [archers, setArchers] = useState<Archer[]>([]);

    useEffect(() => {
        // Fetch archers from backend (replace with your real endpoint)
        axios.get(`https://192.168.0.11:3000/clubsUtilisateurs/licence/${cibleId}`)
            .then((res) => setArchers(res.data))
            .catch((err) => console.error("Error fetching archers", err));
    }, [cibleId]);

    const handleEditScore = (archerId: string) => {
        history.push(`/edit-score/${archerId}`);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Admin Dashboard</h2>
            <h3>Target ID: {cibleId}</h3>

            {archers.length > 0 ? (
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                    <thead>
                    <tr>
                        <th style={{ border: "1px solid #ccc", padding: "10px" }}>License Number</th>
                        <th style={{ border: "1px solid #ccc", padding: "10px" }}>Score</th>
                        <th style={{ border: "1px solid #ccc", padding: "10px" }}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {archers.map((archer) => (
                        <tr key={archer.id}>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>{archer.licenseNumber}</td>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                                {archer.score !== null ? archer.score : "Not registered"}
                            </td>
                            <td style={{ border: "1px solid #ccc", padding: "10px" }}>
                                <button onClick={() => handleEditScore(archer.id)}>
                                    {archer.score !== null ? "Modify Score" : "Register Score"}
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>No archers found for this target.</p>
            )}
        </div>
    );
};

export default AdminDashboard;


