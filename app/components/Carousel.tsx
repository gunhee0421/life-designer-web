'use client'
// components/EmblaCarousel.tsx
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { BetaTestCard, IntroLadiCard } from './Card'

const EmblaCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'center' })

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="relative mx-2 min-w-full flex-shrink-0 p-[2rem]">
          <BetaTestCard />
        </div>
        <div className="relative mx-2 min-w-full flex-shrink-0 p-[2rem]">
          <IntroLadiCard />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
