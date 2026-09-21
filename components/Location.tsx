import Link from 'next/link';

export default function Location() {
  return (
    <section id="ubicacion" className="py-16 md:py-24 bg-altheaIvory px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-display text-5xl md:text-6xl text-altheaDeepOlive mb-8">
          Ubicación
        </h2>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-4">
          Althea Pilates Studio
        </p>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-4">
          Ciudad Quesada, San Carlos, Alajuela, Costa Rica
        </p>
        <p className="font-sans text-md text-altheaDeepOlive leading-relaxed mb-8">
          Aproximadamente 300 m norte de Gasolinera Delta, Urbanización Rodríguez, cerca del Centro Deportivo / Gimnasio Eligon.
        </p>
        <a
          href="https://maps.app.goo.gl/cqSsnfFNqwHv1ojp7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-altheaDeepOlive text-altheaIvory px-8 py-4 rounded-xl font-sans text-xl hover:bg-altheaSage transition-colors duration-300 mb-10 inline-block"
        >
          Cómo llegar
        </a>
        {/* Placeholder for embedded map */}
        <div className="mt-10 w-full h-96 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center text-altheaDeepOlive font-sans text-lg">
          <p>Mapa de Google Maps aquí</p>
        </div>
      </div>
    </section>
  );
}