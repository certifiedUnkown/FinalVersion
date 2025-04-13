import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import { useHistory } from "react-router-dom";

const Administrateur = () => {
    const [result, setResult] = useState<string | null>(null);
    const history = useHistory();

    // Handle QR code scan result
    const handleScan = (data: any) => {
        if (data) {
            setResult(data.text);  // Store the scanned target ID
            // Redirect to the dashboard page with the target ID
            history.push(`/admin-dashboard/${data.text}`);
        }
    };

    // Handle errors during the scan
    const handleError = (err: any) => {
        console.error("Scan error:", err);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Page réservée pour marqueur, veuillez scanner le QR code</h2>
            <QrReader
                delay={300}
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
                onError={handleError}
                onScan={handleScan}
                constraints={{ video: { facingMode: "environment" } }} // Place it here
            />
            {/* Display the scanned result */}
            {result && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Scanned Target ID:</h3>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

export default Administrateur;



