import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#050b14",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* MENU */}
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(10px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          zIndex: 999,
          borderBottom: "1px solid #00aaff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Image
            src="/logo.png"
            alt="Support"
            width={70}
            height={70}
          />

          <h1
            style={{
              fontSize: "32px",
              color: "#ffaa00",
              fontWeight: "bold",
            }}
          >
            SUPPORT
          </h1>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "25px",
            fontSize: "18px",
          }}
        >
          <a href="/" style={menuStyle}>Home</a>
          <a href="/empresa" style={menuStyle}>Empresa</a>
          <a href="/servicos" style={menuStyle}>Serviços</a>
          <a href="/planos" style={menuStyle}>Planos</a>
          <a href="/orcamentos" style={menuStyle}>Orçamento</a>
          <a href="/cliente" style={menuStyle}>Área do Cliente</a>
          <a href="/contato" style={menuStyle}>Contato</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1974')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <div>
          <Image
            src="/logo.png"
            alt="Support"
            width={320}
            height={320}
          />

          <h1
            style={{
              fontSize: "90px",
              color: "#ffaa00",
              marginTop: "20px",
              marginBottom: "10px",
              textShadow: "0 0 20px #ffaa00",
            }}
          >
            SUPPORT
          </h1>

          <h2
            style={{
              fontSize: "38px",
              color: "#00aaff",
              marginBottom: "30px",
            }}
          >
            Energia • Automação • Refrigeração
          </h2>

          <p
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              fontSize: "24px",
              lineHeight: "42px",
              color: "#ddd",
            }}
          >
            Especialistas em grupos geradores, sistemas híbridos,
            energia solar, BESS, automação industrial e refrigeração
            industrial na região Norte.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/5592984794889?text=Gostaria%20de%20conhecer%20as%20soluções%20Support."
              target="_blank"
              style={buttonPrimary}
            >
              WhatsApp
            </a>

            <a
              href="/orcamentos"
              style={buttonSecondary}
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        style={{
          padding: "100px 50px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "60px",
            color: "#ffaa00",
            marginBottom: "70px",
          }}
        >
          Nossos Serviços
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          <div style={cardStyle}>
            ⚡ Manutenção em Grupos Geradores
          </div>

          <div style={cardStyle}>
            ☀️ Sistemas Fotovoltaicos
          </div>

          <div style={cardStyle}>
            🔋 Sistemas BESS
          </div>

          <div style={cardStyle}>
            ❄️ Refrigeração Industrial
          </div>

          <div style={cardStyle}>
            🏭 Automação Industrial
          </div>

          <div style={cardStyle}>
            📋 Contratos de Manutenção
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer
        style={{
          backgroundColor: "#02060c",
          padding: "70px 40px",
          textAlign: "center",
          borderTop: "1px solid #00aaff",
        }}
      >
        <Image
          src="/logo.png"
          alt="Support"
          width={140}
          height={140}
        />

        <h2
          style={{
            color: "#ffaa00",
            marginTop: "20px",
            fontSize: "42px",
          }}
        >
          SUPPORT
        </h2>

        <p
          style={{
            color: "#aaa",
            marginTop: "20px",
            fontSize: "20px",
          }}
        >
          Manaus - Amazonas
        </p>

        <p style={{ color: "#aaa" }}>
          WhatsApp: (92) 98479-4889
        </p>

        <p style={{ color: "#aaa" }}>
          suportenergiarefrigeracao@gmail.com
        </p>
      </footer>
    </main>
  );
}

const menuStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
};

const buttonPrimary = {
  backgroundColor: "#ffaa00",
  color: "#000",
  padding: "20px 35px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "20px",
};

const buttonSecondary = {
  border: "2px solid #00aaff",
  color: "#00aaff",
  padding: "20px 35px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "20px",
};

const cardStyle = {
  backgroundColor: "#0b1625",
  padding: "40px",
  borderRadius: "20px",
  border: "1px solid #00aaff",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
};