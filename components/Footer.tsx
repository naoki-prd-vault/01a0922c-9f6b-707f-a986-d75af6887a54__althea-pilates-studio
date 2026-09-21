import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
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
            />
          </Link>
          <p className="font-sans text-sm text-center md:text-left">
            © {new Date().getFullYear()} Althea Pilates Studio. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
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

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="font-display text-xl mb-2">Contacto</h3>
          <p className="font-sans text-center md:text-left">
            Tel: +506 8525 8080
          </p>
          <p className="font-sans text-center md:text-left">
            Email: info@altheapilates.com
          </p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/altheapilatesstudio/" target="_blank" rel="noopener noreferrer" className="hover:text-altheaSage transition-colors duration-300">
              {/* Placeholder for Instagram Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://wa.me/+50685258080" target="_blank" rel="noopener noreferrer" className="hover:text-altheaSage transition-colors duration-300">
              {/* Placeholder for WhatsApp Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp"><path d="M21 15V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/><path d="m12 15-3-3 3-3"/><path d="M16 15l-3-3 3-3"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}