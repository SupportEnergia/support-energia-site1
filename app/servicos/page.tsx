export default function Servicos() {
  const sectionStyle = {
    backgroundColor: "#0a0a0a",
    padding: "80px 40px",
    color: "#fff",
    borderBottom: "2px solid #00e5ff",
  };

  const titleStyle = {
    fontSize: "58px",
    color: "#ffcc00",
    textAlign: "center" as const,
    marginBottom: "40px",
    textShadow: "0 0 20px #ff9900",
    fontWeight: "bold" as const,
  };

  const subtitleStyle = {
    fontSize: "38px",
    color: "#00e5ff",
    marginTop: "50px",
    marginBottom: "25px",
    textShadow: "0 0 12px #00e5ff",
  };

  const textStyle = {
    fontSize: "22px",
    lineHeight: "40px",
    color: "#f5f5f5",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "20px",
    border: "3px solid #ffcc00",
    marginTop: "30px",
    marginBottom: "40px",
    boxShadow: "0 0 30px rgba(255,204,0,0.5)",
  };

  return (
    <main
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      {/* HERO */}
      <section
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "160px 40px",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.75)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <img
            src="/logo.png"
            alt="SUPPORT"
            style={{
              width: "260px",
              marginBottom: "30px",
            }}
          />

          <h1
            style={{
              fontSize: "80px",
              color: "#ffcc00",
              textShadow: "0 0 25px #ff9900",
              marginBottom: "20px",
            }}
          >
            Serviços Industriais
          </h1>

          <p
            style={{
              fontSize: "30px",
              color: "#00e5ff",
              fontWeight: "bold",
            }}
          >
            Energia • Automação • Refrigeração
          </p>
        </div>
      </section>

      {/* GRUPOS GERADORES */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Grupos Geradores</h2>

        <img
          src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1800"
          alt="Grupo Gerador Diesel"
          style={imageStyle}
        />

        <h3 style={subtitleStyle}>Instalação</h3>

        <div style={textStyle}>
          <p>• Instalação de grupos geradores diesel e gás.</p>
          <p>• Montagem de bases e estruturas metálicas.</p>
          <p>• Instalação de tanques de combustível.</p>
          <p>• Interligação elétrica de potência e comando.</p>
          <p>• Instalação de QTA/ATS.</p>
          <p>• Sistemas de aterramento e proteção elétrica.</p>
          <p>• Sistemas de exaustão e silenciamento.</p>
          <p>• Parametrização de controladores.</p>
          <p>• Start-up e comissionamento.</p>
          <p>• Testes operacionais com carga e sem carga.</p>
        </div>

        <h3 style={subtitleStyle}>Manutenção Preventiva</h3>

        <div style={textStyle}>
          <p>• Troca de óleo e filtros.</p>
          <p>• Verificação do sistema de arrefecimento.</p>
          <p>• Teste de baterias e carregadores.</p>
          <p>• Ajustes de tensão e frequência.</p>
          <p>• Inspeção elétrica geral.</p>
          <p>• Relatórios técnicos completos.</p>
        </div>

        <h3 style={subtitleStyle}>Manutenção Corretiva</h3>

        <div style={textStyle}>
          <p>• Diagnóstico de falhas mecânicas e elétricas.</p>
          <p>• Reparo de motores diesel.</p>
          <p>• Reparo de alternadores.</p>
          <p>• Recuperação de chicotes elétricos.</p>
          <p>• Atendimento emergencial 24h.</p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800"
          alt="Manutenção Industrial"
          style={imageStyle}
        />
      </section>

      {/* REFRIGERAÇÃO */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Refrigeração Industrial</h2>

        <img
          src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1800"
          alt="Refrigeração Industrial"
          style={imageStyle}
        />

        <h3 style={subtitleStyle}>Instalação</h3>

        <div style={textStyle}>
          <p>• Instalação de ar-condicionado industrial.</p>
          <p>• Sistemas Split, VRF e Chiller.</p>
          <p>• Câmaras frigoríficas.</p>
          <p>• Painéis frigoríficos.</p>
          <p>• Tubulações frigorígenas.</p>
          <p>• Start-up e testes de funcionamento.</p>
        </div>

        <h3 style={subtitleStyle}>Manutenção Preventiva</h3>

        <div style={textStyle}>
          <p>• Limpeza de evaporadoras e condensadoras.</p>
          <p>• Higienização completa.</p>
          <p>• Verificação de pressão do gás.</p>
          <p>• Ajustes de temperatura.</p>
          <p>• Inspeção elétrica e mecânica.</p>
        </div>

        <h3 style={subtitleStyle}>Manutenção Corretiva</h3>

        <div style={textStyle}>
          <p>• Reparo de compressores.</p>
          <p>• Correção de vazamentos.</p>
          <p>• Troca de motores e ventiladores.</p>
          <p>• Recuperação de sistemas frigoríficos.</p>
          <p>• Atendimento emergencial.</p>
        </div>
      </section>

      {/* AUTOMAÇÃO */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Automação Industrial</h2>

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800"
          alt="Automação Industrial"
          style={imageStyle}
        />

        <h3 style={subtitleStyle}>Automação</h3>

        <div style={textStyle}>
          <p>• Desenvolvimento de projetos industriais.</p>
          <p>• Programação de CLP.</p>
          <p>• Programação de IHMs.</p>
          <p>• Sistemas supervisórios SCADA.</p>
          <p>• Integração de sistemas industriais.</p>
          <p>• Automação de grupos geradores.</p>
        </div>

        <h3 style={subtitleStyle}>Sistemas Elétricos</h3>

        <div style={textStyle}>
          <p>• Montagem de quadros elétricos.</p>
          <p>• Instalação de inversores de frequência.</p>
          <p>• Parametrização de soft starters.</p>
          <p>• Controle de motores elétricos.</p>
          <p>• Monitoramento remoto.</p>
          <p>• Sistemas de telemetria.</p>
        </div>

        <h3 style={subtitleStyle}>Manutenção</h3>

        <div style={textStyle}>
          <p>• Diagnóstico de falhas automatizadas.</p>
          <p>• Atualização de software e firmware.</p>
          <p>• Correção de falhas em CLPs.</p>
          <p>• Backup e restauração de programas.</p>
          <p>• Calibração de sensores.</p>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Diferenciais SUPPORT</h2>

        <div style={textStyle}>
          <p>• Equipe técnica especializada.</p>
          <p>• Atendimento emergencial 24 horas.</p>
          <p>• Serviços com qualidade e segurança.</p>
          <p>• Equipamentos modernos.</p>
          <p>• Tecnologia avançada.</p>
          <p>• Atendimento industrial, comercial e residencial.</p>
          <p>• Contratos de manutenção preventiva.</p>
          <p>• Emissão de laudos técnicos.</p>
          <p>• Soluções personalizadas.</p>
        </div>
      </section>
    </main>
  );
}