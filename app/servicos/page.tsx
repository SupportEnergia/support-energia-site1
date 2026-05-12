import Image from "next/image";

export default function Servicos() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">

        <Image
          src="/images/principal.jpeg"
          alt="Support Energia"
          fill
          className="object-cover opacity-40"
        />

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl font-bold text-yellow-400 drop-shadow-[0_0_20px_gold]">
            SERVIÇOS
          </h1>

          <p className="mt-6 text-2xl text-cyan-300">
            Energia • Automação • Refrigeração
          </p>
        </div>
      </section>

      {/* GRUPO GERADOR */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-5xl font-bold text-yellow-400 mb-8">
            Grupo Gerador
          </h2>

          <p className="text-gray-300 text-lg leading-8">
            Serviços especializados em instalação,
            manutenção preventiva e corretiva,
            operação assistida e automação de grupos
            geradores diesel e gás.
          </p>

          <ul className="mt-8 space-y-4 text-gray-300">
            <li>✔ Instalação de grupos geradores</li>
            <li>✔ Instalação de QTA / ATS</li>
            <li>✔ Parametrização de controladores</li>
            <li>✔ Operação em paralelo</li>
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
            <h2 className="text-5xl font-bold text-cyan-400 mb-8">
              Refrigeração
            </h2>

            <p className="text-gray-300 text-lg leading-8">
              Instalação e manutenção de sistemas de
              climatização residencial, comercial e industrial.
            </p>

            <ul className="mt-8 space-y-4 text-gray-300">
              <li>✔ Sistemas Split e VRF</li>
              <li>✔ Chiller Industrial</li>
              <li>✔ Câmaras frigoríficas</li>
              <li>✔ Higienização completa</li>
              <li>✔ Correção de vazamentos</li>
            </ul>
          </div>

        </div>
      </section>

      {/* AUTOMAÇÃO */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-5xl font-bold text-green-400 mb-8">
            Automação Industrial
          </h2>

          <p className="text-gray-300 text-lg leading-8">
            Soluções completas em automação industrial,
            sistemas elétricos, telemetria e supervisão.
          </p>

          <ul className="mt-8 space-y-4 text-gray-300">
            <li>✔ Programação CLP</li>
            <li>✔ Sistemas SCADA</li>
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
              alt="Sistema BESS"
              width={700}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-5xl font-bold text-purple-400 mb-8">
              Sistemas BESS
            </h2>

            <p className="text-gray-300 text-lg leading-8">
              Soluções em armazenamento de energia,
              sistemas híbridos e integração com energia solar.
            </p>

            <ul className="mt-8 space-y-4 text-gray-300">
              <li>✔ Banco de baterias</li>
              <li>✔ Sistemas híbridos</li>
              <li>✔ Energia solar</li>
              <li>✔ Eficiência energética</li>
              <li>✔ Monitoramento inteligente</li>
            </ul>
          </div>

        </div>
      </section>

    </main>
  );
}