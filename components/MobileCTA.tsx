import Link from 'next/link';

export default function MobileCTA() {
  const whatsappMessage = encodeURIComponent("Hola Althea, quisiera información sobre las clases de Pilates.");
  const whatsappLink = `https://wa.me/+50685258080?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-altheaIvory border-t border-altheaSage p-4 shadow-lg">
      <div className="flex justify-around items-center">
        <a
          href="https://altheastudio.wstudio.app/#/onboarding"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-altheaDeepOlive text-altheaIvory px-5 py-3 rounded-xl font-sans text-lg text-center flex-1 mx-1 hover:bg-altheaSage transition-colors duration-300"
        >
          Reservar
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-altheaDeepOlive text-altheaDeepOlive px-5 py-3 rounded-xl font-sans text-lg text-center flex-1 mx-1 hover:bg-altheaDeepOlive hover:text-altheaIvory transition-colors duration-300"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}