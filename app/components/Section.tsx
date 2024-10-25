import { FooterThree } from './Footer'
import { Header, HeaderFour, HeaderTwo, HederThree } from './Hedaer'
import { Main, MainFour, MainThree, MainTwo } from './Main'

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
      <HeaderTwo />
      <MainTwo />
    </section>
  )
}
// section three
export const SectionThree = () => {
  return (
    <section>
      <div className="flex flex-col gap-6 px-[2.7rem] py-[3.75rem] md:hidden">
        <HederThree />
        <MainThree />
        <FooterThree />
      </div>
      <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:px-[17.5rem] md:py-[13rem]">
        <MainThree />
        <section className="flex flex-col gap-[7.5rem]">
          <HederThree />
          <FooterThree />
        </section>
      </div>
    </section>
  )
}
// section Four
export const SectionFour = () => {
  return (
    <section className="flex flex-col gap-6 bg-gray px-[2.7rem] py-[3.75rem] md:flex-row md:items-center md:justify-between md:px-[17.5rem] md:py-[13rem]">
      <HeaderFour />
      <MainFour />
    </section>
  )
}
