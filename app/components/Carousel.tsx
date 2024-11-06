'use client'
// components/EmblaCarousel.tsx
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { BetaTestCard, IntroLadiCard } from './Card'

const EmblaCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' })

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex items-center justify-around">
        <div className="mx-2 flex min-w-full flex-shrink-0 items-center justify-center p-[2rem]">
          <BetaTestCard />
        </div>
        <div className="mx-2 flex min-w-full flex-shrink-0 items-center justify-center p-[2rem]">
          <IntroLadiCard />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
