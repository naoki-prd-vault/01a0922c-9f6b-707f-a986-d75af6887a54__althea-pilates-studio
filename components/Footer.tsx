import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-altheaDeepOlive py-12 md:py-16 px-4">
      <div className="container mx-auto text-altheaIvory">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 md:mb-12">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <Link href="/">
              <Image
                src="/althea-wordmark-ivory.png"
                alt="Althea Pilates Studio Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
            <p className="font-sans text-sm mt-4 text-center md:text-left">
              Movimiento con intención.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h3 className="font-display text-xl mb-4">Navegación</h3>
            <ul className="font-sans text-base space-y-2 text-center md:text-left">
              <li><Link href="#inicio" className="hover:text-altheaSage">Inicio</Link></li>
              <li><Link href="#estudio" className="hover:text-altheaSage">El estudio</Link></li>
              <li><Link href="#pilates" className="hover:text-altheaSage">Pilates</Link></li>
              <li><Link href="#horarios" className="hover:text-altheaSage">Horarios</Link></li>
              <li><Link href="#ubicacion" className="hover:text-altheaSage">Ubicación</Link></li>
              <li><Link href="#contacto" className="hover:text-altheaSage">Contacto</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-display text-xl mb-4">Contacto</h3>
            <ul className="font-sans text-base space-y-2 text-center md:text-left">
              <li><a href="tel:+50685258080" className="hover:text-altheaSage">+506 8525 8080</a></li>
              <li><a href="mailto:info@altheapilates.com" className="hover:text-altheaSage">info@altheapilates.com</a></li>
              <li>
                <a
                  href="https://www.instagram.com/altheapilatesstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-altheaSage"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/cqSsnfFNqwHv1ojp7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-altheaSage"
                >
                  Ubicación en Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-altheaSage pt-8 text-center">
          <p className="font-sans text-sm">
            &copy; {currentYear} Althea Pilates Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}