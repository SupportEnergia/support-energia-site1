export default function Empresa() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#050505",
        color: "#fff",
        fontFamily: "Arial",
      }}
    >
      {/* BANNER */}
      <section
        style={{
          height: "500px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600')",
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
            backgroundColor: "rgba(0,0,0,0.65)",
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
              textShadow: "0 0 25px #ff9900",
              marginBottom: "20px",
            }}
          >
            SUPPORT
          </h1>

          <p
            style={{
              fontSize: "32px",
              color: "#00e1ff",
              fontWeight: "bold",
            }}
          >
            Energia • Automação • Refrigeração
          </p>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "100px 60px",
        }}
      >
        <h2
          style={{
            fontSize: "60px",
            color: "#ffb400",
            marginBottom: "40px",
            fontFamily: "Rye",
          }}
        >
          Nossa História
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "50px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "25px",
                lineHeight: "45px",
                color: "#d8d8d8",
              }}
            >
              A SUPPORT Energia Automação e Refrigeração foi fundada
              no ano de 2024 com o objetivo de atender a crescente
              demanda do mercado por empresas altamente qualificadas
              em manutenção de grupos geradores, sistemas híbridos,
              energia solar e automação industrial.
            </p>

            <p
              style={{
                fontSize: "25px",
                lineHeight: "45px",
                color: "#d8d8d8",
                marginTop: "30px",
              }}
            >
              Seus fundadores possuem mais de 13 anos de experiência
              atuando em sistemas isolados da região Norte do Brasil,
              realizando manutenção e operação de grupos geradores
              Scania, Caterpillar, Perkins e Volvo.
            </p>

            <p
              style={{
                fontSize: "25px",
                lineHeight: "45px",
                color: "#d8d8d8",
                marginTop: "30px",
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
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400"
              alt="Grupo Gerador"
              style={{
                width: "100%",
                height: "600px",
                objectFit: "cover",
                borderRadius: "25px",
                border: "4px solid #00e1ff",
                boxShadow: "0 0 30px rgba(0,225,255,0.5)",
              }}
            />
          </div>
        </div>
      </section>

      {/* MISSÃO */}
      <section
        style={{
          backgroundColor: "#0d0d0d",
          padding: "100px 60px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "55px",
              color: "#00e1ff",
              marginBottom: "40px",
            }}
          >
            Nossa Missão
          </h2>

          <p
            style={{
              fontSize: "28px",
              lineHeight: "50px",
              color: "#d8d8d8",
            }}
          >
            Garantir confiabilidade, eficiência energética e alta
            performance nos sistemas de geração de energia,
            refrigeração e automação industrial, entregando soluções
            modernas, seguras e sustentáveis para nossos clientes.
          </p>
        </div>
      </section>
    </main>
  );
}