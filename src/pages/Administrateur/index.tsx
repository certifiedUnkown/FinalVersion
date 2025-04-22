import React from "react";
import { useHistory } from "react-router-dom";

const ScannerPage: React.FC = () => {
  const history = useHistory();

  const handleQRCodeScanned = (cibleId: number, cibleNumero: number) => {
    history.push("/choix-marqueur", { cibleId, cibleNumero });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Scanner une cible</h1>
      <button
        onClick={() => handleQRCodeScanned(1, 42)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Simuler scan QR Code
      </button>
    </div>
  );
};

export default ScannerPage;
