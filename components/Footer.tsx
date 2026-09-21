import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-altheaDeepOlive text-altheaIvory py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Link href="/">
            <Image
              src="/althea-wordmark-ivory.png"
              alt="Althea Pilates Studio Logo"
              width={150}
              height={50}
              priority
            />
          </Link>
          <p className="font-sans text-sm text-center md:text-left">
            Movimiento con intención.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="font-display text-xl mb-2">Navegación</h3>
          <Link href="#inicio" className="font-sans hover:text-altheaSage transition-colors duration-300">
            Inicio
          </Link>
          <Link href="#estudio" className="font-sans hover:text-altheaSage transition-colors duration-300">
            El estudio
          </Link>
          <Link href="#pilates" className="font-sans hover:text-altheaSage transition-colors duration-300">
            Pilates
          </Link>
          <Link href="#horarios" className="font-sans hover:text-altheaSage transition-colors duration-300">
            Horarios
          </Link>
          <Link href="#ubicacion" className="font-sans hover:text-altheaSage transition-colors duration-300">
            Ubicación
          </Link>
          <Link href="#contacto" className="font-sans hover:text-altheaSage transition-colors duration-300">
            Contacto
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="font-display text-xl mb-2">Contacto</h3>
          <p className="font-sans">Ciudad Quesada, San Carlos</p>
          <p className="font-sans">info@altheapilates.com</p>
          <p className="font-sans">+506 8525 8080</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.instagram.com/altheapilatesstudio/" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram-icon.svg" alt="Instagram" width={24} height={24} />
            </a>
            {/* Add other social media icons here if needed */}
          </div>
        </div>
      </div>
      <div className="border-t border-altheaIvory mt-8 pt-8 text-center">
        <p className="font-sans text-sm">&copy; {currentYear} Althea Pilates Studio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}