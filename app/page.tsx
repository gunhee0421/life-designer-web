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
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <EndIntroduction />
    </div>
  )
}
