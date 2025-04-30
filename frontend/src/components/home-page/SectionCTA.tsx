import SouHeader from '@/components/SouHeader'
import Button from '@/components/ui/Button'
import { useParallax } from '@/hooks/useParallax'
import SPLogoTransparent from '/sou-program-icon-transparent.svg'

export default function SectionCTA() {
  const { parentRef: souImageRef, offsetY } = useParallax(0.1)

  return (
    <section className="bg-primary-600 relative overflow-hidden py-16 md:py-32">
      <div ref={souImageRef} className="absolute inset-0 flex items-center justify-end opacity-50">
        <img
          src={SPLogoTransparent}
          alt="Sou program logo"
          height={480}
          width={480}
          style={{ transform: `translateY(${offsetY}px)` }}
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-screen-lg flex-col px-4 sm:px-6 lg:px-8">
        <SouHeader
          className="text-black"
          heading="Jesi li spreman?"
          subheading="Postani dio Šou program ekipe!"
        />

        <div className="flex">
          <Button
            to="/join"
            className="bg-neutral-900 px-8 py-4 text-lg text-white hover:bg-gray-700"
          >
            Učlani se
          </Button>
        </div>
      </div>
    </section>
  )
}
