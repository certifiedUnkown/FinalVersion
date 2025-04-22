import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

interface Marqueur {
  id: number;
  nom: string;
}

const ChoixMarqueur: React.FC = () => {
  const history = useHistory();
  const location = useLocation<{ cibleId: number; cibleNumero: number }>();
  const { cibleId, cibleNumero } = location.state || {};

  const [marqueurs, setMarqueurs] = useState<Marqueur[]>([]);

  useEffect(() => {
    axios.get("https://192.168.137.1:8443/api/marqueurs").then((response) => {
      setMarqueurs(response.data);
    });
  }, []);

  const handleSelectMarqueur = (marqueur: string) => {
    history.push("/admin-dashboard", {
      cibleId,
      cibleNumero,
      marqueur,
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Choisir un marqueur pour la cible {cibleNumero}</h1>
      <ul>
        {marqueurs.map((m) => (
          <li key={m.id}>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mb-2"
              onClick={() => handleSelectMarqueur(m.nom)}
            >
              {m.nom}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChoixMarqueur;
