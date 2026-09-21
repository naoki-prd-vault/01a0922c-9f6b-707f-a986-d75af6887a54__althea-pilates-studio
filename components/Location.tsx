import Link from 'next/link';

export default function Location() {
  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-altheaIvory px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-display text-5xl md:text-6xl text-altheaDeepOlive mb-8">
          Encuéntranos en Ciudad Quesada.
        </h2>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-10">
          Estamos ubicados en el corazón de Ciudad Quesada, San Carlos, listos para recibirte en un espacio de bienestar y movimiento.
        </p>
        <div className="aspect-w-16 aspect-h-9 mb-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.226002700346!2d-84.4287848259461!3d10.32049616806798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa061245648873f%3A0x280e301289196b06!2sAlthea%20Pilates%20Studio!5e0!3m2!1sen!2scr!4v1701977797453!5m2!1sen!2scr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Althea Pilates Studio Location"
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
        <a
          href="https://maps.app.goo.gl/cqSsnfFNqwHv1ojp7"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-altheaDeepOlive text-altheaDeepOlive px-8 py-4 rounded-xl font-sans text-xl hover:bg-altheaDeepOlive hover:text-altheaIvory transition-colors duration-300"
        >
          Abrir en Google Maps
        </a>
      </div>
    </section>
  );
}