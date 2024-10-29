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

// section one
export const SectionOne = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}
// section two
export const SectionTwo = () => {
  return (
    <section className="flex flex-col gap-6 bg-gray px-[2.7rem] py-[3.75rem] md:flex-row md:items-center md:justify-between md:px-[17.5rem] md:py-[13rem]">
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
// export const SectionFive = () => {
//   return (
//     <section>
//       <div className="flex h-fit flex-col gap-6 px-[2.7rem] py-[3.75rem] md:hidden md:flex-row md:items-center md:justify-between md:px-[17.5rem] md:py-[13rem]">
//         <SectionAnimationContainer>
//           <HeaderFive />
//         </SectionAnimationContainer>
//         <SectionAnimationContainer delay={100}>
//           <MainFive />
//         </SectionAnimationContainer>
//         <SectionAnimationContainer delay={200}>
//           <FooterFive />
//         </SectionAnimationContainer>
//       </div>
//       <div className="hidden h-fit gap-6 px-[2.7rem] py-[3.75rem] md:flex md:flex-row md:items-center md:justify-between md:px-[17.5rem] md:py-[13rem]">
//         <div className="flex h-full flex-1">
//           <SectionAnimationContainer threshold={0.1}>
//             <MainFive />
//           </SectionAnimationContainer>
//         </div>
//         <div className="mb-[10rem] flex h-full flex-1 flex-col justify-between gap-[30rem]">
//           <div className="flex flex-col gap-[7.5rem]">
//             <SectionAnimationContainer delay={100}>
//               <HeaderFive />
//             </SectionAnimationContainer>
//             <SectionAnimationContainer delay={200}>
//               <FooterFive />
//             </SectionAnimationContainer>
//           </div>
//           <div className="flex flex-col gap-[7.5rem]">
//             <SectionAnimationContainer delay={200}>
//               <HeaderSix />
//             </SectionAnimationContainer>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// section Five Animation Test
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
        <div className="mb-[10rem] flex h-full flex-1 flex-col justify-between">
          {!showSix && (
            <div className="flex flex-col gap-[7.5rem]">
              <SectionAnimationLongContainer delay={100}>
                <HeaderFive />
              </SectionAnimationLongContainer>
              <SectionAnimationLongContainer delay={200}>
                <FooterFive />
              </SectionAnimationLongContainer>
            </div>
          )}
          <div className="flex flex-col gap-[7.5rem]">
            {showSix && (
              <SectionAnimationLongContainer delay={200}>
                <HeaderSix />
              </SectionAnimationLongContainer>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
// section Six(Mobile)
export const SectionSix = () => {
  return (
    <section className="flex flex-col gap-6 px-[2.7rem] py-[3.75rem] md:hidden md:flex-row md:items-center md:justify-between md:px-[17.5rem] md:py-[13rem]">
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
