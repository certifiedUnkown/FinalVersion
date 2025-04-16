import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [licenseNumber, setLicenseNumber] = useState<string>("");
    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (licenseNumber.trim().length === 0) {
            alert("Veuillez entrer votre numéro de licence.");
            return;
        }

        try {
            const response = await fetch(`https://192.168.137.1:8443/clubsUtilisateurs/licence/${licenseNumber}`);
            if (!response.ok) throw new Error("Utilisateur non trouvé");

            const user = await response.json();
            localStorage.setItem("user", JSON.stringify(user));

            switch (user.role) {
                case "Archer":
                    history.push("/archer");
                    break;
                case "Administrateur":
                    history.push("/administrateur");
                    break;
                default:
                    alert("Rôle non reconnu. Contactez un administrateur.");
                    break;
            }
        } catch (error) {
            alert("Aucun utilisateur trouvé avec ce numéro de licence.");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setLicenseNumber(value);
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #aee2ff, #d0f4ff)",// Dégradé de bleu
                padding: "20px"
            }}
        >
            <img
                src="/img/icons/LogoUfolep.png"  // Assure-toi que l'image a un fond transparent
                alt="logo_ufolep"
                style={{
                    width: "270px",  // Ajustement de la taille du logo
                    marginBottom: "90px",
                    borderRadius: "8px",  // Ajout d'un léger arrondi au logo pour un look moderne
                }}
            />

            <form
                onSubmit={handleSubmit}
                style={{
                    background: "rgba(255, 255, 255, 0.9)", // Fond semi-transparent
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
                    width: "100%",
                    maxWidth: "400px",
                    textAlign: "center"
                }}
            >
                <label
                    htmlFor="license"
                    style={{
                        display: "block",
                        fontSize: "18px",
                        marginBottom: "15px",
                        fontWeight: "500",
                        color: "#333"
                    }}
                >
                    Numéro de licence
                </label>

                <input
                    type="text"
                    id="license"
                    value={licenseNumber}
                    onChange={handleInputChange}
                    placeholder="Entrez votre numéro"
                    maxLength={10}
                    required
                    style={{
                        width: "100%",
                        padding: "12px",
                        fontSize: "16px",
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        outline: "none",
                        marginBottom: "25px",
                        boxSizing: "border-box"
                    }}
                />

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "12px",
                        backgroundColor: "#007bff",
                        color: "white",
                        fontSize: "16px",
                        borderRadius: "10px",
                        border: "none",
                        cursor: "pointer",
                        transition: "background-color 0.3s"
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
                >
                    Poursuivre
                </button>
            </form>
        </div>
    );
};

export default Login;
