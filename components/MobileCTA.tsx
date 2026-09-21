import Link from 'next/link';

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-altheaDeepOlive text-altheaIvory p-4 flex justify-around items-center shadow-lg md:hidden z-50">
      <Link href="#horarios" className="flex flex-col items-center text-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mb-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12v-.008zM12 18h.008v.008H12v-.008z"
          />
        </svg>
        Horarios
      </Link>
      <a
        href="https://altheastudio.wstudio.app/#/onboarding"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-altheaSage text-altheaIvory px-4 py-2 rounded-full text-sm font-bold"
      >
        Reservar
      </a>
      <a href="tel:+50685258080" className="flex flex-col items-center text-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mb-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.18.44l-1.417 1.904c-.822.11-1.638.198-2.48.293-1.3.147-2.6-.34-3.522-1.242a10.923 10.923 0 01-1.85-2.162c-.377-.53-.54-1.133-.474-1.741.065-.608.342-1.193.812-1.621l1.417-1.904c.278-.386.31-.966.07-1.418l-1.106-4.423a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
        Llamar
      </a>
    </div>
  );
}