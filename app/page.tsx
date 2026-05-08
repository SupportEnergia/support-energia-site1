export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#050816",
        color: "#fff",
        fontFamily: "Arial",
      }}
    >
      {/* MENU */}
      <header
        style={{
          backgroundColor: "#000",
          padding: "20px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid #00f7ff",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <img
            src="/logo.png"
            alt="Support"
            style={{
              width: "90px",
              height: "90px",
              objectFit: "contain",
            }}
          />

          <h1
            style={{
              color: "#ffb300",
              fontSize: "42px",
              fontWeight: "bold",
              fontFamily: "Rye",
            }}
          >
            SUPPORT
          </h1>
        </div>

        <nav
          style={{
            display: "flex",
            gap: "35px",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          <a href="/" style={linkStyle}>
            Home
          </a>

          <a href="/empresa" style={linkStyle}>
            Empresa
          </a>

          <a href="/servicos" style={linkStyle}>
            Serviços
          </a>

          <a href="/planos" style={linkStyle}>
            Planos
          </a>

          <a href="/orcamentos" style={linkStyle}>
            Orçamento
          </a>

          <a href="/cliente" style={linkStyle}>
            Área do Cliente
          </a>

          <a href="/contato" style={linkStyle}>
            Contato
          </a>

          <a href="/trabalhe-conosco" style={linkStyle}>
            Trabalhe Conosco
          </a>
        </nav>
      </header>

      {/* HOME */}
      <section
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 40px",
        }}
      >
        <div>
          <img
            src="/logo.png"
            alt="Support"
            style={{
              width: "320px",
              margin: "0 auto",
              display: "block",
            }}
          />

          <h1
            style={{
              fontSize: "110px",
              color: "#ffb300",
              fontWeight: "bold",
              marginTop: "20px",
              textShadow: "0 0 30px #ffb300",
              fontFamily: "Rye",
            }}
          >
            SUPPORT
          </h1>

          <h2
            style={{
              fontSize: "55px",
              color: "#00f7ff",
              marginTop: "20px",
            }}
          >
            Energia • Automação • Refrigeração
          </h2>

          <p
            style={{
              maxWidth: "1100px",
              margin: "40px auto",
              fontSize: "30px",
              lineHeight: "50px",
              color: "#ddd",
            }}
          >
            Especialistas em grupos geradores, sistemas híbridos, energia
            solar, BESS, automação industrial e refrigeração industrial na
            região Norte.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              marginTop: "50px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/5592984794889?text=Gostaria%20de%20conhecer%20as%20soluções%20Support."
              style={buttonPrimary}
            >
              WhatsApp
            </a>

            <a href="/orcamentos" style={buttonSecondary}>
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        style={{
          padding: "120px 60px",
          backgroundColor: "#08131f",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "70px",
            color: "#00f7ff",
            marginBottom: "50px",
            fontFamily: "Rye",
          }}
        >
          Sobre a Empresa
        </h2>

        <p
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            fontSize: "28px",
            lineHeight: "50px",
            color: "#ccc",
          }}
        >
          A SUPPORT Energia Automação e Refrigeração foi fundada em 2024 devido
          à crescente demanda do mercado por empresas altamente qualificadas em
          manutenção de grupos geradores, sistemas híbridos, energia solar,
          automação industrial e refrigeração.
          <br />
          <br />
          Seus fundadores possuem mais de 13 anos de experiência atuando nos
          sistemas isolados da região Norte do país, com ampla experiência em
          motores Scania, Caterpillar, Perkins e Volvo.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section
        style={{
          padding: "120px 60px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1497436072909-f5e4be8c8e1f?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "70px",
            color: "#00f7ff",
            marginBottom: "60px",
            fontFamily: "Rye",
          }}
        >
          Serviços Prestados
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            "Manutenção em grupos geradores",
            "Instalação de sistemas solares",
            "Sistemas híbridos com BESS",
            "Automação industrial",
            "Refrigeração industrial",
            "Monitoramento remoto",
          ].map((item) => (
            <div key={item} style={cardStyle}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* RODAPÉ */}
      <footer
        style={{
          backgroundColor: "#000",
          padding: "60px",
          textAlign: "center",
          borderTop: "2px solid #00f7ff",
        }}
      >
        <img
          src="/logo.png"
          alt="Support"
          style={{
            width: "150px",
            marginBottom: "20px",
          }}
        />

        <h2
          style={{
            color: "#ffb300",
            fontSize: "45px",
            fontFamily: "Rye",
          }}
        >
          SUPPORT
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#ccc",
            fontSize: "22px",
            lineHeight: "40px",
          }}
        >
          SUPPORT Energia Automação e Refrigeração
          <br />
          Manaus - Amazonas
          <br />
          WhatsApp: (92) 98479-4889
          <br />
          suportenergiarefrigeracao@gmail.com
        </p>
      </footer>
    </main>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};

const buttonPrimary = {
  backgroundColor: "#ffb300",
  color: "#000",
  padding: "22px 45px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "22px",
};

const buttonSecondary = {
  backgroundColor: "transparent",
  color: "#00f7ff",
  padding: "22px 45px",
  borderRadius: "12px",
  textDecoration: "none",
  border: "2px solid #00f7ff",
  fontWeight: "bold",
  fontSize: "22px",
};

const cardStyle = {
  backgroundColor: "rgba(0,0,0,0.7)",
  padding: "40px",
  borderRadius: "20px",
  border: "1px solid #00f7ff",
  fontSize: "24px",
  textAlign: "center" as const,
};