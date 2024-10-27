import { TransparentLinkButton } from '@/components/ui/LinkButton'
import { HiArrowRight } from 'react-icons/hi'
import SouHeader from '../SouHeader'

interface TEvent {
  id: number
  title: string
  description: string
  date?: string
  time?: string
  location?: string
  link: string
}

const eventsData = [
  {
    id: 1,
    title: 'Radionica robotike',
    description:
      'Glavni cilj radionice je upoznati buduće mlade inženjere/ke i znatiželjne mozgove s osnovama STEM-a. 💻 Tijekom 9 interaktivnih termina, klinci će učiti osnove programiranja, tehničkog crtanja i robotike te ono najvažnije kako složiti vlastiti autić na daljinsko upravljanje! 🤓 🛻',
    date: '19. 10. 2024. - 14. 12. 2024.',
    time: '10:00 - 11:30',
    location: 'FET, dvorana 402',
    link: '/events/robotics' as const,
  },
  {
    id: 2,
    title: 'DevOps radionica',
    description:
      'Jesi li se ikad pitao kako velike tech kompanije uspijevaju tako brzo razvijati i isporučivati softver? Saznaj i pridruži nam se na jednodnevnoj radionici koju vodi iskusni stručnjak Andrea Hrelja, Cloud inženjer iz Kern AI-a!',
    date: '26. 10. 2024.',
    time: '16:00 - 18:00',
    location: 'FET, dvorana 402',
    link: '/events/devops' as const,
  },
] satisfies TEvent[]

export default function SectionEvents() {
  return (
    <section id="events" className="bg-black py-16 text-gray-200 md:py-32">
      <div className="mx-auto flex max-w-screen-lg flex-col px-4 sm:px-6 lg:px-8">
        <SouHeader className="text-primary-600" heading="Naši eventi" subheading="i radionice" />

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EventCard({ event }: { event: TEvent }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-600 p-6 text-gray-300 md:p-12">
      <h2 className="pb-4 font-brioni text-2xl font-bold text-white sm:text-4xl">{event.title}</h2>

      <p className="md:max-w-md lg:text-lg">{event.description}</p>

      <div className="mb-auto text-gray-400">
        <p>📅 {event.date ?? 'To be added'}</p>
        <p>🕓 {event.time ?? 'To be added'}</p>
        <p>📍 {event.location ?? 'To be added'}</p>
      </div>

      <TransparentLinkButton
        to={event.link}
        label="Više detalja"
        icon={<HiArrowRight />}
        iconPosition="right"
      />
    </div>
  )
}
