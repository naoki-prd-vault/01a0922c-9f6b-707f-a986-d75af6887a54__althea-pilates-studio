import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-altheaIvory py-4 px-6 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/althea-wordmark-green.png"
            alt="Althea Pilates Studio Logo"
            width={120}
            height={40}
            priority
          />
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="#inicio" className="text-altheaDeepOlive hover:text-altheaSage font-sans text-lg">
            Inicio
          </Link>
          <Link href="#estudio" className="text-altheaDeepOlive hover:text-altheaSage font-sans text-lg">
            El estudio
          </Link>
          <Link href="#pilates" className="text-altheaDeepOlive hover:text-altheaSage font-sans text-lg">
            Pilates
          </Link>
          <Link href="#horarios" className="text-altheaDeepOlive hover:text-altheaSage font-sans text-lg">
            Horarios
          </Link>
          <Link href="#ubicacion" className="text-altheaDeepOlive hover:text-altheaSage font-sans text-lg">
            Ubicación
          </Link>
          <Link href="#contacto" className="text-altheaDeepOlive hover:text-altheaSage font-sans text-lg">
            Contacto
          </Link>
          <a
            href="https://altheastudio.wstudio.app/#/onboarding"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-altheaDeepOlive text-altheaIvory px-6 py-3 rounded-xl font-sans text-lg hover:bg-altheaSage transition-colors duration-300"
          >
            Reservar clase
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-altheaDeepOlive focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-altheaIvory shadow-lg py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="#inicio" className="text-altheaDeepOlive hover:text-altheaSage font-sans text-lg" onClick={() => setIsOpen(false)}>
              Inicio
            </Link>
            <Link href="#estudio" className="text-altheaDeepOlive hover:text-altheaSage font-sans text-lg" onClick={() => setIsOpen(false)}>
              El estudio
            </Link>
            <Link href="#pilates" className="text-altheaDeepOlive hover:text-altheaSage font-sans text-lg" onClick={() => setIsOpen(false)}>
              Pilates
            </Link>
            <Link href="#horarios" className="text-altheaDeepOlive hover:text-altheaSage font-sans text-lg" onClick={() => setIsOpen(false)}>
              Horarios
            </Link>
            <Link href="#ubicacion" className="text-altheaDeepOlive hover:text-altheaSage font-sans text-lg" onClick={() => setIsOpen(false)}>
              Ubicación
            </Link>
            <Link href="#contacto" className="text-altheaDeepOlive hover:text-altheaSage font-sans text-lg" onClick={() => setIsOpen(false)}>
              Contacto
            </Link>
            <a
              href="https://altheastudio.wstudio.app/#/onboarding"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-altheaDeepOlive text-altheaIvory px-6 py-3 rounded-xl font-sans text-lg hover:bg-altheaSage transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Reservar clase
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}