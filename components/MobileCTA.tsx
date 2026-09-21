import Link from 'next/link';

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-altheaDeepOlive p-4 md:hidden z-50 shadow-lg">
      <div className="container mx-auto flex justify-around items-center">
        <a
          href="https://altheastudio.wstudio.app/#/onboarding"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-altheaSage text-altheaIvory px-5 py-3 rounded-xl font-sans text-lg text-center flex-1 mx-2 hover:bg-altheaIvory hover:text-altheaDeepOlive transition-colors duration-300"
        >
          Reservar Clase
        </a>
        <a
          href="tel:+50685258080"
          className="bg-altheaSage text-altheaIvory px-5 py-3 rounded-xl font-sans text-lg text-center flex-1 mx-2 hover:bg-altheaIvory hover:text-altheaDeepOlive transition-colors duration-300"
        >
          Llamar
        </a>
      </div>
    </div>
  );
}