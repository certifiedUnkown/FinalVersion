import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [licenseNumber, setLicenseNumber] = useState<string>("");
    const history = useHistory();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");

        if (licenseNumber.trim().length === 0) {
            alert("Veuillez entrer votre numéro de licence.");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8086/clubsUtilisateurs/licence/${licenseNumber}`);

            console.log("Response:", response);

            if (!response.ok) {
                const errorMessage = await response.text();
                console.log("Error message:", errorMessage);
                throw new Error("Utilisateur non trouvé");
            }

            const user = await response.json();
            console.log("Utilisateur:", user);

            localStorage.setItem("user", JSON.stringify(user));

            switch (user.role) {
                case "Archer":
                    history.push("/archer");
                    break;
                case "Marqueur":
                    history.push("/administrateur");
                    break;
                default:
                    alert("Rôle non reconnu. Contactez un administrateur.");
                    break;
            }
        } catch (error) {
            console.error("Erreur:", error);
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
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2
                style={{
                    fontSize: "26px",
                    marginBottom: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#e0f7fa",
                    padding: "15px 30px",
                    display: "inline-block",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                Veuillez mentionner votre numéro de licence
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={licenseNumber}
                    onChange={handleInputChange}
                    placeholder="Numéro de licence"
                    required
                    maxLength={10}
                    style={{
                        padding: "12px",
                        fontSize: "18px",
                        width: "240px",
                        textAlign: "center",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        outline: "none",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                />
                <br />
                <button
                    type="submit"
                    style={{
                        marginTop: "15px",
                        padding: "12px 30px",
                        fontSize: "18px",
                        cursor: "pointer",
                        border: "none",
                        backgroundColor: "#007bff",
                        color: "white",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    Entrer
                </button>
            </form>
        </div>
    );
};

export default Login;
