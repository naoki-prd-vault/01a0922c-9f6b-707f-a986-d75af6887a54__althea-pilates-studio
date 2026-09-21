import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-altheaIvory">
      <Image
        src="/hero-background.jpg" // Placeholder for a powerful editorial image
        alt="Althea Pilates Studio - Movement with intention"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0 opacity-70"
      />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-display text-6xl md:text-8xl text-altheaDeepOlive leading-tight mb-4 animate-fade-in-up">
          Movimiento con intención.
        </h1>
        <p className="font-sans text-xl md:text-2xl text-altheaDeepOlive mb-8 animate-fade-in-up animation-delay-200">
          Pilates clásico y contemporáneo en Ciudad Quesada.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="https://altheastudio.wstudio.app/#/onboarding"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-altheaDeepOlive text-altheaIvory px-8 py-4 rounded-xl font-sans text-xl hover:bg-altheaSage transition-colors duration-300 animate-fade-in-up animation-delay-400"
          >
            Reservar clase
          </a>
          <Link href="#estudio">
            <span className="text-altheaDeepOlive border border-altheaDeepOlive px-8 py-4 rounded-xl font-sans text-xl hover:bg-altheaDeepOlive hover:text-altheaIvory transition-colors duration-300 animate-fade-in-up animation-delay-600 cursor-pointer">
              Conocer Althea
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}