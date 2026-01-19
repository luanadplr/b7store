import Image from "next/image";

export function Footer() {
  return (
    <footer>
      {/* Newsletter  */}
      <div className="bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-6 py-16 md:flex-row md:gap-10">
          {/* Header do Newsletter  */}
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-0">
            <div className="md:pr-6">
              <Image
                src={"/assets/ui/mail-send-line.png"}
                alt="E-mail"
                width={40}
                height={40}
              />
            </div>
            <div className="text-center md:text-justify">
              <h2 className="text-lg font-bold">
                Fique por dentro das promoções!
              </h2>
              <p className="text-gray-500">
                Registre seu e-mail e seja o primeiro a saber.
              </p>
            </div>
          </div>
          {/* Campo do E-mail  */}
          <div className="flex w-full flex-1 flex-col justify-end gap-2 md:flex-row">
            <input
              type="text"
              placeholder="Qual seu E-mail?"
              className="flex-3 rounded-sm border border-gray-200 p-3 text-sm"
            />
            <button className="flex-1 rounded-sm bg-blue-700 p-3 text-white">
              Enviar
            </button>
          </div>
        </div>
      </div>
      {/* Rodapé com links  */}
      <div className="bg-black">...</div>
    </footer>
  );
}
