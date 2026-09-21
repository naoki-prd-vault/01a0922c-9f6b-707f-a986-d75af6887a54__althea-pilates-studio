import Link from 'next/link';

export default function Location() {
  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-altheaIvory px-4">
      <div className="container mx-auto text-center">
        <h2 className="font-display text-5xl md:text-6xl text-altheaDeepOlive mb-8">
          Encuéntranos en Ciudad Quesada.
        </h2>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-10">
          Estamos ubicados en el corazón de Ciudad Quesada, San Carlos, en un espacio tranquilo y accesible para tu práctica de Pilates.
        </p>
        <div className="aspect-video w-full max-w-4xl mx-auto mb-10 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1430000000004!2d-84.43980000000001!3d10.320400000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa13b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sAlthea%20Pilates%20Studio!5e0!3m2!1sen!2scr!4v1678912345678!5m2!1sen!2scr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Althea Pilates Studio Location"
          ></iframe>
        </div>
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