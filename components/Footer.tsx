import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-altheaDeepOlive text-altheaIvory py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <Link href="/">
            <Image
              src="/althea-wordmark-ivory.png"
              alt="Althea Pilates Studio Logo"
              width={150}
              height={50}
              priority
            />
          </Link>
          <p className="font-sans text-sm mt-4">
            © {new Date().getFullYear()} Althea Pilates Studio. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="text-center md:text-left">
            <p className="font-sans text-lg mb-2">Contáctanos:</p>
            <p className="font-sans text-md">
              <a href="tel:+50685258080" className="hover:text-altheaSage transition-colors duration-300">
                +506 8525 8080
              </a>
            </p>
            <p className="font-sans text-md">
              <a href="mailto:info@altheapilates.com" className="hover:text-altheaSage transition-colors duration-300">
                info@altheapilates.com
              </a>
            </p>
          </div>

          <div className="text-center md:text-left">
            <p className="font-sans text-lg mb-2">Síguenos:</p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/altheapilatesstudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-altheaSage transition-colors duration-300"
              >
                Instagram
              </a>
              {/* Add other social media links as needed */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}