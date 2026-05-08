export default function Servicos() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: "60px", color: "#00ff88" }}>
        Serviços Prestados
      </h1>

      <ul style={{ fontSize: "24px", lineHeight: "50px" }}>
        <li>Manutenção de grupos geradores</li>
        <li>Automação industrial</li>
        <li>Sistemas híbridos com BESS</li>
        <li>Energia solar</li>
        <li>Refrigeração industrial</li>
        <li>Instalação elétrica industrial</li>
        <li>Monitoramento remoto</li>
      </ul>
    </main>
  );
}