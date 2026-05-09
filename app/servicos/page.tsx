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
          height: "550px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.80)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "95px",
              color: "#ffb400",
              fontFamily: "Rye",
              textShadow: "0 0 30px #ff9900",
            }}
          >
            SERVIÇOS
          </h1>

          <p
            style={{
              fontSize: "34px",
              color: "#00e1ff",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Grupo Gerador • Refrigeração • Automação
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
          padding: "100px 50px",
        }}
      >
        {/* GRUPOS GERADORES */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>
            Serviços em Grupos Geradores
          </h2>

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800"
            alt="Grupo Gerador Diesel"
            style={imageStyle}
          />

          <p style={textStyle}>
            Especialistas em instalação, manutenção preventiva,
            manutenção corretiva e operação de grupos geradores
            diesel e gás para sistemas industriais, comerciais
            e usinas de geração de energia.
          </p>

          <h3 style={subTitle}>Instalação</h3>

          <ul style={listStyle}>
            <li>Instalação de grupos geradores diesel e gás.</li>
            <li>Montagem de bases e estruturas metálicas.</li>
            <li>Instalação de tanques de combustível.</li>
            <li>Interligação elétrica de potência e comando.</li>
            <li>Instalação de quadros QTA/ATS.</li>
            <li>Instalação de aterramento elétrico.</li>
            <li>Instalação de sistemas de exaustão.</li>
            <li>Parametrização de controladores.</li>
            <li>Start-up e comissionamento.</li>
            <li>Testes operacionais com carga.</li>
          </ul>

          <h3 style={subTitle}>Manutenção Preventiva</h3>

          <ul style={listStyle}>
            <li>Troca de óleo lubrificante e filtros.</li>
            <li>Troca de filtros de combustível e ar.</li>
            <li>Inspeção de correias e mangueiras.</li>
            <li>Verificação do sistema de arrefecimento.</li>
            <li>Teste de baterias e carregadores.</li>
            <li>Inspeção elétrica geral.</li>
            <li>Ajustes de tensão e frequência.</li>
            <li>Testes automáticos.</li>
            <li>Relatórios técnicos.</li>
          </ul>

          <h3 style={subTitle}>Manutenção Corretiva</h3>

          <ul style={listStyle}>
            <li>Diagnóstico de falhas mecânicas e elétricas.</li>
            <li>Reparo de motores diesel.</li>
            <li>Reparo de alternadores.</li>
            <li>Substituição de módulos eletrônicos.</li>
            <li>Correção de falhas em ATS/QTA.</li>
            <li>Recuperação de chicotes elétricos.</li>
            <li>Atendimento emergencial 24 horas.</li>
          </ul>

          <h3 style={subTitle}>Operação</h3>

          <ul style={listStyle}>
            <li>Operação assistida.</li>
            <li>Supervisão técnica.</li>
            <li>Monitoramento de parâmetros elétricos.</li>
            <li>Controle de combustível.</li>
            <li>Operação em paralelo e sincronismo.</li>
            <li>Treinamento de operadores.</li>
          </ul>
        </div>

        {/* REFRIGERAÇÃO */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>
            Serviços em Refrigeração
          </h2>

          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1800"
            alt="Refrigeração Industrial"
            style={imageStyle}
          />

          <p style={textStyle}>
            Soluções completas em climatização residencial,
            comercial e industrial.
          </p>

          <h3 style={subTitle}>Instalação</h3>

          <ul style={listStyle}>
            <li>Instalação de ar-condicionado.</li>
            <li>Sistemas Split, VRF e Chiller.</li>
            <li>Câmaras frigoríficas.</li>
            <li>Painéis frigoríficos.</li>
            <li>Tubulações frigorígenas.</li>
            <li>Carga de gás refrigerante.</li>
          </ul>

          <h3 style={subTitle}>Manutenção Preventiva</h3>

          <ul style={listStyle}>
            <li>Limpeza de evaporadoras.</li>
            <li>Higienização de climatização.</li>
            <li>Verificação de pressão.</li>
            <li>Limpeza de filtros.</li>
            <li>Inspeção elétrica e mecânica.</li>
          </ul>

          <h3 style={subTitle}>Manutenção Corretiva</h3>

          <ul style={listStyle}>
            <li>Reparo de compressores.</li>
            <li>Correção de vazamentos.</li>
            <li>Troca de motores.</li>
            <li>Reparo eletrônico.</li>
            <li>Atendimento emergencial.</li>
          </ul>
        </div>

        {/* AUTOMAÇÃO */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>
            Serviços em Automação
          </h2>

          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1800"
            alt="Automação Industrial"
            style={imageStyle}
          />

          <p style={textStyle}>
            Desenvolvimento de soluções completas em automação
            industrial e integração de sistemas elétricos.
          </p>

          <h3 style={subTitle}>Automação Industrial</h3>

          <ul style={listStyle}>
            <li>Projetos de automação.</li>
            <li>Instalação de painéis elétricos.</li>
            <li>Programação de CLP.</li>
            <li>Programação de IHM.</li>
            <li>Integração de sistemas industriais.</li>
            <li>Sistemas supervisórios SCADA.</li>
            <li>Automação de grupos geradores.</li>
          </ul>

          <h3 style={subTitle}>Sistemas Elétricos</h3>

          <ul style={listStyle}>
            <li>Montagem de quadros elétricos.</li>
            <li>Instalação de inversores.</li>
            <li>Soft starters.</li>
            <li>Controle de motores.</li>
            <li>Proteção elétrica.</li>
            <li>Monitoramento remoto.</li>
            <li>Sistemas de telemetria.</li>
          </ul>

          <h3 style={subTitle}>Manutenção</h3>

          <ul style={listStyle}>
            <li>Diagnóstico de falhas.</li>
            <li>Atualização de software.</li>
            <li>Correção em CLPs e IHMs.</li>
            <li>Backup de programas.</li>
            <li>Manutenção de painéis.</li>
            <li>Calibração de sensores.</li>
          </ul>
        </div>

        {/* DIFERENCIAIS */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>
            Diferenciais da SUPPORT
          </h2>

          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1800"
            alt="Usina Híbrida"
            style={imageStyle}
          />

          <ul style={listStyle}>
            <li>Equipe técnica especializada.</li>
            <li>Atendimento emergencial 24 horas.</li>
            <li>Serviços com qualidade e segurança.</li>
            <li>Tecnologia avançada.</li>
            <li>Atendimento industrial, comercial e residencial.</li>
            <li>Contratos de manutenção preventiva.</li>
            <li>Emissão de laudos técnicos.</li>
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
  marginBottom: "70px",
  border: "2px solid #00e1ff",
  boxShadow: "0 0 25px rgba(0,225,255,0.2)",
};

const titleStyle = {
  fontSize: "60px",
  color: "#ffb400",
  marginBottom: "30px",
  fontFamily: "Rye",
};

const subTitle = {
  fontSize: "38px",
  color: "#00e1ff",
  marginTop: "50px",
  marginBottom: "20px",
};

const textStyle = {
  fontSize: "25px",
  lineHeight: "45px",
  color: "#d8d8d8",
  marginBottom: "30px",
};

const listStyle = {
  fontSize: "24px",
  lineHeight: "45px",
  color: "#d8d8d8",
};

const imageStyle = {
  width: "100%",
  height: "500px",
  objectFit: "cover" as const,
  borderRadius: "20px",
  marginBottom: "40px",
  border: "3px solid #ffb400",
  boxShadow: "0 0 25px rgba(255,180,0,0.4)",
};