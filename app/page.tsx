export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#050816",
        color: "#fff",
        fontFamily: "Arial",
      }}
    >
      {/* MENU */}
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.90)",
          padding: "20px",
          zIndex: 1000,
          borderBottom: "1px solid #00ff88",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <a href="#home" style={menuStyle}>Home</a>
          <a href="#empresa" style={menuStyle}>Empresa</a>
          <a href="#planos" style={menuStyle}>Planos</a>
          <a href="#servicos" style={menuStyle}>Serviços</a>
          <a href="#cliente" style={menuStyle}>Área do Cliente</a>
          <a href="#orcamento" style={menuStyle}>Orçamento</a>
          <a href="#reclamacao" style={menuStyle}>Reclamações</a>
          <a href="#trabalhe" style={menuStyle}>Trabalhe Conosco</a>
          <a href="#contato" style={menuStyle}>Contato</a>
        </nav>
      </header>

      {/* HOME */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.80), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1974&auto=format&fit=crop')",
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
          <h1
            style={{
              fontSize: "80px",
              color: "#00ff88",
              marginBottom: "20px",
              fontFamily: "Rye, cursive",
            }}
          >
            SUPPORT ENERGIA
            <br />
            AUTOMAÇÃO E REFRIGERAÇÃO
          </h1>

          <h2
            style={{
              fontSize: "35px",
              color: "#ffffff",
              marginBottom: "30px",
            }}
          >
            Soluções em Energia, Automação,
            Refrigeração e Sistemas Híbridos
          </h2>

          <p
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              fontSize: "24px",
              lineHeight: "40px",
            }}
          >
            Especialistas em grupos geradores,
            sistemas híbridos com energia solar,
            armazenamento em baterias e automação
            industrial para sistemas isolados da região Norte.
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
              href="https://wa.me/5592984794889?text=Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20Support."
              target="_blank"
              style={buttonPrimary}
            >
              Falar no WhatsApp
            </a>

            <a
              href="mailto:suportenergiarefrigeracao@gmail.com"
              style={buttonSecondary}
            >
              Enviar E-mail
            </a>
          </div>
        </div>
      </section>

      {/* EMPRESA */}
      <section id="empresa" style={sectionStyle}>
        <h2 style={titleStyle}>Sobre a Empresa</h2>

        <div style={cardStyle}>
          <p style={textStyle}>
            A Support Energia Automação e Refrigeração foi fundada
            no ano de 2024 com base na crescente busca do mercado
            por empresas qualificadas em geração de energia,
            automação industrial e refrigeração.
          </p>

          <p style={textStyle}>
            Seus fundadores possuem mais de 13 anos de experiência
            atuando nos sistemas isolados da região Norte do país,
            trabalhando com motores Scania, Caterpillar, Perkins
            e Volvo, além de sistemas híbridos de armazenamento
            de energia.
          </p>

          <p style={textStyle}>
            A empresa atua em manutenção preventiva e corretiva,
            instalação, comissionamento e suporte técnico
            especializado para indústrias, usinas e sistemas isolados.
          </p>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" style={sectionStyle}>
        <h2 style={titleStyle}>Planos de Manutenção</h2>

        <div style={gridStyle}>
          <div style={serviceCard}>
            <h3 style={serviceTitle}>Grupos Geradores</h3>
            <ul style={listStyle}>
              <li>Plano preventivo</li>
              <li>Plano corretivo</li>
              <li>Atendimento emergencial</li>
              <li>Monitoramento operacional</li>
            </ul>
          </div>

          <div style={serviceCard}>
            <h3 style={serviceTitle}>Energia Solar</h3>
            <ul style={listStyle}>
              <li>Limpeza de placas</li>
              <li>Inspeção elétrica</li>
              <li>Análise de geração</li>
              <li>Troca de componentes</li>
            </ul>
          </div>

          <div style={serviceCard}>
            <h3 style={serviceTitle}>Armazenamento</h3>
            <ul style={listStyle}>
              <li>Baterias industriais</li>
              <li>Sistemas híbridos</li>
              <li>Controle de energia</li>
              <li>Automação inteligente</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" style={sectionStyle}>
        <h2 style={titleStyle}>Serviços Prestados</h2>

        <div style={cardStyle}>
          <ul style={listStyle}>
            <li>Manutenção em grupos geradores</li>
            <li>Automação industrial</li>
            <li>Instalação de painéis solares</li>
            <li>Sistemas híbridos</li>
            <li>Refrigeração residencial</li>
            <li>Refrigeração industrial</li>
            <li>Comissionamento</li>
            <li>Instalação elétrica</li>
            <li>Suporte técnico especializado</li>
          </ul>
        </div>
      </section>

      {/* ÁREA CLIENTE */}
      <section id="cliente" style={sectionStyle}>
        <h2 style={titleStyle}>Área do Cliente</h2>

        <div style={cardStyle}>
          <ul style={listStyle}>
            <li>Acompanhamento de manutenção</li>
            <li>Histórico de chamados</li>
            <li>Relatórios técnicos</li>
            <li>Solicitação de atendimento</li>
            <li>Controle de contratos</li>
            <li>Abertura de atendimento</li>
          </ul>
        </div>
      </section>

      {/* ORÇAMENTO */}
      <section id="orcamento" style={sectionStyle}>
        <h2 style={titleStyle}>Solicite seu Orçamento</h2>

        <div style={cardStyle}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input type="text" placeholder="Nome" style={inputStyle} />
            <input type="text" placeholder="Telefone" style={inputStyle} />
            <textarea
              rows={5}
              placeholder="Descreva o serviço"
              style={inputStyle}
            />

            <a
              href="mailto:suportenergiarefrigeracao@gmail.com"
              style={buttonPrimary}
            >
              Enviar Solicitação
            </a>
          </form>
        </div>
      </section>

      {/* RECLAMAÇÕES */}
      <section id="reclamacao" style={sectionStyle}>
        <h2 style={titleStyle}>Área de Reclamações</h2>

        <div style={cardStyle}>
          <textarea
            rows={6}
            placeholder="Digite sua reclamação"
            style={inputStyle}
          />

          <div style={{ marginTop: "20px" }}>
            <a
              href="mailto:suportenergiarefrigeracao@gmail.com"
              style={buttonPrimary}
            >
              Enviar Reclamação
            </a>
          </div>
        </div>
      </section>

      {/* TRABALHE CONOSCO */}
      <section id="trabalhe" style={sectionStyle}>
        <h2 style={titleStyle}>Trabalhe Conosco</h2>

        <div style={cardStyle}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input type="text" placeholder="Nome" style={inputStyle} />
            <input type="text" placeholder="Idade" style={inputStyle} />
            <input type="text" placeholder="Telefone" style={inputStyle} />
            <input
              type="text"
              placeholder="Função desejada"
              style={inputStyle}
            />

            <textarea
              rows={5}
              placeholder="Fale um pouco sobre você"
              style={inputStyle}
            />

            <a
              href="mailto:suportenergiarefrigeracao@gmail.com"
              style={buttonPrimary}
            >
              Enviar Currículo
            </a>
          </form>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" style={sectionStyle}>
        <h2 style={titleStyle}>Fale Conosco</h2>

        <div style={cardStyle}>
          <p style={textStyle}>
            WhatsApp: (92) 98479-4889
          </p>

          <p style={textStyle}>
            E-mail:
            suportenergiarefrigeracao@gmail.com
          </p>

          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/5592984794889?text=Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20Support."
              target="_blank"
              style={buttonPrimary}
            >
              WhatsApp
            </a>

            <a
              href="mailto:suportenergiarefrigeracao@gmail.com"
              style={buttonSecondary}
            >
              E-mail
            </a>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer
        style={{
          backgroundColor: "#000",
          padding: "40px",
          textAlign: "center",
          borderTop: "1px solid #00ff88",
        }}
      >
        <h3 style={{ color: "#00ff88" }}>
          SUPPORT ENERGIA AUTOMAÇÃO E REFRIGERAÇÃO
        </h3>

        <p>Manaus - Amazonas</p>

        <p>WhatsApp: (92) 98479-4889</p>

        <p>
          suportenergiarefrigeracao@gmail.com
        </p>
      </footer>
    </main>
  );
}

const sectionStyle = {
  maxWidth: "1300px",
  margin: "0 auto",
  padding: "120px 20px",
};

const titleStyle = {
  color: "#00ff88",
  fontSize: "50px",
  marginBottom: "40px",
  textAlign: "center" as const,
};

const cardStyle = {
  backgroundColor: "#111827",
  padding: "40px",
  borderRadius: "20px",
  border: "1px solid #00ff88",
};

const textStyle = {
  fontSize: "20px",
  lineHeight: "38px",
  color: "#cccccc",
};

const menuStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
};

const buttonPrimary = {
  backgroundColor: "#00ff88",
  color: "#000",
  padding: "18px 35px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "18px",
  display: "inline-block",
};

const buttonSecondary = {
  backgroundColor: "transparent",
  color: "#00ff88",
  padding: "18px 35px",
  borderRadius: "12px",
  border: "1px solid #00ff88",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "18px",
  display: "inline-block",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
};

const serviceCard = {
  backgroundColor: "#111827",
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
  lineHeight: "36px",
  color: "#cccccc",
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
  width: "100%",
};