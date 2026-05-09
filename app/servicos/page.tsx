export default function Servicos() {
  return (
    <main
      style={{
        backgroundColor: "#050505",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* BANNER */}
      <section
        style={{
          height: "500px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "90px",
              color: "#ffb400",
              fontFamily: "Rye",
              textShadow: "0 0 30px #ff9900",
            }}
          >
            SERVIÇOS
          </h1>

          <p
            style={{
              fontSize: "30px",
              color: "#00e1ff",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            Energia • Automação • Refrigeração
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "100px 60px",
        }}
      >
        {/* GRUPOS GERADORES */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>
            Serviços em Grupos Geradores
          </h2>

          <img
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1400"
            style={imageStyle}
          />

          <h3 style={subTitle}>Instalação</h3>

          <ul style={listStyle}>
            <li>Instalação de grupos geradores diesel e gás.</li>
            <li>Montagem de bases e estruturas metálicas.</li>
            <li>Instalação de tanques de combustível.</li>
            <li>Interligação elétrica de potência e comando.</li>
            <li>Instalação de QTA/ATS.</li>
            <li>Parametrização de controladores.</li>
            <li>Start-up e comissionamento.</li>
            <li>Testes operacionais com carga.</li>
          </ul>

          <h3 style={subTitle}>Manutenção Preventiva</h3>

          <ul style={listStyle}>
            <li>Troca de óleo e filtros.</li>
            <li>Inspeção elétrica completa.</li>
            <li>Teste de baterias.</li>
            <li>Limpeza de radiadores.</li>
            <li>Ajustes de tensão e frequência.</li>
            <li>Testes automáticos.</li>
            <li>Relatórios técnicos.</li>
          </ul>

          <h3 style={subTitle}>Manutenção Corretiva</h3>

          <ul style={listStyle}>
            <li>Diagnóstico de falhas.</li>
            <li>Reparo de motores diesel.</li>
            <li>Reparo de alternadores.</li>
            <li>Correção de falhas em ATS.</li>
            <li>Atendimento emergencial 24h.</li>
          </ul>

          <h3 style={subTitle}>Operação</h3>

          <ul style={listStyle}>
            <li>Operação assistida.</li>
            <li>Monitoramento elétrico.</li>
            <li>Controle de combustível.</li>
            <li>Operação em paralelo.</li>
            <li>Treinamento de operadores.</li>
          </ul>
        </div>

        {/* REFRIGERAÇÃO */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>
            Serviços em Refrigeração
          </h2>

          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1400"
            style={imageStyle}
          />

          <h3 style={subTitle}>Instalação</h3>

          <ul style={listStyle}>
            <li>Instalação de ar-condicionado.</li>
            <li>Sistemas Split, VRF e Chiller.</li>
            <li>Câmaras frigoríficas.</li>
            <li>Painéis frigoríficos.</li>
            <li>Instalação elétrica.</li>
            <li>Carga de gás refrigerante.</li>
          </ul>

          <h3 style={subTitle}>Manutenção Preventiva</h3>

          <ul style={listStyle}>
            <li>Limpeza de evaporadoras.</li>
            <li>Higienização de sistemas.</li>
            <li>Verificação de pressão.</li>
            <li>Inspeção elétrica.</li>
            <li>Manutenção de compressores.</li>
          </ul>

          <h3 style={subTitle}>Manutenção Corretiva</h3>

          <ul style={listStyle}>
            <li>Reparo de compressores.</li>
            <li>Correção de vazamentos.</li>
            <li>Troca de motores.</li>
            <li>Reparo de placas eletrônicas.</li>
            <li>Atendimento emergencial.</li>
          </ul>
        </div>

        {/* AUTOMAÇÃO */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>
            Serviços em Automação
          </h2>

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400"
            style={imageStyle}
          />

          <h3 style={subTitle}>Automação Industrial</h3>

          <ul style={listStyle}>
            <li>Projetos de automação.</li>
            <li>Instalação de painéis elétricos.</li>
            <li>Programação de CLP.</li>
            <li>Programação de IHMs.</li>
            <li>Sistemas supervisórios SCADA.</li>
            <li>Automação de grupos geradores.</li>
          </ul>

          <h3 style={subTitle}>Sistemas Elétricos</h3>

          <ul style={listStyle}>
            <li>Montagem de quadros elétricos.</li>
            <li>Instalação de inversores.</li>
            <li>Soft starters.</li>
            <li>Proteção elétrica.</li>
            <li>Telemetria.</li>
            <li>Monitoramento remoto.</li>
          </ul>

          <h3 style={subTitle}>Manutenção</h3>

          <ul style={listStyle}>
            <li>Diagnóstico de falhas.</li>
            <li>Atualização de software.</li>
            <li>Correção em CLPs.</li>
            <li>Backup de programas.</li>
            <li>Calibração de sensores.</li>
          </ul>
        </div>

        {/* DIFERENCIAIS */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>
            Diferenciais da SUPPORT
          </h2>

          <ul style={listStyle}>
            <li>Equipe técnica especializada.</li>
            <li>Atendimento emergencial 24 horas.</li>
            <li>Serviços com qualidade e segurança.</li>
            <li>Tecnologia avançada.</li>
            <li>Atendimento industrial, comercial e residencial.</li>
            <li>Contratos de manutenção preventiva.</li>
            <li>Laudos e relatórios técnicos.</li>
            <li>Soluções personalizadas.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

const cardStyle = {
  backgroundColor: "#0d0d0d",
  padding: "50px",
  borderRadius: "25px",
  marginBottom: "60px",
  border: "2px solid #00e1ff",
};

const titleStyle = {
  fontSize: "55px",
  color: "#ffb400",
  marginBottom: "30px",
  fontFamily: "Rye",
};

const subTitle = {
  fontSize: "35px",
  color: "#00e1ff",
  marginTop: "40px",
  marginBottom: "20px",
};

const listStyle = {
  fontSize: "24px",
  lineHeight: "45px",
  color: "#d8d8d8",
};

const imageStyle = {
  width: "100%",
  height: "450px",
  objectFit: "cover" as const,
  borderRadius: "20px",
  marginBottom: "40px",
  border: "3px solid #ffb400",
};