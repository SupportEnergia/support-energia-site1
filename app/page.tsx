export default function Home() {
  return (
    <main
      style={{
        padding: "40px",
        fontFamily: "Arial",
        backgroundColor: "#0b0f19",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "10px",
          color: "#00ff88",
        }}
      >
        SUPPORT ENERGIA
      </h1>

      <h2
        style={{
          marginBottom: "30px",
          color: "#cccccc",
        }}
      >
        Energia • Automação • Refrigeração
      </h2>

      <p
        style={{
          maxWidth: "700px",
          lineHeight: "30px",
          fontSize: "20px",
        }}
      >
        Especialistas em manutenção de grupos geradores,
        automação industrial, refrigeração industrial e
        soluções em energia para sistemas isolados.
      </p>

      <p
        style={{
          marginTop: "20px",
          fontSize: "18px",
        }}
      >
        Atendimento em Manaus, interior do Amazonas e região Norte.
      </p>

      <div style={{ marginTop: "40px" }}>
        <a
          href="https://wa.me/55929984794889"
          target="_blank"
          style={{
            backgroundColor: "#00ff88",
            color: "#000",
            padding: "15px 25px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Falar no WhatsApp
        </a>
      </div>
    </main>
  )
}