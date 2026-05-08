export default function Contato() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#08131f",
        padding: "80px",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: "60px", color: "#00ff88" }}>
        Fale Conosco
      </h1>

      <p style={{ fontSize: "24px", marginTop: "30px" }}>
        WhatsApp: (92) 98479-4889
      </p>

      <p style={{ fontSize: "24px", marginTop: "20px" }}>
        Email: suportenergiarefrigeracao@gmail.com
      </p>

      <a
        href="https://wa.me/5592984794889?text=Gostaria%20de%20conhecer%20as%20solucoes%20Support"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "40px",
          backgroundColor: "#00ff88",
          color: "#000",
          padding: "20px 35px",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Falar no WhatsApp
      </a>
    </main>
  );
}