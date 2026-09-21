import Link from 'next/link';

export default function Location() {
  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-altheaIvory px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-display text-5xl md:text-6xl text-altheaDeepOlive mb-8">
          Encuéntranos en Ciudad Quesada.
        </h2>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-10">
          Estamos ubicados en el corazón de Ciudad Quesada, San Carlos, en un espacio tranquilo y accesible para tu práctica de Pilates.
        </p>
        <div className="aspect-video w-full max-w-2xl mx-auto mb-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4323675000004!2d-84.4287893!3d10.320499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0614000000001%3A0x1d4e1e0a0b0c0d0e!2sAlthea%20Pilates%20Studio!5e0!3m2!1sen!2scr!4v1705537877000!5m2!1sen!2scr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Althea Pilates Studio"
          ></iframe>
        </div>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-8">
          Visítanos en:
          <br />
          <span className="font-semibold">200m Sur del Parque Central, Ciudad Quesada, San Carlos.</span>
        </p>
        <a
          href="https://maps.app.goo.gl/cqSsnfFNqwHv1ojp7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-altheaDeepOlive text-altheaIvory px-8 py-4 rounded-xl font-sans text-xl hover:bg-altheaSage transition-colors duration-300"
        >
          Abrir en Google Maps
        </a>
      </div>
    </section>
  );
}