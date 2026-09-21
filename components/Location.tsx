import Link from 'next/link';

export default function Location() {
  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-altheaIvory px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-5xl md:text-6xl text-center text-altheaDeepOlive mb-12">
          Encuéntranos
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-6">
              Estamos ubicados en el corazón de Ciudad Quesada, un espacio tranquilo y accesible para tu práctica de Pilates.
            </p>
            <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-6">
              <span className="font-semibold">Dirección:</span> 200 metros este y 25 metros norte del Parque Central de Ciudad Quesada, San Carlos, Costa Rica.
            </p>
            <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-6">
              <span className="font-semibold">Horario de atención:</span> Lunes a Viernes de 6:00 AM a 8:00 PM, Sábados de 8:00 AM a 12:00 PM.
            </p>
            <a
              href="https://maps.app.goo.gl/cqSsnfFNqwHv1ojp7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-altheaDeepOlive text-altheaIvory px-8 py-4 rounded-xl font-sans text-xl hover:bg-altheaSage transition-colors duration-300"
            >
              Abrir en Google Maps
            </a>
          </div>
          <div className="md:w-1/2 w-full h-80 md:h-96 bg-gray-200 rounded-xl overflow-hidden shadow-md">
            {/* Placeholder for Google Maps embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.802871676646!2d-84.4293883257321!3d10.32049966701804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0670000000001%3A0x67890abcdef12345!2sAlthea%20Pilates%20Studio!5e0!3m2!1sen!2scr!4v1701800000000!5m2!1sen!2scr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Althea Pilates Studio Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}