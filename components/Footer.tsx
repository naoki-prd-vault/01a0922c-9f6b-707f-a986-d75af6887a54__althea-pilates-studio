import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-altheaDeepOlive py-12 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/althea-wordmark-ivory.png"
            alt="Althea Pilates Studio Logo"
            width={150}
            height={50}
            priority
          />
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          <Link href="#inicio" className="text-altheaIvory hover:text-altheaSage font-sans text-lg">
            Inicio
          </Link>
          <Link href="#estudio" className="text-altheaIvory hover:text-altheaSage font-sans text-lg">
            El estudio
          </Link>
          <Link href="#pilates" className="text-altheaIvory hover:text-altheaSage font-sans text-lg">
            Pilates
          </Link>
          <Link href="#horarios" className="text-altheaIvory hover:text-altheaSage font-sans text-lg">
            Horarios
          </Link>
          <Link href="#ubicacion" className="text-altheaIvory hover:text-altheaSage font-sans text-lg">
            Ubicación
          </Link>
          <Link href="#contacto" className="text-altheaIvory hover:text-altheaSage font-sans text-lg">
            Contacto
          </Link>
        </nav>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.instagram.com/altheapilatesstudio/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/instagram-icon-ivory.svg" // Placeholder for Instagram icon
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
          {/* Add other social media icons as needed */}
        </div>
        <p className="font-sans text-altheaIvory text-sm">
          © {currentYear} Althea Pilates Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}