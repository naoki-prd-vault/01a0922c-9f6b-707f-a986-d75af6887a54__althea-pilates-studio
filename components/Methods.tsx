import Image from 'next/image';

interface MethodCardProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
}

const MethodCard: React.FC<MethodCardProps> = ({ title, description, imageSrc, altText }) => {
  return (
    <div className="bg-altheaIvory rounded-xl shadow-md overflow-hidden group">
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={imageSrc}
          alt={altText}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-3xl text-altheaDeepOlive mb-3">{title}</h3>
        <p className="font-sans text-lg text-altheaDeepOlive leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function Methods() {
  return (
    <section id="pilates" className="py-16 md:py-24 bg-altheaIvory px-4">
      <div className="container mx-auto">
        <h2 className="font-display text-5xl md:text-6xl text-center text-altheaDeepOlive mb-12">
          Nuestros Métodos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MethodCard
            title="Reformer"
            description="Movimiento asistido por resistencia para explorar fuerza, control y precisión."
            imageSrc="/reformer.jpg"
            altText="Pilates Reformer"
          />
          <MethodCard
            title="Mat"
            description="El trabajo esencial de Pilates a través del control corporal y el movimiento consciente."
            imageSrc="/mat.jpg"
            altText="Pilates Mat"
          />
          <MethodCard
            title="Wunda"
            description="Una práctica compacta y desafiante que amplía las posibilidades del método Pilates."
            imageSrc="/wunda.jpg"
            altText="Pilates Wunda Chair"
          />
        </div>
      </div>
    </section>
  );
}