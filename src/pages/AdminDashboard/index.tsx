import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

interface Archer {
  id: number;
  nom: string;
}

const AdminDashboard: React.FC = () => {
  const location = useLocation<{ cibleId: number; cibleNumero: number; marqueur: string }>();
  const { cibleId, cibleNumero, marqueur } = location.state || {};

  const [archers, setArchers] = useState<Archer[]>([]);

  useEffect(() => {
    axios.get(`https:192.168.137.1:8443/api/archers?cibleId=${cibleId}`).then((response) => {
      setArchers(response.data);
    });
  }, [cibleId]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Cible {cibleNumero}</h1>
      <p className="mb-4">Marqueur : {marqueur}</p>
      <ul>
        {archers.map((archer) => (
          <li key={archer.id}>{archer.nom}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
