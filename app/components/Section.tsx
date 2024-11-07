'use client'

import Image from 'next/image'
import { FooterFive, FooterSeven, FooterThree, IntroFooter } from './Footer'
import {
  Header,
  HeaderEight,
  HeaderFive,
  HeaderFour,
  HeaderSix,
  HeaderTwo,
  HederThree,
} from './Hedaer'
import { Main, MainFive, MainFour, MainSix, MainThree, MainTwo } from './Main'
import {
  SectionAnimationContainer,
  SectionAnimationLongContainer,
} from './SectionAnimationContainer'
import { useState } from 'react'
import Head from 'next/head'
import EmblaCarousel from './Carousel'

// section one
export const SectionOne = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>라디: LifeDesigner</title>
        <meta
          name="description"
          content="라디와 함께 루틴을 만들고 관리해보세요. 라디에서 효과적인 계획을 세우세요."
        />
        <meta property="og:image" content="/hero_section.png" />
        <meta property="og:title" content="라디 - LifeDesigner" />
        <meta
          property="og:description"
          content="라디와 함께 루틴을 만들고 관리해보세요."
        />
        <meta property="og:url" content="https://lifedesigner.store" />
      </Head>
      <Header />
      <Main />
    </div>
  )
}
// section two
export const SectionTwo = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 bg-gray py-[3.75rem] md:flex-row md:items-center md:justify-between md:px-[2.7rem] lg:p-[4rem] xl:px-[8rem] xl:py-[5.25rem] 2xl:px-[17.5rem] 2xl:py-[13rem]">
      <Head>
        <title>라디 - 루틴 생성</title>
        <meta
          name="description"
          content="간단하고 빠르게 루틴을 만들어보세요. 오늘 바로 시작하세요!"
        />
      </Head>
      <SectionAnimationContainer>
        <HeaderTwo />
      </SectionAnimationContainer>
      <SectionAnimationContainer delay={100}>
        <div className="relative mx-auto h-[505px] w-[280px] lg:h-[750px] lg:w-[375px] 2xl:h-[1036px] 2xl:w-[520px]">
          <Image
            src={'Main/MainTwo.svg'}
            alt="루틴 생성 핸드폰 이미지"
            fill
            quality={100}
          />
        </div>
      </SectionAnimationContainer>
    </section>
  )
}
// section three
export const SectionThree = () => {
  return (
    <section>
      <Head>
        <title>라디 - 세부 루틴 생성</title>
        <meta
          name="description"
          content="라디와 함께 더욱 세부적인 루틴을 설정해보세요."
        />
      </Head>
      <div className="flex flex-col items-center justify-center gap-6 py-[3.75rem] md:hidden md:px-[2.7rem]">
        <SectionAnimationContainer>
          <HederThree />
        </SectionAnimationContainer>
        <SectionAnimationContainer delay={100}>
          <div className="relative mx-auto h-[505px] w-[270px]">
            <Image
              src={'/Main/MainThree.webp'}
              alt="세부 루틴 설정 핸드폰 이미지"
              fill
              quality={100}
            />
          </div>
        </SectionAnimationContainer>
        <SectionAnimationContainer delay={200}>
          <FooterThree />
        </SectionAnimationContainer>
      </div>
      <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:p-[2.7rem] lg:p-[4rem] xl:px-[8rem] xl:py-[5.25rem] 2xl:px-[17.5rem] 2xl:py-[13rem]">
        <SectionAnimationContainer>
          <div className="relative mx-auto h-[505px] w-[280px] lg:h-[750px] lg:w-[375px] 2xl:h-[1036px] 2xl:w-[520px]">
            <Image
              src={'/Main/MainThree.webp'}
              alt="세부 루틴 설정 핸드폰 이미지"
              fill
              quality={100}
            />
          </div>
        </SectionAnimationContainer>
        <section className="flex flex-col gap-[7.5rem]">
          <SectionAnimationContainer delay={100}>
            <HederThree />
          </SectionAnimationContainer>
          <SectionAnimationContainer delay={200}>
            <FooterThree />
          </SectionAnimationContainer>
        </section>
      </div>
    </section>
  )
}
// section Four
export const SectionFour = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 bg-gray py-[3.75rem] md:flex-row md:justify-between md:px-[2.7rem] lg:p-[4rem] xl:px-[8rem] xl:py-[5.25rem] 2xl:px-[17.5rem] 2xl:py-[13rem]">
      <Head>
        <title>라디 - 루틴 수행</title>
        <meta
          name="description"
          content="타이머를 사용해 루틴을 수행하고 기록해보세요."
        />
      </Head>
      <SectionAnimationContainer>
        <HeaderFour />
      </SectionAnimationContainer>
      <SectionAnimationContainer delay={100}>
        <div className="relative mx-auto h-[560px] w-[280px] lg:h-[750px] lg:w-[375px] 2xl:h-[1036px] 2xl:w-[520px]">
          <Image
            src={'/Main/MainFour.webp'}
            alt="루틴 생성 핸드폰 이미지"
            fill
            quality={100}
          />
        </div>
      </SectionAnimationContainer>
    </section>
  )
}
// section Five(Web: Five & Six)
export const SectionFive = () => {
  const [showSix, setShowSix] = useState(false)

  return (
    <section>
      <div className="flex h-fit flex-col items-center justify-between gap-6 py-[3.75rem] md:hidden md:px-[2.7rem]">
        <SectionAnimationContainer>
          <HeaderFive />
        </SectionAnimationContainer>
        <SectionAnimationContainer delay={100}>
          <div className="relative mx-auto h-[540px] w-[280px] lg:h-[750px] lg:w-[375px] 2xl:h-[1036px] 2xl:w-[520px]">
            <Image
              src={'Main/MainFive.svg'}
              alt="세부 루틴 설정 핸드폰 이미지"
              fill
              quality={100}
            />
          </div>
        </SectionAnimationContainer>
        <SectionAnimationContainer delay={200}>
          <FooterFive />
        </SectionAnimationContainer>
      </div>
      <div className="hidden h-fit items-center justify-between gap-6 py-[3.75rem] md:flex md:flex-row md:px-[2.7rem] lg:p-[4rem] xl:px-[8rem] xl:py-[5.25rem] 2xl:px-[17.5rem] 2xl:py-[13rem]">
        <div className="flex flex-1 md:h-[1125px] lg:h-[1525px] 2xl:h-[2325px]">
          <SectionAnimationContainer threshold={0.1}>
            <MainFive setShowSix={setShowSix} />
          </SectionAnimationContainer>
        </div>
        <div className="flex h-full flex-1 flex-col justify-between md:h-[1140px] md:py-[8rem] md:pb-[10rem] lg:h-[1350px] xl:py-0 2xl:h-[2146px] 2xl:py-[15rem]">
          <div className="flex flex-col md:gap-[2rem] lg:gap-[4.25rem] 2xl:gap-[7.5rem]">
            <SectionAnimationContainer delay={100}>
              <HeaderFive />
            </SectionAnimationContainer>
            <SectionAnimationContainer delay={200}>
              <FooterFive />
            </SectionAnimationContainer>
          </div>
          <div className="flex flex-col md:gap-[2rem] lg:gap-[4.25rem] 2xl:gap-[7.5rem]">
            <SectionAnimationContainer delay={200}>
              <HeaderSix />
            </SectionAnimationContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

// section Five Animation Test
// export const SectionFive = () => {
//   const [showSix, setShowSix] = useState(false)

//   return (
//     <section>
//       <Head>
//         <title>라디 - 루틴 통계</title>
//         <meta
//           name="description"
//           content="라디가 제공하는 루틴 수행 통계를 확인해보세요."
//         />
//       </Head>
//       <div className="flex h-fit flex-col gap-6 px-[2.7rem] py-[3.75rem] lg:hidden lg:flex-row lg:items-center lg:justify-between lg:px-[17.5rem] lg:py-[13rem]">
//         <SectionAnimationContainer>
//           <HeaderFive />
//         </SectionAnimationContainer>
//         <SectionAnimationContainer delay={100}>
//           <MainFive setShowSix={setShowSix} />
//         </SectionAnimationContainer>
//         <SectionAnimationContainer delay={200}>
//           <FooterFive />
//         </SectionAnimationContainer>
//       </div>
//       <div className="hidden h-fit gap-6 px-[2.7rem] py-[3.75rem] lg:flex lg:flex-row lg:items-center lg:justify-between lg:px-[17.5rem] lg:py-[13rem]">
//         <div className="flex h-full flex-1">
//           <SectionAnimationContainer threshold={0.1}>
//             <MainFive setShowSix={setShowSix} />
//           </SectionAnimationContainer>
//         </div>
//         <div className="mb-[10rem] flex h-full flex-1 flex-col justify-between">
//           {!showSix && (
//             <div className="flex flex-col gap-[7.5rem]">
//               <SectionAnimationLongContainer delay={100}>
//                 <HeaderFive />
//               </SectionAnimationLongContainer>
//               <SectionAnimationLongContainer delay={200}>
//                 <FooterFive />
//               </SectionAnimationLongContainer>
//             </div>
//           )}
//           <div className="flex flex-col gap-[7.5rem]">
//             {showSix && (
//               <SectionAnimationLongContainer delay={200}>
//                 <HeaderSix />
//               </SectionAnimationLongContainer>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
// section Six(Mobile)
export const SectionSix = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-6 py-[3.75rem] md:hidden">
      <Head>
        <title>라디 - 루틴 보고서</title>
        <meta
          name="description"
          content="통계를 기반으로 맞춤형 루틴 보고서를 받아보세요."
        />
      </Head>
      <SectionAnimationContainer>
        <HeaderSix />
      </SectionAnimationContainer>
      <SectionAnimationContainer delay={100}>
        <div className="relative mx-auto h-[560px] w-[280px] lg:h-[750px] lg:w-[375px] 2xl:h-[1036px] 2xl:w-[520px]">
          <Image
            src={'Main/MainSix.svg'}
            alt="세부 루틴 설정 핸드폰 이미지"
            fill
            quality={100}
          />
        </div>
      </SectionAnimationContainer>
    </section>
  )
}
// section Seven
export const SectionSeven = () => {
  return (
    <section className="flex items-center justify-center bg-backgroundGray md:py-[2rem] lg:p-[4rem] lg:px-[5rem] 2xl:px-[10rem] 2xl:py-[13rem]">
      <Head>
        <title>라디 - 최신 소식</title>
        <meta
          name="description"
          content="라디의 최신 소식과 업데이트를 확인해보세요."
        />
      </Head>
      <Image
        src={'/gif/hello_ladi.gif'}
        alt="ladi 이미지 파일"
        width={305}
        height={410}
        className="hidden md:flex lg:flex-1 2xl:h-[820px] 2xl:w-[610px]"
      />
      <FooterSeven />
    </section>
  )
}
// section Eight
export const SectionEight = () => {
  return (
    <section className="mx-11 my-6 flex flex-col justify-center gap-9 md:mt-14 lg:m-[10rem] lg:gap-0 xl:gap-20">
      <HeaderEight />
      <EmblaCarousel />
    </section>
  )
}
// Introduction
export const EndIntroduction = () => {
  return (
    <footer className="bg-[#383838] px-5 py-10 text-white lg:p-[5rem] lg:pb-[7rem]">
      <IntroFooter />
    </footer>
  )
}
