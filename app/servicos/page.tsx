export default function Servicos() {
  const sectionStyle = {
    backgroundColor: "#050505",
    color: "#fff",
    padding: "80px 40px",
    fontFamily: "Arial",
  };

  const titleStyle = {
    fontSize: "65px",
    color: "#ffcc00",
    textAlign: "center" as const,
    marginBottom: "30px",
    textShadow: "0 0 25px #ff9900",
    fontWeight: "bold" as const,
  };

  const cardStyle = {
    backgroundColor: "#101010",
    border: "2px solid #00e5ff",
    borderRadius: "20px",
    padding: "30px",
    marginBottom: "50px",
    boxShadow: "0 0 25px rgba(0,229,255,0.5)",
  };

  const subtitleStyle = {
    fontSize: "40px",
    color: "#00e5ff",
    marginBottom: "20px",
    textShadow: "0 0 15px #00e5ff",
  };

  const textStyle = {
    fontSize: "22px",
    lineHeight: "2",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "900px",
    borderRadius: "20px",
    marginTop: "30px",
    marginBottom: "30px",
    border: "3px solid #ffcc00",
    boxShadow: "0 0 25px rgba(255,204,0,0.7)",
  };

  return (
    <main style={sectionStyle}>
      <h1 style={titleStyle}>SERVIÇOS SUPPORT</h1>

      {/* ================= GERADORES ================= */}

      <section style={cardStyle}>
        <h2 style={subtitleStyle}>
          Serviços em Grupos Geradores
        </h2>

        <img
          src="/images/gerador2.png"
          alt="Grupo Gerador"
          style={imageStyle}
        />

        <div style={textStyle}>
          <h3>Instalação de Grupos Geradores</h3>

          <ul>
            <li>Instalação de grupos geradores diesel e gás.</li>
            <li>Montagem de bases, suportes e estruturas metálicas.</li>
            <li>Instalação de tanques de combustível.</li>
            <li>Interligação elétrica de potência e comando.</li>
            <li>Instalação de QTA / ATS.</li>
            <li>Parametrização de controladores eletrônicos.</li>
            <li>Start-up e comissionamento completo.</li>
            <li>Testes operacionais com carga e sem carga.</li>
          </ul>

          <h3>Manutenção Preventiva</h3>

          <ul>
            <li>Troca de óleo lubrificante e filtros.</li>
            <li>Teste de baterias e carregadores.</li>
            <li>Verificação do sistema de arrefecimento.</li>
            <li>Inspeção elétrica geral.</li>
            <li>Ajustes de tensão e frequência.</li>
            <li>Emissão de relatórios técnicos.</li>
          </ul>

          <h3>Manutenção Corretiva</h3>

          <ul>
            <li>Diagnóstico de falhas mecânicas e elétricas.</li>
            <li>Reparo de motores diesel.</li>
            <li>Reparo de alternadores.</li>
            <li>Correção de falhas em QTA/ATS.</li>
            <li>Atendimento emergencial 24 horas.</li>
          </ul>

          <h3>Operação de Grupos Geradores</h3>

          <ul>
            <li>Operação assistida de grupos geradores.</li>
            <li>Monitoramento de parâmetros elétricos.</li>
            <li>Controle de consumo de combustível.</li>
            <li>Operação em paralelo e sincronismo.</li>
            <li>Treinamento de operadores.</li>
          </ul>
        </div>
      </section>

      {/* ================= REFRIGERAÇÃO ================= */}

      <section style={cardStyle}>
        <h2 style={subtitleStyle}>
          Serviços em Refrigeração
        </h2>

        <img
          src="/images/refrigeracao.png"
          alt="Refrigeração Industrial"
          style={imageStyle}
        />

        <div style={textStyle}>
          <h3>Instalação de Sistemas</h3>

          <ul>
            <li>Instalação de ar-condicionado residencial e industrial.</li>
            <li>Instalação de sistemas Split, VRF e Chiller.</li>
            <li>Instalação de câmaras frigoríficas.</li>
            <li>Instalação de painéis frigoríficos.</li>
            <li>Carga de gás refrigerante.</li>
            <li>Start-up e testes de funcionamento.</li>
          </ul>

          <h3>Manutenção Preventiva</h3>

          <ul>
            <li>Limpeza de evaporadoras e condensadoras.</li>
            <li>Higienização de sistemas de climatização.</li>
            <li>Verificação de pressão do gás refrigerante.</li>
            <li>Inspeção elétrica e mecânica.</li>
            <li>Ajustes de temperatura e desempenho.</li>
          </ul>

          <h3>Manutenção Corretiva</h3>

          <ul>
            <li>Reparo de compressores.</li>
            <li>Correção de vazamentos de gás.</li>
            <li>Troca de motores e ventiladores.</li>
            <li>Reparo de placas eletrônicas.</li>
            <li>Atendimento emergencial.</li>
          </ul>
        </div>
      </section>

      {/* ================= AUTOMAÇÃO ================= */}

      <section style={cardStyle}>
        <h2 style={subtitleStyle}>
          Serviços em Automação Industrial
        </h2>

        <img
          src="/images/qta.png"
          alt="Automação Industrial"
          style={imageStyle}
        />

        <div style={textStyle}>
          <h3>Automação Industrial</h3>

          <ul>
            <li>Desenvolvimento de projetos de automação.</li>
            <li>Instalação de painéis elétricos e comandos.</li>
            <li>Programação de CLP.</li>
            <li>Programação de IHMs.</li>
            <li>Integração de sistemas industriais.</li>
            <li>Sistemas supervisórios SCADA.</li>
            <li>Automação de grupos geradores.</li>
          </ul>

          <h3>Sistemas Elétricos e Controle</h3>

          <ul>
            <li>Montagem de quadros elétricos.</li>
            <li>Instalação de inversores de frequência.</li>
            <li>Parametrização de soft starters.</li>
            <li>Controle de motores elétricos.</li>
            <li>Sistemas de telemetria.</li>
            <li>Monitoramento remoto de equipamentos.</li>
          </ul>

          <h3>Manutenção em Automação</h3>

          <ul>
            <li>Diagnóstico de falhas em sistemas automatizados.</li>
            <li>Atualização de software e firmware.</li>
            <li>Correção de falhas em CLPs e IHMs.</li>
            <li>Backup e restauração de programas.</li>
            <li>Calibração de sensores e instrumentos.</li>
          </ul>
        </div>
      </section>

      {/* ================= DIFERENCIAIS ================= */}

      <section style={cardStyle}>
        <h2 style={subtitleStyle}>
          Diferenciais da SUPPORT
        </h2>

        <img
          src="/images/gerador1.png"
          alt="Support Energia"
          style={imageStyle}
        />

        <div style={textStyle}>
          <ul>
            <li>Equipe técnica especializada.</li>
            <li>Atendimento emergencial 24 horas.</li>
            <li>Serviços com qualidade e segurança.</li>
            <li>Equipamentos modernos e tecnologia avançada.</li>
            <li>Atendimento industrial, comercial e residencial.</li>
            <li>Contratos de manutenção preventiva.</li>
            <li>Emissão de laudos e relatórios técnicos.</li>
            <li>Soluções personalizadas para cada cliente.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}