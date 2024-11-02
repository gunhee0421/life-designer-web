import Icon from './icons'
import heroSection from '../../public/hero_section.webp'
import Image from 'next/image'
import '../styles/phone.css'
import CircularProgress from './CircularPrograss'
import EmblaCarousel from './Carousel'
import {
  SectionAnimationContainer,
  SectionAnimationLongContainer,
} from './SectionAnimationContainer'
import React from 'react'

const calendar = [
  [null, 1, 1, 2, 2, 2, 1],
  [1, 2, 9, 2, 2, 12, 1],
  [1, 2, 2, 17, 2, 1, 2],
  [2, 3, 1, 24, 25, 26, 27],
  [28, 29, 30, null, null, null, null],
]

export const Main = () => {
  return (
    <section className="flex h-full flex-col justify-between px-8 py-14 text-center lg:mx-40 lg:my-40 lg:flex lg:min-h-[70vh] lg:text-left">
      <div className="flex flex-col">
        <header>
          <div className="mb-5">
            <h1 className="text-2xl font-bold text-textPrimary lg:h-[3.75rem] lg:text-[3.5rem]">
              당신만의 루틴으로
            </h1>
            <h2 className="mb-2 text-2xl font-bold text-textPrimary lg:h-[3.75rem] lg:text-[3.5rem]">
              더 나은 삶을 디자인하세요
            </h2>
            <p className="mt whitespace-nowrap text-xs font-medium text-textSecondary lg:mb-10 lg:mt-8 lg:h-[2.25rem] lg:text-[2rem]">
              라디와 함께 간편하게 목표를 설정하고 습관을 만들어보세요
            </p>
          </div>
        </header>

        <nav className="mb-10 hidden flex-row gap-4 lg:flex">
          <a
            className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-start lg:w-48"
            href="https://play.google.com/store/apps/details?id=dorun.com.life_designer_client&pcampaignid=web_share"
          >
            <Icon name="playstore" size={32} />
            <div className="text-white">
              <p className="text-[16px] font-medium">Google Play</p>
            </div>
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-start lg:w-48"
            href="https://apps.apple.com/kr/app/%EB%9D%BC%EB%94%94-%EB%82%98%EB%A7%8C%EC%9D%98-life-designer/id6670728311"
          >
            <Icon name="apple" size={32} />
            <div className="text-white">
              <p className="text-[16px] font-medium">App Store</p>
            </div>
          </a>
        </nav>
      </div>

      <div className="mb-28 mt-32 flex justify-center">
        <Image
          src={heroSection}
          width={251}
          height={175}
          alt="여자가 요가 앱을 사용하여 루틴을 관리하는 모습"
          className="lg:absolute lg:bottom-[10vh] lg:right-[10vw] lg:w-[70vw] xl:bottom-[15vh] xl:right-[5vw] xl:w-[40vw] 2xl:right-[5vw] 2xl:top-[30vh] 2xl:h-[671px] 2xl:w-[980px]"
          quality={100}
          priority
        />
      </div>

      <nav className="inline-flex flex-col items-center justify-center gap-4 lg:hidden">
        <a
          className="inline-flex w-24 items-center gap-2 rounded bg-black px-2 py-1 text-start"
          href="https://play.google.com/store/apps/details?id=dorun.com.life_designer_client&pcampaignid=web_share"
        >
          <Icon name="playstore" size={16} />
          <div className="flex-1 text-white">
            <p className="text-[10px] font-medium">Google Play</p>
          </div>
        </a>

        <a
          className="inline-flex w-24 items-center gap-2 rounded bg-black px-2 py-1 text-start"
          href="https://apps.apple.com/kr/app/%EB%9D%BC%EB%94%94-%EB%82%98%EB%A7%8C%EC%9D%98-life-designer/id6670728311"
        >
          <Icon name="apple" size={16} />
          <div className="text-white">
            <p className="text-[10px] font-medium">App Store</p>
          </div>
        </a>
      </nav>
    </section>
  )
}

