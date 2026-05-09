export default function Servicos() {
  const sectionStyle = {
    backgroundColor: "#050505",
    padding: "80px 40px",
    color: "#fff",
    borderBottom: "2px solid #00e5ff",
  };

  const titleStyle = {
    fontSize: "60px",
    color: "#ffcc00",
    textAlign: "center" as const,
    marginBottom: "40px",
    textShadow: "0 0 25px #ff9900",
    fontWeight: "bold" as const,
  };

  const subtitleStyle = {
    fontSize: "38px",
    color: "#00e5ff",
    marginTop: "40px",
    marginBottom: "25px",
    textShadow: "0 0 10px #00e5ff",
  };

  const textStyle = {
    fontSize: "22px",
    lineHeight: "42px",
    color: "#f1f1f1",
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
          backgroundColor: "#000",
          textAlign: "center",
          padding: "120px 40px",
          borderBottom: "2px solid #00e5ff",
        }}
      >
        <img
          src="/images/gerador2.jpg"
          alt="SUPPORT"
          style={{
            width: "450px",
            maxWidth: "100%",
            marginBottom: "40px",
            borderRadius: "20px",
            boxShadow: "0 0 30px rgba(255,204,0,0.5)",
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
          SERVIÇOS SUPPORT
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
      </section>

      {/* GERADORES */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Grupos Geradores</h2>

        <img
          src="/images/gerador1.jpg"
          alt="Grupo Gerador"
          style={imageStyle}
        />

        <div style={textStyle}>
          <p>• Instalação de grupos geradores diesel e gás.</p>
          <p>• Montagem de bases e estruturas metálicas.</p>
          <p>• Instalação de tanques de combustível.</p>
          <p>• Interligação elétrica de potência e comando.</p>
          <p>• Instalação de QTA/ATS.</p>
          <p>• Sistemas de aterramento e proteção elétrica.</p>
          <p>• Sistemas de exaustão e silenciamento.</p>
          <p>• Parametrização de controladores eletrônicos.</p>
          <p>• Start-up e comissionamento.</p>
          <p>• Testes operacionais com carga e sem carga.</p>
        </div>

        <h3 style={subtitleStyle}>Manutenção Preventiva</h3>

        <div style={textStyle}>
          <p>• Troca de óleo lubrificante e filtros.</p>
          <p>• Troca de filtros de combustível e ar.</p>
          <p>• Verificação do sistema de arrefecimento.</p>
          <p>• Limpeza de radiadores.</p>
          <p>• Teste de baterias e carregadores.</p>
          <p>• Inspeção elétrica geral.</p>
          <p>• Ajustes de tensão e frequência.</p>
          <p>• Emissão de relatórios técnicos.</p>
        </div>
      </section>

      {/* REFRIGERAÇÃO */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Refrigeração Industrial</h2>

        <img
          src="/images/painel.jpg"
          alt="Refrigeração Industrial"
          style={imageStyle}
        />

        <div style={textStyle}>
          <p>• Instalação de ar-condicionado industrial.</p>
          <p>• Instalação de sistemas Split, VRF e Chiller.</p>
          <p>• Instalação de câmaras frigoríficas.</p>
          <p>• Instalação de painéis frigoríficos.</p>
          <p>• Tubulações frigorígenas.</p>
          <p>• Start-up e testes de funcionamento.</p>
        </div>

        <h3 style={subtitleStyle}>Manutenção Corretiva</h3>

        <div style={textStyle}>
          <p>• Reparo de compressores.</p>
          <p>• Correção de vazamentos de gás.</p>
          <p>• Troca de motores e ventiladores.</p>
          <p>• Recuperação de sistemas frigoríficos.</p>
          <p>• Atendimento emergencial.</p>
        </div>
      </section>

      {/* AUTOMAÇÃO */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Automação Industrial</h2>

        <img
          src="/images/gerador2.jpg"
          alt="Automação"
          style={imageStyle}
        />

        <div style={textStyle}>
          <p>• Desenvolvimento de projetos de automação.</p>
          <p>• Instalação de painéis elétricos e comandos.</p>
          <p>• Programação de CLP.</p>
          <p>• Programação de IHMs.</p>
          <p>• Sistemas supervisórios SCADA.</p>
          <p>• Automação de grupos geradores.</p>
          <p>• Instalação de sensores e instrumentos.</p>
          <p>• Sistemas de telemetria.</p>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section style={sectionStyle}>
        <h2 style={titleStyle}>Diferenciais SUPPORT</h2>

        <div style={textStyle}>
          <p>• Equipe técnica especializada.</p>
          <p>• Atendimento emergencial 24 horas.</p>
          <p>• Serviços com qualidade e segurança.</p>
          <p>• Equipamentos modernos e tecnologia avançada.</p>
          <p>• Atendimento industrial, comercial e residencial.</p>
          <p>• Contratos de manutenção preventiva.</p>
          <p>• Emissão de laudos e relatórios técnicos.</p>
          <p>• Soluções personalizadas para cada cliente.</p>
        </div>
      </section>
    </main>
  );
}