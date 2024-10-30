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
import {
  Main,
  MainEight,
  MainFive,
  MainFour,
  MainSix,
  MainThree,
  MainTwo,
} from './Main'
import {
  SectionAnimationContainer,
  SectionAnimationLongContainer,
} from './SectionAnimationContainer'
import { useState } from 'react'
import Head from 'next/head'

// section one
export const SectionOne = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>라디 - 홈</title>
        <meta
          name="description"
          content="라디와 함께 루틴을 만들고 관리해보세요."
        />
      </Head>
      <Header />
      <Main />
    </div>
  )
}
// section two
export const SectionTwo = () => {
  return (
    <section className="flex flex-col gap-6 bg-gray px-[2.7rem] py-[3.75rem] md:flex-row md:items-center md:justify-between md:px-[17.5rem] md:py-[13rem]">
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
        <MainTwo />
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
      <div className="flex flex-col gap-6 px-[2.7rem] py-[3.75rem] md:hidden">
        <SectionAnimationContainer>
          <HederThree />
        </SectionAnimationContainer>
        <SectionAnimationContainer delay={100}>
          <MainThree />
        </SectionAnimationContainer>
        <SectionAnimationContainer delay={200}>
          <FooterThree />
        </SectionAnimationContainer>
      </div>
      <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:px-[17.5rem] md:py-[13rem]">
        <SectionAnimationContainer>
          <MainThree />
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
    <section className="flex flex-col gap-6 bg-gray px-[2.7rem] py-[3.75rem] md:flex-row md:items-center md:justify-between md:px-[17.5rem] md:py-[13rem]">
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
        <MainFour />
      </SectionAnimationContainer>
    </section>
  )
}
// section Five(Web: Five & Six)
export const SectionFive = () => {
  const [showSix, setShowSix] = useState(false)

  return (
    <section>
      <div className="flex h-fit flex-col gap-6 px-[2.7rem] py-[3.75rem] md:hidden md:flex-row md:items-center md:justify-between md:px-[17.5rem] md:py-[13rem]">
        <SectionAnimationContainer>
          <HeaderFive />
        </SectionAnimationContainer>
        <SectionAnimationContainer delay={100}>
          <MainFive setShowSix={setShowSix} />
        </SectionAnimationContainer>
        <SectionAnimationContainer delay={200}>
          <FooterFive />
        </SectionAnimationContainer>
      </div>
      <div className="hidden h-fit gap-6 px-[2.7rem] py-[3.75rem] md:flex md:flex-row md:items-center md:justify-between md:px-[17.5rem] md:py-[13rem]">
        <div className="flex h-full flex-1">
          <SectionAnimationContainer threshold={0.1}>
            <MainFive setShowSix={setShowSix} />
          </SectionAnimationContainer>
        </div>
        <div className="mb-[10rem] flex h-full flex-1 flex-col justify-between gap-[30rem]">
          <div className="flex flex-col gap-[7.5rem]">
            <SectionAnimationContainer delay={100}>
              <HeaderFive />
            </SectionAnimationContainer>
            <SectionAnimationContainer delay={200}>
              <FooterFive />
            </SectionAnimationContainer>
          </div>
          <div className="flex flex-col gap-[7.5rem]">
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
//       <div className="flex h-fit flex-col gap-6 px-[2.7rem] py-[3.75rem] md:hidden md:flex-row md:items-center md:justify-between md:px-[17.5rem] md:py-[13rem]">
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
//       <div className="hidden h-fit gap-6 px-[2.7rem] py-[3.75rem] md:flex md:flex-row md:items-center md:justify-between md:px-[17.5rem] md:py-[13rem]">
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
    <section className="flex flex-col gap-6 px-[2.7rem] py-[3.75rem] md:hidden md:flex-row md:items-center md:justify-between md:px-[17.5rem] md:py-[13rem]">
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
        <MainSix />
      </SectionAnimationContainer>
    </section>
  )
}
// section Seven
export const SectionSeven = () => {
  return (
    <section className="flex items-center bg-backgroundGray md:justify-between md:px-[10rem] md:py-[13rem]">
      <Head>
        <title>라디 - 최신 소식</title>
        <meta
          name="description"
          content="라디의 최신 소식과 업데이트를 확인해보세요."
        />
      </Head>
      <Image
        src={'/hello_ladi.gif'}
        alt="ladi 이미지 파일"
        width={610}
        height={820}
        className="hidden md:flex md:flex-1"
      />
      <FooterSeven />
    </section>
  )
}
// section Eight
export const SectionEight = () => {
  return (
    <section className="my-6 flex flex-col gap-9 md:m-[10rem]">
      <HeaderEight />
      <MainEight />
    </section>
  )
}
// Introduction
export const EndIntroduction = () => {
  return (
    <footer className="bg-[#383838] px-5 py-10 text-white md:p-[5rem] md:pb-[7rem]">
      <IntroFooter />
    </footer>
  )
}
