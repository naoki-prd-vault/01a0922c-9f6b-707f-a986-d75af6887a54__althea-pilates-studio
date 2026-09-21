import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-altheaDeepOlive text-altheaIvory py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Image
            src="/althea-wordmark-ivory.png"
            alt="Althea Pilates Studio Logo"
            width={150}
            height={50}
            priority
          />
          <p className="font-sans text-sm text-altheaIvory opacity-80">
            &copy; {currentYear} Althea Pilates Studio. Todos los derechos reservados.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="font-display text-xl text-altheaIvory mb-2">Navegación</h3>
          <Link href="#inicio" className="font-sans text-base hover:text-altheaSage transition-colors duration-300">
            Inicio
          </Link>
          <Link href="#estudio" className="font-sans text-base hover:text-altheaSage transition-colors duration-300">
            El estudio
          </Link>
          <Link href="#pilates" className="font-sans text-base hover:text-altheaSage transition-colors duration-300">
            Pilates
          </Link>
          <Link href="#horarios" className="font-sans text-base hover:text-altheaSage transition-colors duration-300">
            Horarios
          </Link>
          <Link href="#ubicacion" className="font-sans text-base hover:text-altheaSage transition-colors duration-300">
            Ubicación
          </Link>
          <Link href="#contacto" className="font-sans text-base hover:text-altheaSage transition-colors duration-300">
            Contacto
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="font-display text-xl text-altheaIvory mb-2">Contacto</h3>
          <p className="font-sans text-base">+506 8525 8080</p>
          <p className="font-sans text-base">info@altheapilates.com</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.instagram.com/altheapilatesstudio/" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram-icon.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://wa.me/+50685258080" target="_blank" rel="noopener noreferrer">
              <Image src="/whatsapp-icon.svg" alt="WhatsApp" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}