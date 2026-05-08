export default function Empresa() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#050816",
        color: "#fff",
        padding: "60px",
        fontFamily: "Arial",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
        style={{
          width: "100%",
          borderRadius: "20px",
          marginBottom: "40px",
        }}
      />

      <h1
        style={{
          color: "#00ff88",
          fontSize: "55px",
          marginBottom: "30px",
        }}
      >
        Sobre a Empresa
      </h1>

      <p
        style={{
          fontSize: "22px",
          lineHeight: "38px",
          color: "#cccccc",
        }}
      >
        A Support Energia Automação e Refrigeração foi fundada
        em 2024 com base na crescente demanda do mercado por
        empresas qualificadas em geração de energia,
        automação industrial e refrigeração.
      </p>

      <p
        style={{
          fontSize: "22px",
          lineHeight: "38px",
          color: "#cccccc",
          marginTop: "30px",
        }}
      >
        Seus fundadores possuem mais de 13 anos de experiência
        em grupos geradores Scania, Caterpillar, Perkins e Volvo,
        além de sistemas híbridos com BESS e energia solar.
      </p>
    </main>
  );
}