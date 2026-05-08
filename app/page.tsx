# ESTRUTURA COMPLETA DO SITE — SUPPORT ENERGIA

Você irá criar estas páginas:

app/
├── page.tsx
├── empresa/page.tsx
├── servicos/page.tsx
├── planos/page.tsx
├── cliente/page.tsx
├── contato/page.tsx
├── orcamento/page.tsx
├── reclamacao/page.tsx
└── trabalhe/page.tsx

==================================================
ARQUIVO PRINCIPAL
app/page.tsx
============

export default function Home() {
return (
<main
style={{
minHeight: "100vh",
backgroundImage:
"linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.90)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1974&auto=format&fit=crop')",
backgroundSize: "cover",
backgroundPosition: "center",
color: "#fff",
fontFamily: "Arial",
}}
>
<header
style={{
padding: "25px",
backgroundColor: "rgba(0,0,0,0.85)",
borderBottom: "1px solid #00ff88",
position: "fixed",
width: "100%",
zIndex: 1000,
}}
>
<nav
style={{
display: "flex",
justifyContent: "center",
gap: "20px",
flexWrap: "wrap",
}}
> <a href="/" style={menuStyle}>Home</a> <a href="/empresa" style={menuStyle}>Empresa</a> <a href="/servicos" style={menuStyle}>Serviços</a> <a href="/planos" style={menuStyle}>Planos</a> <a href="/cliente" style={menuStyle}>Área Cliente</a> <a href="/orcamento" style={menuStyle}>Orçamento</a> <a href="/reclamacao" style={menuStyle}>Reclamações</a> <a href="/trabalhe" style={menuStyle}>Trabalhe Conosco</a> <a href="/contato" style={menuStyle}>Contato</a> </nav> </header>

```
  <section
    style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px",
    }}
  >
    <div>
      <h1
        style={{
          fontSize: "75px",
          color: "#00ff88",
          fontFamily: "Rye, cursive",
        }}
      >
        SUPPORT ENERGIA
        <br />
        AUTOMAÇÃO E REFRIGERAÇÃO
      </h1>

      <h2
        style={{
          marginTop: "30px",
          fontSize: "32px",
        }}
      >
        Grupos Geradores • Energia Solar • BESS • Refrigeração
      </h2>

      <p
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          fontSize: "22px",
          lineHeight: "38px",
        }}
      >
        Soluções completas em geração de energia,
        sistemas híbridos, armazenamento de energia,
        automação industrial e refrigeração.
      </p>

      <a
        href="https://wa.me/5592984794889?text=Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20Support."
        target="_blank"
        style={buttonPrimary}
      >
        Falar no WhatsApp
      </a>
    </div>
  </section>
</main>
```

);
}

const menuStyle = {
color: "#fff",
textDecoration: "none",
fontWeight: "bold",
};

const buttonPrimary = {
backgroundColor: "#00ff88",
color: "#000",
padding: "18px 35px",
borderRadius: "12px",
textDecoration: "none",
fontWeight: "bold",
fontSize: "18px",
};

==================================================
PÁGINA EMPRESA
app/empresa/page.tsx
====================

export default function Empresa() {
return ( <main style={mainStyle}> <img
     src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e"
     style={imageStyle}
   />

```
  <h1 style={titleStyle}>Sobre a Empresa</h1>

  <p style={textStyle}>
    A Support Energia Automação e Refrigeração foi fundada em 2024
    com base na crescente demanda do mercado por empresas qualificadas
    em geração de energia, automação industrial e refrigeração.
  </p>

  <p style={textStyle}>
    Seus fundadores possuem mais de 13 anos de experiência em
    grupos geradores Scania, Caterpillar, Perkins e Volvo,
    além de sistemas híbridos com BESS e energia solar.
  </p>
</main>
```

);
}

==================================================
PÁGINA SERVIÇOS
app/servicos/page.tsx
=====================

export default function Servicos() {
return ( <main style={mainStyle}> <img
     src="https://images.unsplash.com/photo-1497436072909-f5e4be8c11e2"
     style={imageStyle}
   />

```
  <h1 style={titleStyle}>Serviços Prestados</h1>

  <ul style={listStyle}>
    <li>Manutenção em grupos geradores</li>
    <li>Sistemas híbridos BESS</li>
    <li>Energia solar</li>
    <li>Automação industrial</li>
    <li>Refrigeração industrial</li>
    <li>Instalações elétricas</li>
  </ul>
</main>
```

);
}

==================================================
PÁGINA PLANOS
app/planos/page.tsx
===================

export default function Planos() {
return ( <main style={mainStyle}> <img
     src="https://images.unsplash.com/photo-1466611653911-95081537e5b7"
     style={imageStyle}
   />

```
  <h1 style={titleStyle}>Planos de Manutenção</h1>

  <ul style={listStyle}>
    <li>Plano Preventivo</li>
    <li>Plano Corretivo</li>
    <li>Atendimento Emergencial</li>
    <li>Monitoramento Remoto</li>
  </ul>
</main>
```

);
}

==================================================
PÁGINA CONTATO
app/contato/page.tsx
====================

export default function Contato() {
return ( <main style={mainStyle}> <img
     src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
     style={imageStyle}
   />

```
  <h1 style={titleStyle}>Fale Conosco</h1>

  <p style={textStyle}>
    WhatsApp: (92) 98479-4889
  </p>

  <p style={textStyle}>
    suportenergiarefrigeracao@gmail.com
  </p>

  <a
    href="https://wa.me/5592984794889?text=Gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20Support."
    target="_blank"
    style={buttonPrimary}
  >
    WhatsApp
  </a>
</main>
```

);
}

==================================================
ESTILOS PARA TODAS AS PÁGINAS
=============================

const mainStyle = {
minHeight: "100vh",
backgroundColor: "#050816",
color: "#fff",
padding: "60px",
fontFamily: "Arial",
};

const imageStyle = {
width: "100%",
borderRadius: "20px",
marginBottom: "40px",
};

const titleStyle = {
color: "#00ff88",
fontSize: "55px",
marginBottom: "30px",
};

const textStyle = {
fontSize: "22px",
lineHeight: "38px",
color: "#cccccc",
};

const listStyle = {
lineHeight: "40px",
fontSize: "22px",
color: "#cccccc",
};

const buttonPrimary = {
backgroundColor: "#00ff88",
color: "#000",
padding: "18px 35px",
borderRadius: "12px",
textDecoration: "none",
fontWeight: "bold",
fontSize: "18px",
display: "inline-block",
};
