import Image from "next/image";
import { Marquee } from "../components/ui/marquee";
import entel from "../public/images/clientes/entel.png";
import crianza from "../public/images/clientes/crianza.png";
import kino from "../public/images/clientes/kino.png";
import metro from "../public/images/clientes/metro.png";
import natura from "../public/images/clientes/natura.png";
import sap from "../public/images/clientes/sap.png";

const clientesM = [
  { image: entel, name: "Entel" },
  { image: crianza, name: "Crianza" },
  { image: kino, name: "Kino" },
  { image: metro, name: "Metro" },
  { image: natura, name: "Natura" },
  { image: sap, name: "SAP" },
];

export default function Clients({ settings, clients }) {
  return (
    <section className="bg-white py-10 border-y border-gray-100">
      <p className="text-center text-[18px] font-medium mb-8 px-4" style={{ color: "#2F4257" }}>
        Creo experiencias que cuentan historias y se convierten en recuerdos inolvidables
      </p>

      <div className="relative flex w-full overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s]">
          {clientesM.map((client, i) => (
            <div key={i} className="mx-8 flex items-center justify-center">
              <Image
                src={client.image}
                alt={client.name}
                className="object-contain h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </Marquee>

        {/* Gradientes en los bordes para efecto fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}