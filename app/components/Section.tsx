import { Header, HeaderTwo } from './Hedaer'
import { Main, MainTwo } from './Main'

export const SectionOne = () => {
  return (
    <div className="h-screen">
      <Header />
      <Main />
    </div>
  )
}

export const SectionTwo = () => {
  return (
    <section className="bg-gray flex h-screen flex-col gap-6 px-[2.7rem] py-[3.75rem] md:flex-row md:items-center md:justify-between md:gap-64 md:px-[17.5rem] md:py-[13rem]">
      <HeaderTwo />
      <MainTwo />
    </section>
  )
}
