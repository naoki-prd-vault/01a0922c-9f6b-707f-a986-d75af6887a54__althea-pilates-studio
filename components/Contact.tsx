import Link from 'next/link';

export default function Contact() {
  const whatsappMessage = encodeURIComponent("Hola Althea, quisiera información sobre las clases de Pilates.");
  const whatsappLink = `https://wa.me/+50685258080?text=${whatsappMessage}`;

  return (
    <section id="contacto" className="py-16 md:py-24 bg-altheaIvory px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-5xl md:text-6xl text-altheaDeepOlive mb-8">
          Contacto
        </h2>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-4">
          Althea Pilates Studio
        </p>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-2">
          WhatsApp / teléfono: <a href="tel:+50685258080" className="underline">+506 8525-8080</a>
        </p>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-2">
          Instagram: <a href="https://www.instagram.com/altheapilatesstudio/" target="_blank" rel="noopener noreferrer" className="underline">@altheapilatesstudio</a>
        </p>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-2">
          Reservas: <a href="https://altheastudio.wstudio.app/#/onboarding" target="_blank" rel="noopener noreferrer" className="underline">altheastudio.wstudio.app</a>
        </p>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-8">
          Google Maps: <a href="https://maps.app.goo.gl/cqSsnfFNqwHv1ojp7" target="_blank" rel="noopener noreferrer" className="underline">Ver ubicación</a>
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-10">
          <a
            href="https://altheastudio.wstudio.app/#/onboarding"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-altheaDeepOlive text-altheaIvory px-8 py-4 rounded-xl font-sans text-xl hover:bg-altheaSage transition-colors duration-300 w-full sm:w-auto"
          >
            Reservar una clase
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-altheaDeepOlive text-altheaDeepOlive px-8 py-4 rounded-xl font-sans text-xl hover:bg-altheaDeepOlive hover:text-altheaIvory transition-colors duration-300 w-full sm:w-auto"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}