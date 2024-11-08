import Head from 'next/head'
import {
  EndIntroduction,
  SectionEight,
  SectionFive,
  SectionFour,
  SectionOne,
  SectionSeven,
  SectionSix,
  SectionThree,
  SectionTwo,
} from './components/Section'

export default function Home() {
  return (
    <>
      <Head>
        <title>라디 - 라이프디자인, 루틴 관리 앱</title>
        <meta
          name="description"
          content="라디(LifeDesigner)와 함께 루틴을 만들고, 관리하며 효과적인 라이프디자인을 경험해보세요."
        />
        <meta property="og:image" content="/hero_section.png" />
        <meta property="og:title" content="라디 - 라이프디자인 루틴 관리 앱" />
        <meta
          property="og:description"
          content="라디(LifeDesigner)와 함께 루틴을 만들고 관리하세요. 라이프디자인을 위한 최적의 루틴 관리 솔루션입니다."
        />
        <meta
          name="keywords"
          content="라디, 라이프디자인, 루틴 관리, LifeDesigner, lifeDesign, 루틴 생성, 루틴 수행, 루틴 통계"
        />
        <meta property="og:url" content="https://lifedesigner.store" />
      </Head>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <EndIntroduction />
    </>
  )
}
