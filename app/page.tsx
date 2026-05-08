export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.90)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1974&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        fontFamily: "Arial",
      }}
    >
      <header
        style={{
          padding: "25px",
          backgroundColor: "rgba(0,0,0,0.85)",
          borderBottom: "1px solid #00ff88",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a href="/" style={menuStyle}>Home</a>
          <a href="/empresa" style={menuStyle}>Empresa</a>
          <a href="/servicos" style={menuStyle}>Serviços</a>
          <a href="/planos" style={menuStyle}>Planos</a>
          <a href="/contato" style={menuStyle}>Contato</a>
        </nav>
      </header>

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "75px",
              color: "#00ff88",
              fontFamily: "Rye, cursive",
            }}
          >
            SUPPORT ENERGIA
            <br />
            AUTOMAÇÃO E REFRIGERAÇÃO
          </h1>

          <h2
            style={{
              marginTop: "30px",
              fontSize: "32px",
            }}
          >
            Grupos Geradores • Energia Solar • BESS • Refrigeração
          </h2>

          <p
            style={{
              maxWidth: "900px",
              margin: "40px auto",
              fontSize: "22px",
              lineHeight: "38px",
            }}
          >
            Soluções completas em geração de energia,
            sistemas híbridos, armazenamento de energia,
            automação industrial e refrigeração.
          </p>
        </div>
      </section>
    </main>
  );
}

const menuStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
};