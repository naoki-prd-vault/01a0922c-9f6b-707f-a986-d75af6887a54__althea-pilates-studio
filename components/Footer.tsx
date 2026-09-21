import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-altheaDeepOlive text-altheaIvory py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/althea-wordmark-ivory.png"
            alt="Althea Pilates Studio Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <p className="font-sans text-lg mb-2">Althea Pilates Studio</p>
          <p className="font-sans text-lg">Ciudad Quesada, Costa Rica</p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <Link href="https://altheastudio.wstudio.app/#/onboarding" target="_blank" rel="noopener noreferrer" className="font-sans text-lg hover:text-altheaSage">
            Reservar
          </Link>
          <Link href="https://www.instagram.com/altheapilatesstudio/" target="_blank" rel="noopener noreferrer" className="font-sans text-lg hover:text-altheaSage">
            Instagram
          </Link>
          <Link href="https://wa.me/+50685258080" target="_blank" rel="noopener noreferrer" className="font-sans text-lg hover:text-altheaSage">
            WhatsApp
          </Link>
          <Link href="https://maps.app.goo.gl/cqSsnfFNqwHv1ojp7" target="_blank" rel="noopener noreferrer" className="font-sans text-lg hover:text-altheaSage">
            Ubicación
          </Link>
        </div>
      </div>
      <div className="container mx-auto text-center mt-10 border-t border-altheaSage pt-8">
        <p className="font-sans text-sm text-altheaSage">
          &copy; {currentYear} Althea Pilates Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}