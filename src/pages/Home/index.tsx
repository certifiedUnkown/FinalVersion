import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div
            style={{
                textAlign: 'center',
                padding: '50px 0',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: "linear-gradient(135deg, #aee2ff, #d0f4ff)",// Dégradé moderne
                fontFamily: 'Segoe UI, sans-serif',
            }}
        >
            <img
                src="/img/icons/LogoUfolep.png"
                alt="logo_ufolep"
                style={{
                    maxWidth: '280px', // Ajusté pour que le logo ne soit pas trop petit
                    marginBottom: '80px',
                    borderRadius: '8px',
                }}
            />

            <h1 style={{ marginBottom: '20px' }}>Bienvenue à notre application UFOLEP</h1> {/* Ajout d'un espacement sous le titre */}
            <p style={{ marginTop: '20px' }}>Précision, maîtrise, victoire – Atteignez votre cible avec nous !🎯</p> {/* Ajout d'un espacement au-dessus du slogan */}

            <Link to="/login">
                <button
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    Se connecter
                </button>
            </Link>
        </div>
    );
};

export default Home;



