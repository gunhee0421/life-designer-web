import Icon from './icons'

// SectionFive의 footer입니다.
export const FooterThree = () => {
  return (
    <footer className="flex flex-col gap-3 lg:gap-[3.75rem]">
      <p className="text-2xl font-bold lg:text-5xl">
        번거로운 입력은 <span className="text-[#AAAAAA]">줄이고,</span>
        <br />
        사용자의 부담은 <span className="text-[#707070]">낮추고,</span>
        <br />
        목표 달성률은 <span className="text-[#595959]">높입니다.</span>
      </p>
      <p className="text-[0.9375rem] text-textSecondary lg:text-4xl">
        생성형 AI와 루틴 데이터를 바탕으로
        <br />
        사용자의 목표에 최적화된 루틴을 만들어줘요.
      </p>
    </footer>
  )
}
// SectionFive의 footer입니다.
export const FooterFive = () => {
  return (
    <footer className="flex flex-col gap-6 lg:gap-[3.75rem]">
      <p className="text-2xl font-bold lg:text-5xl">
        동기부여,
        <br />
        가장 빠르고 정확한 방법은
        <br />
        사용자의 기록입니다.
      </p>
      <p className="text-[1.25rem] text-textSecondary lg:text-4xl">
        지금까지 수행했던 <br className="lg:hidden" />
        모든 기록들을 확인해보세요.
      </p>
    </footer>
  )
}
// 전체 footer one 입니다.
export const FooterSeven = () => {
  return (
    <footer className="mx-[2.75rem] my-[3rem] flex flex-1 flex-col gap-9 font-sans font-bold lg:ml-[15rem] lg:mr-0 lg:gap-[7.5rem]">
      <h2 className="text-xl lg:text-5xl">
        각각의 사용자에 맞춰
        <br />
        루틴 생성, 수행 그리고 기록까지
        <br />
        <br />
        <span className="text-textSub">이 모든걸 라디로 한번에</span>
      </h2>
      <h1 className="text-2xl lg:text-5xl">지금 바로 다운로드 하세요!</h1>
      <nav className="inline-flex flex-row gap-4">
        <a
          className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-start lg:px-8 lg:py-4 lg:pr-12"
          href="https://play.google.com/store/apps/details?id=dorun.com.life_designer_client&pcampaignid=web_share"
        >
          <Icon name="playstore" size={20} className="lg:hidden" />
          <Icon name="playstore" size={40} className="hidden lg:block" />
          <div className="text-white">
            <p className="text-[12px] font-medium lg:text-2xl">Google Play</p>
          </div>
        </a>

        <a
          className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-start lg:px-8 lg:py-4 lg:pr-12"
          href="https://apps.apple.com/kr/app/%EB%9D%BC%EB%94%94-%EB%82%98%EB%A7%8C%EC%9D%98-life-designer/id6670728311"
        >
          <Icon name="apple" size={20} className="lg:hidden" />
          <Icon name="apple" size={40} className="hidden lg:block" />
          <div className="text-white">
            <p className="text-[12px] font-medium lg:text-2xl">App Store</p>
          </div>
        </a>
      </nav>
    </footer>
  )
}
// 마지막 footer 입니다.
export const IntroFooter = () => {
  return (
    <footer className="flex flex-col gap-4">
      <h1 className="text-[0.875rem] font-bold lg:text-xl">
        나만의 Life Designer: 라디
      </h1>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-60 lg:text-[0.875rem]">
        <h2 className="text-[0.625rem]">
          대표: 신홍기
          <br />
          이메일: life.designer.dev@gmail.com
        </h2>
        <h2 className="text-[0.625rem] underline">
          서비스 이용약관 <br /> 개인정보 처리방침
        </h2>
      </div>
    </footer>
  )
}
