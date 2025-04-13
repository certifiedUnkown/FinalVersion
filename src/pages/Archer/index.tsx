import React, { useState } from "react";
import QrReader from "react-qr-scanner";

const Archer = () => {
    const [result, setResult] = useState<string | null>(null);

    // Fonction de gestion de l'événement lorsque le QR code est scanné
    const handleScan = (data: any) => {
        if (data) {
            try {
                const parsed = JSON.parse(data.text); // On parse le contenu du QR code
                if (parsed.id) {
                    setResult(parsed.id); // On extrait l'ID
                } else {
                    setResult("ID non trouvé dans le QR code.");
                }
            } catch (e) {
                setResult("Format de QR code invalide.");
            }
        }
    };

    // Fonction de gestion de l'événement d'erreur pendant le scan
    const handleError = (err: any) => {
        console.error(err); // Gestion des erreurs
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2 style={{ marginBottom: "20px", fontSize: "24px" }}>Page réservée pour archer, veuillez scanner le QR code</h2>

            {/* Le scanner QR avec la caméra */}
            <QrReader
                delay={300}
                style={{ width: "100%", maxWidth: "500px", height: "auto" }}
                onError={handleError}
                onScan={handleScan}
                constraints={{ video: { facingMode: "environment" } }}  // Use constraints to prefer back camera
            />

            {/* Affichage de l'ID extrait */}
            {result && (
                <div style={{ marginTop: "20px" }}>
                    <h3>ID de la cible :</h3>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

export default Archer;



