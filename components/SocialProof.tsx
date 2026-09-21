import Link from 'next/link';

export default function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-altheaIvory px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="font-display text-5xl md:text-6xl text-altheaDeepOlive mb-8">
          Una comunidad que sigue creciendo.
        </h2>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-10">
          Descubre lo que nuestros estudiantes dicen sobre la experiencia Althea.
        </p>
        <a
          href="https://maps.app.goo.gl/cqSsnfFNqwHv1ojp7"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-altheaDeepOlive text-altheaDeepOlive px-8 py-4 rounded-xl font-sans text-xl hover:bg-altheaDeepOlive hover:text-altheaIvory transition-colors duration-300"
        >
          Ver reseñas en Google
        </a>
      </div>
    </section>
  );
}