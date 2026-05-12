import Image from "next/image";

export default function Servicos() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center">
        <Image
          src="/images/principal.jpeg"
          alt="Serviços Support"
          fill
          className="object-cover opacity-40"
        />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl font-bold text-yellow-400 drop-shadow-[0_0_20px_gold]">
            SERVIÇOS
          </h1>

          <p className="mt-6 text-2xl text-cyan-300">
            Energia • Automação • Refrigeração
          </p>
        </div>
      </section>

      {/* GRUPOS GERADORES */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-5xl font-bold text-yellow-400 mb-6">
            Grupo Gerador
          </h2>

          <p className="text-lg leading-8 text-gray-300">
            Instalação, manutenção preventiva, corretiva,
            operação assistida e automação de grupos geradores
            diesel e gás.
          </p>

          <ul className="mt-8 space-y-3 text-gray-300">
            <li>✔ Instalação de QTA/ATS</li>
            <li>✔ Parametrização de controladores</li>
            <li>✔ Operação em paralelo</li>
            <li>✔ Start-up e comissionamento</li>
            <li>✔ Atendimento emergencial 24h</li>
          </ul>
        </div>

        <div className="rounded-3xl overflow-hidden border-4 border-yellow-400 shadow-[0_0_30px_gold]">
          <Image
            src="/images/motor.jpeg"
            alt="Grupo Gerador"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* REFRIGERAÇÃO */}
      <section className="bg-zinc-950 py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="rounded-3xl overflow-hidden border-4 border-cyan-400 shadow-[0_0_30px_cyan]">
            <Image
              src="/images/servicos.jpeg"
              alt="Refrigeração"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-5xl font-bold text-cyan-400 mb-6">
              Refrigeração
            </h2>

            <p className="text-lg leading-8 text-gray-300">
              Instalação e manutenção de sistemas de climatização
              residencial, comercial e industrial.
            </p>

            <ul className="mt-8 space-y-3 text-gray-300">
              <li>✔ Sistemas Split e VRF</li>
              <li>✔ Câmaras frigoríficas</li>
              <li>✔ Chiller industrial</li>
              <li>✔ Higienização completa</li>
              <li>✔ Correção de vazamentos</li>
            </ul>
          </div>

        </div>
      </section>

      {/* AUTOMAÇÃO */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-5xl font-bold text-green-400 mb-6">
            Automação Industrial
          </h2>

          <p className="text-lg leading-8 text-gray-300">
            Soluções modernas em automação industrial,
            sistemas elétricos, telemetria e supervisão.
          </p>

          <ul className="mt-8 space-y-3 text-gray-300">
            <li>✔ Programação CLP</li>
            <li>✔ Sistemas supervisórios SCADA</li>
            <li>✔ Monitoramento remoto</li>
            <li>✔ Inversores de frequência</li>
            <li>✔ Integração industrial</li>
          </ul>
        </div>

        <div className="rounded-3xl overflow-hidden border-4 border-green-400 shadow-[0_0_30px_lime]">
          <Image
            src="/images/automacaojpeg.jpeg"
            alt="Automação"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* BESS */}
      <section className="bg-zinc-950 py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="rounded-3xl overflow-hidden border-4 border-purple-400 shadow-[0_0_30px_purple]">
            <Image
              src="/images/bess.jpeg"
              alt="BESS"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-5xl font-bold text-purple-400 mb-6">
              Sistemas BESS
            </h2>

            <p className="text-lg leading-8 text-gray-300">
              Soluções em armazenamento de energia,
              sistemas híbridos e integração com energia solar.
            </p>

            <ul className="mt-8 space-y-3 text-gray-300">
              <li>✔ Banco de baterias</li>
              <li>✔ Sistemas híbridos</li>
              <li>✔ Eficiência energética</li>
              <li>✔ Energia solar</li>
              <li>✔ Monitoramento inteligente</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}