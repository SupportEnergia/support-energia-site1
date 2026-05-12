export default function EmpresaPage() {
  return (
    <main
      style={{
        backgroundColor: "#050505",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          position: "relative",
          height: "500px",
          backgroundImage: "url('/images/gerador1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.55))",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "20px",
          }}
        >
          <img
            src="/logo.png"
            alt="SUPPORT"
            style={{
              width: "140px",
              marginBottom: "20px",
            }}
          />

          <h1
            style={{
              fontSize: "58px",
              color: "#ffcc00",
              marginBottom: "20px",
              textShadow: "0 0 20px #ffcc00",
            }}
          >
            SUPPORT
          </h1>

          <h2
            style={{
              fontSize: "28px",
              color: "#00e1ff",
              fontWeight: "bold",
            }}
          >
            Energia • Automação • Refrigeração
          </h2>
        </div>
      </section>

      {/* SOBRE */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 30px",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            color: "#ffcc00",
            marginBottom: "40px",
            textAlign: "center",
            textShadow: "0 0 15px #ffcc00",
          }}
        >
          Nossa História
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "22px",
                lineHeight: "42px",
                color: "#d6d6d6",
                textAlign: "justify",
              }}
            >
              A SUPPORT Energia Automação e Refrigeração foi fundada
              em 2024 com o objetivo de atender a crescente demanda do
              mercado por empresas altamente qualificadas em manutenção
              de grupos geradores, sistemas híbridos, energia solar e
              automação industrial.
            </p>

            <p
              style={{
                fontSize: "22px",
                lineHeight: "42px",
                color: "#d6d6d6",
                textAlign: "justify",
                marginTop: "25px",
              }}
            >
              Seus fundadores possuem mais de 13 anos de experiência
              atuando em sistemas isolados da região Norte do Brasil,
              realizando manutenção e operação de grupos geradores
              Scania, Caterpillar, Perkins e Volvo.
            </p>

            <p
              style={{
                fontSize: "22px",
                lineHeight: "42px",
                color: "#d6d6d6",
                textAlign: "justify",
                marginTop: "25px",
              }}
            >
              A empresa também atua em sistemas BESS, energia solar,
              automação industrial e refrigeração residencial e
              industrial, oferecendo soluções modernas e eficientes
              para indústrias, usinas e empresas.
            </p>
          </div>

          <div>
            <img
              src="/images/gerador2.jpg"
              alt="Grupo Gerador"
              style={{
                width: "100%",
                borderRadius: "20px",
                border: "3px solid #ffcc00",
                boxShadow: "0 0 30px rgba(255,204,0,0.4)",
              }}
            />
          </div>
        </div>
      </section>

      {/* MISSÃO VISÃO VALORES */}
      <section
        style={{
          backgroundColor: "#0b0b0b",
          padding: "80px 30px",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              color: "#00e1ff",
              marginBottom: "60px",
              textAlign: "center",
              textShadow: "0 0 15px #00e1ff",
            }}
          >
            Missão • Visão • Valores
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
            }}
          >
            {/* MISSÃO */}
            <div
              style={{
                background: "#111",
                padding: "40px",
                borderRadius: "20px",
                border: "2px solid #ffcc00",
                boxShadow: "0 0 20px rgba(255,204,0,0.2)",
              }}
            >
              <h3
                style={{
                  color: "#ffcc00",
                  fontSize: "34px",
                  marginBottom: "25px",
                }}
              >
                Missão
              </h3>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "36px",
                  color: "#d8d8d8",
                }}
              >
                Garantir confiabilidade, eficiência energética e alta
                performance nos sistemas de geração de energia,
                refrigeração e automação industrial, entregando
                soluções modernas, seguras e sustentáveis para nossos
                clientes.
              </p>
            </div>

            {/* VISÃO */}
            <div
              style={{
                background: "#111",
                padding: "40px",
                borderRadius: "20px",
                border: "2px solid #00e1ff",
                boxShadow: "0 0 20px rgba(0,225,255,0.2)",
              }}
            >
              <h3
                style={{
                  color: "#00e1ff",
                  fontSize: "34px",
                  marginBottom: "25px",
                }}
              >
                Visão
              </h3>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "36px",
                  color: "#d8d8d8",
                }}
              >
                Ser reconhecida como uma empresa inovadora e referência
                em soluções de energia, automação e refrigeração,
                contribuindo diretamente para a transição energética e
                para um mundo mais sustentável.
              </p>
            </div>

            {/* VALORES */}
            <div
              style={{
                background: "#111",
                padding: "40px",
                borderRadius: "20px",
                border: "2px solid #ffffff",
                boxShadow: "0 0 20px rgba(255,255,255,0.15)",
              }}
            >
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "34px",
                  marginBottom: "25px",
                }}
              >
                Valores
              </h3>

              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "36px",
                  color: "#d8d8d8",
                }}
              >
                Trabalhamos com ética, excelência, transparência e
                respeito. Buscamos constantemente novas tecnologias,
                inovação e expansão para entregar soluções eficientes,
                modernas e seguras aos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section
        style={{
          padding: "80px 30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            color: "#ffcc00",
            textAlign: "center",
            marginBottom: "60px",
            textShadow: "0 0 15px #ffcc00",
          }}
        >
          Diferenciais da Empresa
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
          }}
        >
          {[
            "Equipe técnica especializada",
            "Atendimento emergencial 24 horas",
            "Serviços com qualidade e segurança",
            "Equipamentos modernos e tecnologia avançada",
            "Atendimento industrial, comercial e residencial",
            "Contratos de manutenção preventiva",
            "Emissão de laudos e relatórios técnicos",
            "Soluções personalizadas para cada cliente",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#111",
                padding: "30px",
                borderRadius: "18px",
                border: "1px solid #00e1ff",
                fontSize: "22px",
                color: "#fff",
                textAlign: "center",
                boxShadow: "0 0 15px rgba(0,225,255,0.2)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}