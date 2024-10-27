import ContactForm from '@/components/forms/ContactForm'
import SouHeader from '@/components/SouHeader'
import SPLogoTransparent from '/sou-program-icon-transparent.svg'

export default function SectionContact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-16 text-gray-200 md:py-32"
    >
      <div className="opacity-5">
        <img
          src={SPLogoTransparent}
          alt="Sou program logo"
          className="absolute left-[45%] top-[-10%] z-20 h-[50rem] w-[50rem]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col px-4 text-gray-300 sm:px-6 lg:px-8">
        <div className="flex max-w-screen-sm flex-col gap-8">
          <div>
            <SouHeader
              className="text-primary-600"
              heading="Kontaktiraj nas"
              subheading="Budi u dodiru"
            />

            <p className="pb-2 lg:text-lg">
              Javi nam se za bilo kakva pitanja koje imaš. Glupa pitanja ne postoje, samo glupi
              odgovori.
            </p>

            <p className="text-sm text-gray-400 md:text-base">
              Naš email:{' '}
              <a
                href="mailto:info@souprogram.hr"
                className="text-primary-400 hover:text-primary-200"
              >
                info@souprogram.hr
              </a>
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
