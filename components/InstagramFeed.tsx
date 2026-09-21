import Image from 'next/image';
import Link from 'next/link';

export default function InstagramFeed() {
  // Placeholder images for the Instagram feed
  const instagramPosts = [
    { id: 1, src: '/instagram-1.jpg', alt: 'Pilates pose on reformer' },
    { id: 2, src: '/instagram-2.jpg', alt: 'Pilates studio interior' },
    { id: 3, src: '/instagram-3.jpg', alt: 'Pilates mat class' },
    { id: 4, src: '/instagram-4.jpg', alt: 'Pilates wunda chair exercise' },
    { id: 5, src: '/instagram-5.jpg', alt: 'Pilates instructor assisting student' },
    { id: 6, src: '/instagram-6.jpg', alt: 'Pilates equipment detail' },
  ];

  return (
    <section className="py-16 md:py-24 bg-altheaIvory px-4">
      <div className="container mx-auto text-center">
        <h2 className="font-display text-5xl md:text-6xl text-altheaDeepOlive mb-8">
          Síguenos en movimiento
        </h2>
        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive leading-relaxed mb-10">
          @altheapilatesstudio
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {instagramPosts.map((post) => (
            <div key={post.id} className="relative w-full h-48 overflow-hidden rounded-lg shadow-md group">
              <Image
                src={post.src}
                alt={post.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <a
          href="https://www.instagram.com/altheapilatesstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-altheaDeepOlive text-altheaDeepOlive px-8 py-4 rounded-xl font-sans text-xl hover:bg-altheaDeepOlive hover:text-altheaIvory transition-colors duration-300"
        >
          Ver Instagram
        </a>
      </div>
    </section>
  );
}