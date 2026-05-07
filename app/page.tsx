export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.80), rgba(0,0,0,0.90)), url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1974&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        color: "#ffffff",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          paddingTop: "80px",
          paddingBottom: "100px",
        }}
      >
        <h1
          style={{
            fontSize: "72px",
            color: "#00ff88",
            marginBottom: "20px",
          }}
        >
          SUPPORT ENERGIA
        </h1>

        <h2
          style={{
            fontSize: "36px",
            marginBottom: "30px",
            color: "#cccccc",
          }}
        >
          Energia • Automação • Refrigeração
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "22px",
            lineHeight: "40px",
          }}
        >
          Especialistas em manutenção de grupos geradores,
          automação industrial, refrigeração industrial e
          soluções em energia para sistemas isolados da
          região Amazônica.
        </p>

        <div
          style={{
            marginTop: "50px",
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://wa.me/5592984794889"
            target="_blank"
            style={buttonPrimary}
          >
            Falar no WhatsApp
          </a>

          <a
            href="#orcamento"
            style={buttonSecondary}
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          marginBottom: "120px",
        }}
      >
        <h2
          style={titleStyle}
        >
          Sobre a Empresa
        </h2>

        <div style={cardStyle}>
          <p style={textStyle}>
            A Support Energia nasceu com o objetivo de fornecer
            soluções completas em geração de energia, automação
            industrial e refrigeração industrial para empresas,
            indústrias e sistemas isolados da região Norte.
          </p>

          <p style={textStyle}>
            Atuamos com manutenção preventiva, corretiva,
            instalação, comissionamento e suporte técnico
            especializado em grupos geradores diesel,
            painéis elétricos, sistemas ATS, automação e
            refrigeração industrial.
          </p>

          <p style={textStyle}>
            Nossa equipe possui ampla experiência em operações
            nos sistemas isolados do Amazonas, atendendo
            clientes em Manaus, interior do Amazonas e região Norte.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          marginBottom: "120px",
        }}
      >
        <h2 style={titleStyle}>
          Serviços Prestados
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          <div style={serviceCard}>
            <h3 style={serviceTitle}>Grupos Geradores</h3>

            <ul style={listStyle}>
              <li>Manutenção preventiva</li>
              <li>Manutenção corretiva</li>
              <li>Instalação de geradores</li>
              <li>Troca de componentes</li>
              <li>ATS e sincronismo</li>
              <li>Diagnóstico eletrônico</li>
            </ul>
          </div>

          <div style={serviceCard}>
            <h3 style={serviceTitle}>Automação Industrial</h3>

            <ul style={listStyle}>
              <li>CLP</li>
              <li>IHMs</li>
              <li>Painéis elétricos</li>
              <li>Programação</li>
              <li>Supervisórios</li>
              <li>Controle automático</li>
            </ul>
          </div>

          <div style={serviceCard}>
            <h3 style={serviceTitle}>Refrigeração</h3>

            <ul style={listStyle}>
              <li>Refrigeração industrial</li>
              <li>Câmaras frias</li>
              <li>Chillers</li>
              <li>Ar condicionado industrial</li>
              <li>Manutenção técnica</li>
              <li>Diagnóstico de falhas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ÁREA DO CLIENTE */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          marginBottom: "120px",
        }}
      >
        <h2 style={titleStyle}>
          Área do Cliente
        </h2>

        <div style={cardStyle}>
          <p style={textStyle}>
            Em breve nossa área do cliente contará com:
          </p>

          <ul style={listStyle}>
            <li>Acompanhamento de manutenção</li>
            <li>Histórico de chamados</li>
            <li>Relatórios técnicos</li>
            <li>Solicitação de atendimento</li>
            <li>Controle de contratos</li>
          </ul>
        </div>
      </section>

      {/* ORÇAMENTO */}
      <section
        id="orcamento"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          marginBottom: "120px",
        }}
      >
        <h2 style={titleStyle}>
          Solicite um Orçamento
        </h2>

        <div style={cardStyle}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input
              type="text"
              placeholder="Nome"
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Telefone"
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="E-mail"
              style={inputStyle}
            />

            <textarea
              placeholder="Descreva o serviço desejado"
              rows={6}
              style={inputStyle}
            />

            <a
              href="https://wa.me/5592984794889"
              target="_blank"
              style={{
                ...buttonPrimary,
                textAlign: "center",
              }}
            >
              Enviar Solicitação
            </a>
          </form>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer
        style={{
          textAlign: "center",
          paddingBottom: "40px",
          color: "#888",
        }}
      >
        <p>
          SUPPORT ENERGIA AUTOMAÇÃO & REFRIGERAÇÃO
        </p>

        <p>
          Manaus - Amazonas
        </p>

        <p>
          WhatsApp: (92) 98479-4889
        </p>
      </footer>
    </main>
  );
}

const titleStyle = {
  fontSize: "48px",
  color: "#00ff88",
  marginBottom: "40px",
  textAlign: "center" as const,
};

const cardStyle = {
  backgroundColor: "rgba(17,17,39,0.90)",
  padding: "40px",
  borderRadius: "20px",
  border: "1px solid #00ff88",
};

const textStyle = {
  fontSize: "20px",
  lineHeight: "36px",
  color: "#cccccc",
  marginBottom: "20px",
};

const serviceCard = {
  backgroundColor: "rgba(17,17,39,0.90)",
  padding: "30px",
  borderRadius: "20px",
  border: "1px solid #00ff88",
};

const serviceTitle = {
  color: "#00ff88",
  fontSize: "28px",
  marginBottom: "20px",
};

const listStyle = {
  color: "#cccccc",
  lineHeight: "36px",
  fontSize: "18px",
};

const buttonPrimary = {
  backgroundColor: "#00ff88",
  color: "#000",
  padding: "18px 35px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "18px",
};

const buttonSecondary = {
  backgroundColor: "transparent",
  color: "#00ff88",
  padding: "18px 35px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  border: "1px solid #00ff88",
  fontSize: "18px",
};

const inputStyle = {
  backgroundColor: "#0b0f14",
  border: "1px solid #333",
  borderRadius: "12px",
  padding: "18px",
  color: "#fff",
  fontSize: "16px",
  outline: "none",
};