export const MainTwo = () => {
  return (
    <section className="flex flex-col rounded-[13.5px] border-[0.375rem] border-[#E5E5E5] font-notoSans lg:w-[30vw] lg:min-w-[27.5vw] lg:rounded-[26px] lg:border-[0.75rem]">
      <nav className="mx-[1.125rem] my-3 flex flex-row items-center justify-between lg:mx-[2.125rem] lg:my-[1.5rem]">
        <Icon name="arrowNavigate" className="lg:hidden" size={22.5} />
        <Icon name="arrowNavigate" className="hidden lg:block" size={44} />
        <span className="text-[0.75rem] font-semibold lg:text-[1.5rem]">
          생성하기
        </span>
        <Icon name="arrowNavigate" className="opacity-0" size={22.5} />
      </nav>
      <section className="mx-[1.125rem] my-6 flex flex-col gap-3 lg:mx-[2.125rem]">
        <h1 className="text-[1rem] font-bold lg:text-[1.75rem]">
          시작 전에 알람 드릴까요?
        </h1>
        <div className="flex flex-col gap-[1.125rem] text-[0.5625rem] text-textSub lg:text-[1.125rem]">
          <div className="flex flex-col gap-3 lg:gap-6">
            <h3>알림</h3>
            <div className="rounded-[0.1875rem] bg-backgroundGray p-3 text-[1rem] lg:rounded-[0.3125rem] lg:p-6 lg:text-[1.75rem]">
              알림 시간
            </div>
          </div>
          <div className="flex flex-col gap-3 lg:gap-6">
            <h3>반복 요일</h3>
            <ol className="flex items-center justify-between gap-3 text-center font-semibold text-textSecondary lg:gap-6">
              <li className="flex-1 rounded bg-[#DFEAFF] px-[0.375rem] py-[0.75rem] text-primary lg:px-[0.75rem] lg:py-[1.5rem] lg:text-[1.4375rem]">
                매일
              </li>
              <li className="flex-1 rounded bg-[#f4f4f4] px-[0.375rem] py-[0.75rem] lg:px-[0.75rem] lg:py-[1.5rem] lg:text-[1.4375rem]">
                평일
              </li>
            </ol>
            <ol className="flex items-center justify-between gap-3 text-center font-semibold text-textSecondary lg:gap-6">
              <li className="flex-1 rounded bg-[#f4f4f4] px-[0.375rem] py-[0.75rem] lg:px-[0.75rem] lg:py-[1.5rem] lg:text-[1.4375rem]">
                주말
              </li>
              <li className="flex-1 rounded bg-[#f4f4f4] px-[0.375rem] py-[0.75rem] lg:px-[0.75rem] lg:py-[1.5rem] lg:text-[1.4375rem]">
                직접 선택
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-2 lg:gap-4">
            <h3>시작 시간</h3>
            <div className="inputMobile p-3 text-[1rem] text-textPrimary lg:p-6 lg:text-[1.75rem]">
              7:00 PM
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-4">
            <h3>루틴 목표</h3>
            <div className="inputMobile p-3 text-[1rem] text-textPrimary lg:p-6 lg:text-[1.75rem]">
              꾸준히 운동하기
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
// section three의 메인화면
export const MainThree = () => {
  return (
    <section className="flex flex-col gap-3 rounded-[13.5px] border-[0.375rem] border-[#E5E5E5] px-[1.125rem] pt-3 font-notoSans lg:min-w-[27.5vw] lg:rounded-[26px] lg:border-[0.75rem] lg:px-8 lg:pt-6">
      <section className="flex flex-col gap-[1.125rem] py-[1.125rem] lg:gap-[2.175rem]">
        <h1 className="text-[1rem] font-bold lg:text-[1.75rem]">
          꾸준히 운동하기
        </h1>
        <div className="flex flex-col gap-[0.375rem]">
          <span className="text-[0.625rem] text-textSub lg:text-[1.25rem]">
            총 소요시간
          </span>
          <div className="flex items-center justify-between font-semibold">
            <span className="text-[0.9425rem] lg:text-[1.75rem]">135 분</span>
            <span className="text-[0.625rem] lg:text-[1.25rem]">
              마지막 시도 없음
            </span>
          </div>
        </div>
      </section>
      <section>
        <ol className="flex flex-col gap-3 py-3 lg:gap-6 lg:py-[2.125rem]">
          <li className="flex items-center justify-between rounded-[0.375rem] bg-backgroundGray p-3 font-semibold lg:rounded-xl lg:p-6">
            <p className="text-[0.75rem] lg:text-[1.5rem]">
              🎽 &nbsp;물통, 운동복 챙기기&nbsp;&nbsp;
              <span className="text-[0.625rem] text-textSecondary lg:text-[1.25rem]">
                5분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="lg:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden lg:block" />
          </li>
          <li className="flex items-center justify-between rounded-[0.375rem] bg-backgroundGray p-3 font-semibold lg:rounded-xl lg:p-6">
            <p className="text-[0.75rem] lg:text-[1.5rem]">
              🧘 &nbsp;간단한 스트레칭&nbsp;&nbsp;
              <span className="text-[0.625rem] text-textSecondary lg:text-[1.25rem]">
                10분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="lg:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden lg:block" />
          </li>
          <li className="flex items-center justify-between rounded-[0.375rem] bg-backgroundGray p-3 font-semibold lg:rounded-xl lg:p-6">
            <p className="text-[0.75rem] lg:text-[1.5rem]">
              🏋️ &nbsp;가슴 운동&nbsp;&nbsp;
              <span className="text-[0.625rem] text-textSecondary lg:text-[1.25rem]">
                30분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="lg:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden lg:block" />
          </li>
          <li className="flex items-center justify-between rounded-[0.375rem] bg-backgroundGray p-3 font-semibold lg:rounded-xl lg:p-6">
            <p className="text-[0.75rem] lg:text-[1.5rem]">
              💪 &nbsp;이두 운동&nbsp;&nbsp;
              <span className="text-[0.625rem] text-textSecondary lg:text-[1.25rem]">
                20분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="lg:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden lg:block" />
          </li>
          <li className="flex items-center justify-between rounded-[0.375rem] bg-backgroundGray p-3 font-semibold lg:rounded-xl lg:p-6">
            <p className="text-[0.75rem] lg:text-[1.5rem]">
              🏃🏻 &nbsp;유산소 하기&nbsp;&nbsp;
              <span className="text-[0.625rem] text-textSecondary lg:text-[1.25rem]">
                30분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="lg:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden lg:block" />
          </li>
        </ol>
      </section>
      <section className="flex w-full flex-col gap-3 pt-[1.125rem] lg:gap-6 lg:pt-8">
        <h3 className="text-[0.75rem] font-semibold lg:text-2xl">
          루틴을 어떻게 수행하고 있는지 작성해주세요
        </h3>
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 234 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-0.00012207 6.23071C-0.00012207 2.917 2.68617 0.230713 5.99988 0.230713H228C231.314 0.230713 234 2.917 234 6.23071V40.7307C234 44.0444 231.314 46.7307 228 46.7307H5.99988C2.68617 46.7307 -0.00012207 44.0444 -0.00012207 40.7307V6.23071Z"
            fill="#F4F4F4"
          />
          <g clip-path="url(#clip0_649_8274)">
            <path
              d="M117 14.1057C111.825 14.1057 107.625 18.3057 107.625 23.4807C107.625 28.6557 111.825 32.8557 117 32.8557C122.175 32.8557 126.375 28.6557 126.375 23.4807C126.375 18.3057 122.175 14.1057 117 14.1057ZM121.687 24.4182H117.937V28.1682H116.062V24.4182H112.312V22.5432H116.062V18.7932H117.937V22.5432H121.687V24.4182Z"
              fill="#1777E9"
            />
          </g>
          <defs>
            <clipPath id="clip0_649_8274">
              <rect
                width="22.5"
                height="22.5"
                fill="white"
                transform="translate(105.75 12.2307)"
              />
            </clipPath>
          </defs>
        </svg>
      </section>
    </section>
  )
}
// section four의 메인화면
export const MainFour = () => {
  return (
    <section className="flex h-fit w-full flex-col rounded-[13.5px] border-[0.375rem] border-[#E5E5E5] font-notoSans lg:rounded-[26px] lg:border-[0.75rem] xl:min-w-[35vw] 2xl:min-w-[27.225vw]">
      <nav className="mx-6 my-4 flex flex-row items-center justify-between lg:mx-12 lg:my-8">
        <Icon name="arrowNavigate" className="opacity-0" size={22.5} />
        <Icon name="close" size={22.5} className="lg:hidden" />
        <Icon name="close" size={60} className="hidden lg:block" />
      </nav>
      <section className="mx-[1.125rem] my-[1.125rem] flex flex-col gap-[1.125rem] lg:mx-[2.125rem] lg:gap-9">
        <section className="flex flex-col items-center justify-center rounded-xl bg-backgroundGray py-3 lg:py-6">
          <p className="py-3 text-[1rem] font-bold lg:py-6 lg:text-[1.75rem]">
            간단한 스트레칭
          </p>
          <p className="py-6 text-4xl font-bold lg:py-12 lg:text-7xl">09:42</p>
        </section>
        <section className="flex flex-col gap-[1.125rem] py-[1.125rem] text-[0.5625rem] text-textSub lg:gap-9 lg:py-8 lg:text-[1.125rem]">
          <ol className="flex items-center justify-between gap-2 text-center font-semibold text-textSecondary lg:gap-6">
            <li className="flex-1 rounded-xl bg-[#DFEAFF] px-[0.375rem] py-[0.75rem] text-xs text-primary lg:px-[0.75rem] lg:py-[1.5rem] lg:text-[1.4375rem]">
              매일
            </li>
            <li className="flex-1 rounded-xl bg-[#DFEAFF] px-[0.375rem] py-[0.75rem] text-xs text-primary lg:px-[0.75rem] lg:py-[1.5rem] lg:text-[1.4375rem]">
              평일
            </li>
          </ol>
          <ol className="flex items-center justify-between gap-2 text-center font-semibold text-textSecondary lg:gap-6">
            <li className="flex-1 rounded-xl bg-primary px-[0.375rem] py-[0.75rem] text-xs text-white lg:px-[0.75rem] lg:py-[1.5rem] lg:text-[1.4375rem]">
              완료하기
            </li>
          </ol>
        </section>
      </section>
      <hr className="h-[0.75rem] border-none bg-[#e5e5e5]" />
      <section>
        <ol className="flex max-h-[17vh] flex-col gap-3 overflow-y-hidden p-[1.125rem] lg:gap-6 lg:py-[2.125rem]">
          <li className="flex items-center justify-between rounded-[0.375rem] bg-backgroundGray p-3 font-semibold lg:rounded-xl lg:p-6">
            <p className="text-[0.75rem] lg:text-[1.5rem]">
              🎽 &nbsp;
              <span className="text-[#808080] line-through">
                물통, 운동복 챙기기
              </span>
              &nbsp;&nbsp;
              <span className="text-[0.625rem] text-textSecondary lg:text-[1.25rem]">
                5분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="lg:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden lg:block" />
          </li>
          <li className="flex items-center justify-between rounded-[0.375rem] bg-backgroundGray p-3 font-semibold lg:rounded-xl lg:p-6">
            <p className="text-[0.75rem] lg:text-[1.5rem]">
              <span>🧘 &nbsp;간단한 스트레칭&nbsp;&nbsp;</span>
              <span className="text-[0.625rem] text-textSecondary lg:text-[1.25rem]">
                10분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="lg:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden lg:block" />
          </li>
          <li className="flex items-center justify-between rounded-[0.375rem] bg-backgroundGray p-3 font-semibold lg:rounded-xl lg:p-6">
            <p className="text-[0.75rem] lg:text-[1.5rem]">
              🏋️ &nbsp;가슴 운동&nbsp;&nbsp;
              <span className="text-[0.625rem] text-textSecondary lg:text-[1.25rem]">
                30분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="lg:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden lg:block" />
          </li>
        </ol>
      </section>
    </section>
  )
}
// sectionFive의 메인화면
export const MainFive: React.FC<{
  setShowSix: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setShowSix }) => {
  return (
    <section className="lg:scrollbar-hidden flex h-fit w-full flex-col rounded-[13.5px] border-[0.375rem] border-[#E5E5E5] py-6 font-notoSans lg:rounded-[26px] lg:border-[0.75rem] lg:scrollbar-hide">
      <nav className="flex flex-col items-center justify-center">
        <h1 className="mx-6 flex h-9 items-center text-xs font-semibold lg:h-16 lg:text-2xl">
          통계
        </h1>
        <ol className="flex w-full flex-row items-center justify-around text-[0.625rem] lg:text-xl">
          <li
            className="flex flex-1 items-center justify-center py-2 font-bold text-primary lg:h-16"
            style={{ borderBottom: '3px solid #1777E9' }}
          >
            기간별
          </li>
          <li className="flex flex-1 justify-center py-2">루틴별</li>
        </ol>
      </nav>
      <section className="m-[1.125rem] flex flex-col gap-[1.125rem] lg:m-[2.125rem] lg:gap-9">
        <h1 className="text-[0.9375rem] font-bold lg:text-3xl">
          지금 까지 <span className="text-primary">연속 15일</span>동안
          <br />
          루틴을 100% 달성했어요
        </h1>
        <ol className="flex flex-col gap-[1.125rem] text-textPrimary">
          <li className="flex justify-between text-[0.65625rem] lg:text-xl">
            최고 연속 달성
            <span className="text-[0.75rem] font-bold lg:text-2xl">21일</span>
          </li>
          <li className="flex justify-between text-[0.65625rem] lg:text-xl">
            누적 달성{' '}
            <span className="text-[0.75rem] font-bold lg:text-2xl">123일</span>
          </li>
        </ol>
      </section>
      <section className="m-[1.125rem] flex flex-col gap-[1.125rem] lg:gap-9">
        <nav className="flex items-center justify-between">
          <Icon name="arrowNavigate" size={22} className="lg:hidden" />
          <Icon name="arrowNavigate" size={44} className="hidden lg:block" />
          <div className="flex items-center justify-center gap-[0.125rem] text-[0.625rem] lg:text-xl">
            <span className="flex items-center justify-center">2024.04</span>
            <Icon name="chart" size={12} className="lg:hidden" />
            <Icon name="chart" size={24} className="hidden lg:block" />
          </div>
          <Icon
            name="phoneArrow"
            size={12}
            className="flex justify-end lg:hidden"
          />
          <Icon
            name="phoneArrow"
            size={24}
            className="hidden lg:flex lg:justify-end"
          />
        </nav>
        <section>
          {calendar.map((week, i) => (
            <ol key={i} className="flex gap-1">
              {week.map((day, j) => (
                <li
                  key={j}
                  className={`flex size-9 flex-1 items-center justify-center text-center lg:size-[4.375rem] ${
                    day ? 'text-textPrimary' : 'text-textSecondary'
                  }`}
                >
                  {day == null ? (
                    ''
                  ) : day === 1 ? (
                    <Icon name="check1" />
                  ) : day === 2 ? (
                    <Icon name="check2" />
                  ) : day === 3 ? (
                    <Icon name="check3" />
                  ) : (
                    <span className="text-[0.5625rem] lg:text-[1.125rem]">
                      {day}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          ))}
        </section>
      </section>
      <hr className="h-[2px] border-none bg-[#e5e5e5] lg:h-1" />
      <footer className="mx-[1.125rem] mt-[1.125rem] flex flex-row justify-between lg:my-9">
        <p className="flex items-center justify-center text-[0.625rem] lg:text-xl">
          22일 월요일{' '}
          <span className="ml-4 mr-2 text-[0.75rem] font-bold text-primary lg:text-2xl">
            완료1
          </span>
          <span className="text-[0.75rem] font-bold text-textPrimary lg:text-2xl">
            실패2
          </span>
        </p>
        <Icon name="arrowNavigate" size={22} className="rotate-180 lg:hidden" />
        <Icon
          name="arrowNavigate"
          size={44}
          className="hidden rotate-180 lg:block"
        />
      </footer>
      <section className="hidden lg:flex lg:w-full">
        <SectionAnimationLongContainer
          delay={100}
          threshold={0.1}
          nextAnimation={setShowSix}
        >
          <MainSix />
        </SectionAnimationLongContainer>
      </section>
    </section>
  )
}
// sectionSix의 메인화면
export const MainSix = () => {
  return (
    <section className="flex h-fit w-full flex-col rounded-[13.5px] border-[0.375rem] border-[#E5E5E5] py-3 font-notoSans lg:rounded-[26px] lg:border-0 xl:min-w-[40vw] 2xl:min-w-[27.225vw]">
      <nav className="flex flex-col items-center justify-center lg:hidden">
        <h1 className="mx-6 flex h-9 items-center text-xs font-semibold lg:h-16 lg:text-2xl">
          통계
        </h1>
        <ol className="flex w-full flex-row items-center justify-around text-[0.625rem] lg:text-xl">
          <li
            className="flex flex-1 items-center justify-center py-2 font-bold text-primary lg:h-16"
            style={{ borderBottom: '3px solid #1777E9' }}
          >
            기간별
          </li>
          <li className="flex flex-1 justify-center py-2">루틴별</li>
        </ol>
      </nav>
      <section className="m-[1.125rem] flex flex-col gap-[1.125rem] lg:m-[2.125rem] lg:gap-9">
        <section className="flex flex-row">
          <h1 className="flex flex-1 flex-col text-[0.9375rem] font-bold lg:text-3xl">
            지난 주에 비해
            <br />
            <span className="text-primary">
              12% 더 <br />
              달성했어요
            </span>
            <span className="text-[0.625rem] font-normal lg:text-xl">
              04.21 ~ 04.27
            </span>
          </h1>
          <div className="flex flex-1">
            <CircularProgress percentage={60} previousPercentage={48} />
          </div>
        </section>
        <ol className="flex flex-col gap-[1.125rem]">
          <li className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center text-[0.625rem] lg:text-xl">
              <Icon name="successIcon" size={18} className="mr-2 lg:hidden" />
              <Icon
                name="successIcon"
                size={35}
                className="mr-2 hidden lg:block"
              />
              달성 루틴{' '}
            </div>
            <span className="text-xs font-bold text-primary lg:text-2xl">
              24개
            </span>
          </li>
          <li className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center text-[0.625rem] lg:text-xl">
              <Icon name="failIcon" size={18} className="mr-2 lg:hidden" />
              <Icon
                name="failIcon"
                size={35}
                className="mr-2 hidden lg:block"
              />
              실패 루틴{' '}
            </div>
            <span className="text-xs font-bold text-primary lg:text-2xl">
              24개
            </span>
          </li>
        </ol>
        <div className="flex items-center justify-center rounded-xl bg-[#DFEAFF] p-[0.375rem] lg:rounded-3xl lg:p-4">
          <div className="my-auto flex items-center justify-center text-[0.625rem] text-primary lg:text-xl">
            자세히 보기
          </div>
          <Icon name="blueArrow" size={22} className="rotate-180 lg:hidden" />
          <Icon
            name="blueArrow"
            size={44}
            className="hidden rotate-180 lg:block"
          />
        </div>
      </section>
      <section className="m-[1.125rem] flex flex-col gap-[1.125rem] lg:m-[2.125rem] lg:gap-9">
        <div className="flex flex-col gap-1">
          <h1 className="text-[1rem] font-bold lg:text-3xl">
            최근 어려워한 루틴이에요
          </h1>
          <p className="text-[0.625rem] text-textSub lg:text-xl">
            단순한 루틴의 달성률이 68%나 더 높게 나타나요. <br /> 조금 더
            간단하게 해보는 건 어떨까요?
          </p>
        </div>
        <div className="flex flex-col gap-3 rounded-xl bg-[#F4F4F4] p-3 lg:p-6">
          <h1 className="text-[0.625rem] font-bold lg:text-xl">
            아침 조깅하기
          </h1>
          <ol className="flex flex-row">
            <li className="flex flex-1 flex-col items-center justify-center gap-[0.25rem] text-[0.575rem] lg:text-[1.125rem]">
              <div className="flex size-[1.25rem] items-center justify-center rounded-full bg-[#D9D9D9] p-1 text-[0.575rem] text-white lg:size-[2.5rem] lg:text-[1.125rem]">
                07
              </div>
              일
            </li>
            <li className="flex flex-1 flex-col items-center justify-center gap-[0.25rem] text-[0.575rem] lg:text-[1.125rem]">
              <Icon name="successIcon" size={18} className="lg:hidden" />
              <Icon name="successIcon" size={42} className="hidden lg:block" />
              월
            </li>
            <li className="flex flex-1 flex-col items-center justify-center gap-[0.25rem] text-[0.575rem] lg:text-[1.125rem]">
              <Icon name="failIcon" size={18} className="lg:hidden" />
              <Icon name="failIcon" size={42} className="hidden lg:block" />화
            </li>
            <li className="flex flex-1 flex-col items-center justify-center gap-[0.25rem] text-[0.575rem] lg:text-[1.125rem]">
              <Icon name="successIcon" size={18} className="lg:hidden" />
              <Icon name="successIcon" size={42} className="hidden lg:block" />
              수
            </li>
            <li className="flex flex-1 flex-col items-center justify-center gap-[0.25rem] text-[0.575rem] lg:text-[1.125rem]">
              <div className="flex size-[1.25rem] items-center justify-center rounded-full bg-[#D9D9D9] p-1 text-[0.575rem] text-white lg:size-[2.5rem] lg:text-[1.125rem]">
                11
              </div>
              목
            </li>
            <li className="flex flex-1 flex-col items-center justify-center gap-[0.25rem] text-[0.575rem] lg:text-[1.125rem]">
              <div className="flex size-[1.25rem] items-center justify-center rounded-full bg-[#D9D9D9] p-1 text-[0.575rem] text-white lg:size-[2.5rem] lg:text-[1.125rem]">
                12
              </div>
              금
            </li>
            <li className="flex flex-1 flex-col items-center justify-center gap-[0.25rem] text-[0.575rem] lg:text-[1.125rem]">
              <div className="flex size-[1.25rem] items-center justify-center rounded-full bg-[#D9D9D9] p-1 text-[0.575rem] text-white lg:size-[2.5rem] lg:text-[1.125rem]">
                13
              </div>
              토
            </li>
          </ol>
        </div>
      </section>
    </section>
  )
}
// sectionEight의 메인화면
export const MainEight = () => {
  return (
    <section className="px-[0.75rem] 2xl:px-[11rem]">
      <EmblaCarousel />
    </section>
  )
}
