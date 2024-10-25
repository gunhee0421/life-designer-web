import Image from 'next/image'
import Icon from './icons'
import ladi from '../../public/ladi.png'

// sectionOne의 헤더
export const Header = () => {
  return (
    <header className="flex h-[52px] flex-row items-center justify-between p-4 font-sans md:h-[104px] md:px-20">
      <Image
        src={ladi}
        width={59}
        height={24}
        alt="LADI"
        className="md:h-[48px] md:w-[118px]"
      />
      {/* <ol className="hidden gap-[9px] text-[1.25rem] font-[500] text-textSecondary md:flex">
          <li className="w-[6.25rem]">라디 소개</li>
          <li className="w-[6.25rem]">주요 기능</li>
          <li className="w-[6.25rem]">고객 지원</li>
          <li className="w-[6.25rem]">앱 다운로드</li>
        </ol> */}
    </header>
  )
}
// sectionTwo의 헤더
export const HeaderTwo = () => {
  return (
    <header>
      <div className="flex flex-col gap-2 font-sans md:flex-1">
        <h1 className="text text-xl font-bold text-primary md:text-4xl">
          루틴 생성
        </h1>
        <h2 className="text text-2xl font-bold md:text-5xl">
          간단하게 시작해보세요!
        </h2>
        <nav className="text-[16px] text-textSecondary md:text-4xl">
          <p>루틴은 시작이 반이다!</p>
          <p>일단 목표를 정하고 오늘 바로 시작해보세요!</p>
        </nav>
      </div>
    </header>
  )
}
// sectionThree의 헤더
export const HederThree = () => {
  return (
    <header className="flex flex-col gap-2 font-sans font-bold md:gap-4">
      <h1 className="text-xl text-primary md:text-4xl">세부 루틴 생성</h1>
      <h2 className="text-[1.5rem] leading-[1.75rem] md:text-5xl">
        라디가 만들어주는<br></br> 루틴을 확인해보세요
      </h2>
    </header>
  )
}
// sectionFour의 헤더
export const HeaderFour = () => {
  return (
    <header className="flex flex-col gap-2 font-sans font-bold md:gap-4">
      <h1 className="text-xl text-primary md:text-4xl">루틴 수행</h1>
      <h2 className="text-[1.5rem] leading-[1.75rem] md:text-5xl">
        타이머 형태로
        <br className="md: hidden" />
        루틴을 수행하세요
      </h2>
      <p className="text-[1rem] font-normal leading-[1.125rem] text-textSecondary md:text-4xl">
        언제든지 나의 루틴 수행 기록을
        <br className="md:hidden" />
        기록할 수 있어요.
      </p>
    </header>
  )
}
