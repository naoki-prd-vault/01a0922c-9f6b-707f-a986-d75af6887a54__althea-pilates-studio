import Link from 'next/link';

export default function Contact() {
  const whatsappMessage = encodeURIComponent("Hola Althea, quisiera información sobre las clases de Pilates.");
  const whatsappLink = `https://wa.me/+50685258080?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-16 md:py-24 bg-altheaIvory px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-5xl md:text-6xl text-altheaDeepOlive mb-8">
          ¿Preguntas? Contáctanos.
        </h2>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-10">
          Estamos aquí para ayudarte a iniciar o continuar tu viaje en Pilates.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6">
          <a
            href="mailto:info@altheapilates.com"
            className="bg-altheaDeepOlive text-altheaIvory px-10 py-5 rounded-xl font-sans text-xl sm:text-2xl hover:bg-altheaSage transition-colors duration-300 w-full sm:w-auto"
          >
            Enviar un correo
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-altheaDeepOlive text-altheaDeepOlive px-10 py-5 rounded-xl font-sans text-xl sm:text-2xl hover:bg-altheaDeepOlive hover:text-altheaIvory transition-colors duration-300 w-full sm:w-auto"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}