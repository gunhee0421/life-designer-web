import React from 'react'
import { BetaTestCard, IntroLadiCard } from './Card'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const EmblaCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      <div className="relative h-[150px] w-[270px] md:h-[500px] lg:h-[800px] 2xl:px-[160px] 2xl:py-[71px]">
        <Image
          src={'/BetaTest.webp'}
          alt="세부 루틴 설정 핸드폰 이미지"
          fill
          quality={100}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="relative h-[150px] w-[270px] md:h-[500px] lg:h-[800px] 2xl:px-[160px] 2xl:py-[71px]">
        <iframe
          src="https://www.youtube.com/embed/QnA4Azg5qxw"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
    </Slider>
  )
}

export default EmblaCarousel
