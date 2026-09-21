import Link from 'next/link';

const scheduleData = {
  LUNES: ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'],
  MARTES: ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'],
  MIÉRCOLES: ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'],
  JUEVES: ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM'],
  VIERNES: ['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '04:00 PM', '05:00 PM', '06:00 PM'],
  SÁBADO: ['08:00 AM', '09:00 AM'],
};

export default function Schedule() {
  return (
    <section id="horarios" className="py-16 md:py-24 bg-altheaIvory px-4">
      <div className="container mx-auto">
        <h2 className="font-display text-5xl md:text-6xl text-center text-altheaDeepOlive mb-12">
          Horarios
        </h2>
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {Object.entries(scheduleData).map(([day, times]) => (
            <div key={day} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-sans text-xl font-semibold text-altheaDeepOlive mb-4">{day}</h3>
              <ul className="space-y-2">
                {times.map((time, index) => (
                  <li key={index} className="font-sans text-altheaDeepOlive text-lg">{time}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4 mb-12">
          {Object.entries(scheduleData).map(([day, times]) => (
            <details key={day} className="bg-white rounded-xl shadow-md overflow-hidden">
              <summary className="font-sans text-xl font-semibold text-altheaDeepOlive p-4 cursor-pointer focus:outline-none">
                {day}
              </summary>
              <div className="p-4 border-t border-altheaIvory">
                <ul className="space-y-2">
                  {times.map((time, index) => (
                    <li key={index} className="font-sans text-altheaDeepOlive text-lg">{time}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>

        <p className="font-sans text-lg md:text-xl text-altheaDeepOlive text-center mb-8">
          Consulta disponibilidad y reserva tu espacio desde nuestra plataforma.
        </p>
        <div className="text-center">
          <a
            href="https://altheastudio.wstudio.app/#/onboarding"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-altheaDeepOlive text-altheaIvory px-8 py-4 rounded-xl font-sans text-xl hover:bg-altheaSage transition-colors duration-300"
          >
            Ver disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}