export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#0b0f14",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#00ff88",
            marginBottom: "10px",
          }}
        >
          CUSTOM POWER GERADORES
        </h1>

        <h2
          style={{
            fontSize: "28px",
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
            lineHeight: "35px",
            fontSize: "22px",
            color: "#dddddd",
          }}
        >
          Especialistas em manutenção de grupos geradores,
          automação industrial, refrigeração industrial e
          soluções em energia para sistemas isolados
          da região Amazônica.
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
            href="https://wa.me/5592984794889"
            target="_blank"
            style={{
              backgroundColor: "#00ff88",
              color: "#000",
              padding: "18px 35px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Falar no WhatsApp
          </a>

          <a
            href="#orcamento"
            style={{
              backgroundColor: "#111827",
              color: "#00ff88",
              padding: "18px 35px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
              border: "1px solid #00ff88",
              fontSize: "18px",
            }}
          >
            Solicitar Orçamento
          </a>
        </div>
      </section>

      <section
        style={{
          marginTop: "100px",
          maxWidth: "1200px",
          marginInline: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "40px",
            color: "#00ff88",
            textAlign: "center",
          }}
        >
          Sobre a Empresa
        </h2>

        <div
          style={{
            backgroundColor: "#111827",
            padding: "40px",
            borderRadius: "20px",
            lineHeight: "35px",
            fontSize: "20px",
            color: "#dddddd",
          }}
        >
          A Custom Power Geradores nasceu com o objetivo de fornecer
          soluções completas em geração de energia, automação
          industrial e refrigeração industrial para empresas,
          indústrias e sistemas isolados da região Norte.

          <br />
          <br />

          Com ampla experiência prática na região Amazônica,
          atuamos com foco em confiabilidade, atendimento rápido
          e mão de obra altamente qualificada.

          <br />
          <br />

          Nossa missão é garantir energia contínua, eficiência operacional
          e segurança para nossos clientes.
        </div>
      </section>

      <section
        style={{
          marginTop: "100px",
          maxWidth: "1200px",
          marginInline: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "50px",
            color: "#00ff88",
            textAlign: "center",
          }}
        >
          Serviços Prestados
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
          }}
        >
          {[
            "Manutenção de Grupos Geradores",
            "Automação Industrial",
            "Refrigeração Industrial",
            "Instalação de GMG",
            "Sincronismo de Geradores",
            "Retrofit de Painéis",
            "Laudos Técnicos",
            "Manutenção Preventiva",
            "Manutenção Corretiva",
            "Comissionamento",
            "Assistência Técnica 24h",
            "Contratos de Manutenção",
          ].map((servico) => (
            <div
              key={servico}
              style={{
                backgroundColor: "#111827",
                padding: "30px",
                borderRadius: "18px",
                border: "1px solid #1f2937",
              }}
            >
              <h3
                style={{
                  color: "#00ff88",
                  marginBottom: "15px",
                  fontSize: "24px",
                }}
              >
                {servico}
              </h3>

              <p
                style={{
                  color: "#cccccc",
                  lineHeight: "28px",
                  fontSize: "17px",
                }}
              >
                Serviço especializado executado com qualidade,
                segurança e foco em máxima disponibilidade operacional.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="orcamento"
        style={{
          marginTop: "100px",
          maxWidth: "900px",
          marginInline: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "40px",
            color: "#00ff88",
            textAlign: "center",
          }}
        >
          Solicite um Orçamento
        </h2>

        <div
          style={{
            backgroundColor: "#111827",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
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
              placeholder="Empresa"
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Telefone"
              style={inputStyle}
            />

            <textarea
              placeholder="Descreva sua necessidade"
              rows={6}
              style={inputStyle}
            />

            <a
              href="https://wa.me/5592984794889"
              target="_blank"
              style={{
                backgroundColor: "#00ff88",
                color: "#000",
                padding: "18px",
                borderRadius: "12px",
                textDecoration: "none",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              Enviar Solicitação
            </a>
          </form>
        </div>
      </section>

      <section
        style={{
          marginTop: "100px",
          maxWidth: "1200px",
          marginInline: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "40px",
            color: "#00ff88",
            textAlign: "center",
          }}
        >
          Área do Cliente
        </h2>

        <div
          style={{
            backgroundColor: "#111827",
            padding: "40px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "#cccccc",
              fontSize: "20px",
              lineHeight: "35px",
            }}
          >
            Em breve nossos clientes poderão acessar relatórios técnicos,
            históricos de manutenção, contratos, chamados e documentação
            diretamente pela área exclusiva do cliente.
          </p>

          <div style={{ marginTop: "30px" }}>
            <a
              href="https://wa.me/5592984794889"
              target="_blank"
              style={{
                backgroundColor: "#00ff88",
                color: "#000",
                padding: "18px 35px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Suporte Técnico
            </a>
          </div>
        </div>
      </section>

      <footer
        style={{
          marginTop: "120px",
          textAlign: "center",
          color: "#888",
          paddingBottom: "40px",
        }}
      >
        <h3 style={{ color: "#00ff88" }}>
          CUSTOM POWER GERADORES
        </h3>

        <p>Manaus - Amazonas</p>

        <p>(92) 98479-4889</p>

        <p>
          Atendimento especializado em sistemas isolados
        </p>
      </footer>
    </main>
  );
}

const inputStyle = {
  backgroundColor: "#0b0f14",
  border: "1px solid #333",
  borderRadius: "12px",
  padding: "18px",
  color: "#fff",
  fontSize: "16px",
  outline: "none",
};