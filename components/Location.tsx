import Image from 'next/image';
import Link from 'next/link';

export default function Location() {
  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-altheaIvory px-4">
      <div className="container mx-auto text-center">
        <h2 className="font-display text-5xl md:text-6xl text-altheaDeepOlive mb-8">
          Encuéntranos
        </h2>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-10">
          Estamos ubicados en Ciudad Quesada, San Carlos, Costa Rica.
        </p>
        <div className="relative w-full h-96 mb-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.124574930604!2d-84.4285149257635!3d10.39958316641666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa153215689139b%3A0x170b047599023719!2sAlthea%20Pilates%20Studio!5e0!3m2!1sen!2ses!4v1701804790074!5m2!1sen!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Althea Pilates Studio Location"
          ></iframe>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6">
          <a
            href="https://waze.com/ul/hd1gb11932"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-altheaDeepOlive text-altheaIvory px-8 py-4 rounded-xl font-sans text-xl hover:bg-altheaSage transition-colors duration-300 w-full sm:w-auto"
          >
            Abrir en Waze
          </a>
          <a
            href="https://maps.app.goo.gl/cqSsnfFNqwHv1ojp7"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-altheaDeepOlive text-altheaDeepOlive px-8 py-4 rounded-xl font-sans text-xl hover:bg-altheaDeepOlive hover:text-altheaIvory transition-colors duration-300 w-full sm:w-auto"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}