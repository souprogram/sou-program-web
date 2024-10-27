import JoinForm from '@/components/forms/JoinForm'
import SouHeader from '@/components/SouHeader'
import { createFileRoute } from '@tanstack/react-router'
import SPLogoTrasparent from '/sou-program-icon-transparent.svg'

export const Route = createFileRoute('/join/')({
  component: JoinPage,
})

function JoinPage() {
  return (
    <section className="relative overflow-hidden bg-black pb-16 md:pb-32">
      <div className="opacity-5">
        <img
          src={SPLogoTrasparent}
          alt="Sou program logo"
          className="absolute inset-0 top-[15%] z-20 sm:left-[20%] sm:top-[-10%] sm:h-[100rem] sm:w-[100rem]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col gap-4 px-4 pt-8 sm:px-6 sm:pt-24 lg:px-8">
        <SouHeader heading="Postani član udruge" />

        <div className="max-w-screen-sm">
          <JoinForm />
        </div>
      </div>
    </section>
  )
}
