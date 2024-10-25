import Icon from './icons'
import heroSection from '../../public/hero_section.png'
import Image from 'next/image'
import '../styles/phone.css'

export const Main = () => {
  return (
    <section className="justify-center px-8 py-14 text-center md:mx-40 md:my-40 md:flex md:text-left">
      <div className="flex flex-col">
        <header>
          <div className="mb-5">
            <h1 className="text-2xl font-bold text-textPrimary md:h-[3.75rem] md:text-[3.5rem]">
              당신만의 루틴으로
            </h1>
            <h2 className="mb-2 text-2xl font-bold text-textPrimary md:h-[3.75rem] md:text-[3.5rem]">
              더 나은 삶을 디자인하세요
            </h2>
            <p className="mt whitespace-nowrap text-xs font-medium text-textSecondary md:mb-10 md:mt-8 md:h-[2.25rem] md:text-[2rem]">
              라디와 함께 간편하게 목표를 설정하고 습관을 만들어보세요
            </p>
          </div>
        </header>

        <nav className="mb-10 hidden flex-row gap-4 md:flex">
          <a
            className="inline-flex items-center gap-2 rounded-md bg-black px-2 py-1 text-start"
            href="https://play.google.com"
          >
            <Icon name="playstore" size={32} />
            <div className="text-white">
              <p className="text-[16px] font-medium">Google Play에서</p>
              <p className="text-[14px] font-medium">다운로드</p>
            </div>
          </a>
          <a
            className="inline-flex items-center gap-2 rounded-md bg-black px-2 py-1 text-start"
            href="https://apple.com"
          >
            <Icon name="apple" size={32} />
            <div className="text-white">
              <p className="text-[16px] font-medium">Apple Store에서</p>
              <p className="text-[14px] font-medium">다운로드</p>
            </div>
          </a>
        </nav>
      </div>

      <div className="flex justify-center">
        <Image
          src={heroSection}
          width={251}
          height={175}
          alt="여자가 요가 앱을 사용하여 루틴을 관리하는 모습"
          className="mb-24 mt-24 md:hidden"
        />
        <Image
          src={heroSection}
          width={980}
          height={671}
          alt="여자가 요가 앱을 사용하여 루틴을 관리하는 모습"
          className="mb-12 hidden max-h-[671px] md:block"
        />
      </div>

      <nav className="inline-flex flex-col gap-4 md:hidden">
        <a
          className="inline-flex items-center gap-2 rounded-md bg-black px-2 py-1 text-start"
          href="https://play.google.com"
        >
          <Icon name="playstore" size={16} />
          <div className="text-white">
            <p className="text-[10px] font-medium">Google Play에서</p>
            <p className="text-[8px] font-medium">다운로드</p>
          </div>
        </a>

        <a
          className="inline-flex items-center gap-2 rounded-md bg-black px-2 py-1 text-start"
          href="https://apple.com"
        >
          <Icon name="apple" size={16} />
          <div className="text-white">
            <p className="text-[10px] font-medium">Apple Store에서</p>
            <p className="text-[8px] font-medium">다운로드</p>
          </div>
        </a>
      </nav>
    </section>
  )
}

export const MainTwo = () => {
  return (
    <section className="phoneBorderMobile flex flex-col font-notoSans md:w-[27.225vw]">
      <nav className="mx-[1.125rem] my-3 flex flex-row items-center justify-between md:mx-[2.125rem] md:my-[1.5rem]">
        <Icon name="arrowNavigate" className="md:hidden" size={22.5} />
        <Icon name="arrowNavigate" className="hidden md:block" size={44} />
        <span className="text-[0.75rem] font-semibold md:text-[1.5rem]">
          생성하기
        </span>
        <Icon name="arrowNavigate" className="opacity-0" size={22.5} />
      </nav>
      <section className="mx-[1.125rem] my-6 flex flex-col gap-3 md:mx-[2.125rem]">
        <h1 className="text-[1rem] font-bold md:text-[1.75rem]">
          시작 전에 알람 드릴까요?
        </h1>
        <div className="flex flex-col gap-[1.125rem] text-[0.5625rem] text-textSub md:text-[1.125rem]">
          <div className="flex flex-col gap-3 md:gap-6">
            <h3>알림</h3>
            <div className="bg-backgroundGray rounded-[0.1875rem] p-3 text-[1rem] md:rounded-[0.3125rem] md:p-6 md:text-[1.75rem]">
              알림 시간
            </div>
          </div>
          <div className="flex flex-col gap-3 md:gap-6">
            <h3>반복 요일</h3>
            <ol className="flex items-center justify-between gap-3 text-center font-semibold text-textSecondary md:gap-6">
              <li className="flex-1 rounded bg-[#DFEAFF] px-[0.375rem] py-[0.75rem] text-primary md:px-[0.75rem] md:py-[1.5rem] md:text-[1.4375rem]">
                매일
              </li>
              <li className="flex-1 rounded bg-[#f4f4f4] px-[0.375rem] py-[0.75rem] md:px-[0.75rem] md:py-[1.5rem] md:text-[1.4375rem]">
                평일
              </li>
            </ol>
            <ol className="flex items-center justify-between gap-3 text-center font-semibold text-textSecondary md:gap-6">
              <li className="flex-1 rounded bg-[#f4f4f4] px-[0.375rem] py-[0.75rem] md:px-[0.75rem] md:py-[1.5rem] md:text-[1.4375rem]">
                주말
              </li>
              <li className="flex-1 rounded bg-[#f4f4f4] px-[0.375rem] py-[0.75rem] md:px-[0.75rem] md:py-[1.5rem] md:text-[1.4375rem]">
                직접 선택
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h3>시작 시간</h3>
            <div className="inputMobile p-3 text-[1rem] text-textPrimary md:p-6 md:text-[1.75rem]">
              7:00 PM
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-4">
            <h3>루틴 목표</h3>
            <div className="inputMobile p-3 text-[1rem] text-textPrimary md:p-6 md:text-[1.75rem]">
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
    <section className="phoneBorderMobile flex flex-col gap-3 px-[1.125rem] pt-3 font-notoSans md:w-[27.5vw] md:px-8 md:pt-6">
      <section className="flex flex-col gap-[1.125rem] py-[1.125rem] md:gap-[2.175rem]">
        <h1 className="text-[1rem] font-bold md:text-[1.75rem]">
          꾸준히 운동하기
        </h1>
        <div className="flex flex-col gap-[0.375rem]">
          <span className="text-[0.625rem] text-textSub md:text-[1.25rem]">
            총 소요시간
          </span>
          <div className="flex items-center justify-between font-semibold">
            <span className="text-[0.9425rem] md:text-[1.75rem]">135 분</span>
            <span className="text-[0.625rem] md:text-[1.25rem]">
              마지막 시도 없음
            </span>
          </div>
        </div>
      </section>
      <section>
        <ol className="flex flex-col gap-3 py-3 md:gap-6 md:py-[2.125rem]">
          <li className="bg-backgroundGray flex items-center justify-between rounded-[0.375rem] p-3 font-semibold md:rounded-xl md:p-6">
            <p className="text-[0.75rem] md:text-[1.5rem]">
              🎽 &nbsp;물통, 운동복 챙기기&nbsp;&nbsp;
              <span className="text-[0.625rem] text-textSecondary md:text-[1.25rem]">
                5분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="md:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden md:block" />
          </li>
          <li className="bg-backgroundGray flex items-center justify-between rounded-[0.375rem] p-3 font-semibold md:rounded-xl md:p-6">
            <p className="text-[0.75rem] md:text-[1.5rem]">
              🧘 &nbsp;간단한 스트레칭&nbsp;&nbsp;
              <span className="text-[0.625rem] text-textSecondary md:text-[1.25rem]">
                10분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="md:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden md:block" />
          </li>
          <li className="bg-backgroundGray flex items-center justify-between rounded-[0.375rem] p-3 font-semibold md:rounded-xl md:p-6">
            <p className="text-[0.75rem] md:text-[1.5rem]">
              🏋️ &nbsp;가슴 운동&nbsp;&nbsp;
              <span className="text-[0.625rem] text-textSecondary md:text-[1.25rem]">
                30분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="md:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden md:block" />
          </li>
          <li className="bg-backgroundGray flex items-center justify-between rounded-[0.375rem] p-3 font-semibold md:rounded-xl md:p-6">
            <p className="text-[0.75rem] md:text-[1.5rem]">
              💪 &nbsp;이두 운동&nbsp;&nbsp;
              <span className="text-[0.625rem] text-textSecondary md:text-[1.25rem]">
                20분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="md:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden md:block" />
          </li>
          <li className="bg-backgroundGray flex items-center justify-between rounded-[0.375rem] p-3 font-semibold md:rounded-xl md:p-6">
            <p className="text-[0.75rem] md:text-[1.5rem]">
              🏃🏻 &nbsp;유산소 하기&nbsp;&nbsp;
              <span className="text-[0.625rem] text-textSecondary md:text-[1.25rem]">
                30분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="md:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden md:block" />
          </li>
        </ol>
      </section>
      <section className="flex w-full flex-col gap-3 pt-[1.125rem] md:gap-6 md:pt-8">
        <h3 className="text-[0.75rem] font-semibold md:text-2xl">
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
    <section className="phoneBorderMobile flex h-fit w-full flex-col font-notoSans md:w-[27.225vw]">
      <nav className="mx-6 my-4 flex flex-row items-center justify-between md:mx-12 md:my-8">
        <Icon name="arrowNavigate" className="opacity-0" size={22.5} />
        <Icon name="close" size={22.5} className="md:hidden" />
        <Icon name="close" size={60} className="hidden md:block" />
      </nav>
      <section className="mx-[1.125rem] my-[1.125rem] flex flex-col gap-[1.125rem] md:mx-[2.125rem] md:gap-9">
        <section className="bg-backgroundGray flex flex-col items-center justify-center rounded-xl py-3 md:py-6">
          <p className="py-3 text-[1rem] font-bold md:py-6 md:text-[1.75rem]">
            간단한 스트레칭
          </p>
          <p className="py-6 text-4xl font-bold md:py-12 md:text-7xl">09:42</p>
        </section>
        <section className="flex flex-col gap-[1.125rem] py-[1.125rem] text-[0.5625rem] text-textSub md:gap-9 md:py-8 md:text-[1.125rem]">
          <ol className="flex items-center justify-between gap-2 text-center font-semibold text-textSecondary md:gap-6">
            <li className="flex-1 rounded-xl bg-[#DFEAFF] px-[0.375rem] py-[0.75rem] text-xs text-primary md:px-[0.75rem] md:py-[1.5rem] md:text-[1.4375rem]">
              매일
            </li>
            <li className="flex-1 rounded-xl bg-[#DFEAFF] px-[0.375rem] py-[0.75rem] text-xs text-primary md:px-[0.75rem] md:py-[1.5rem] md:text-[1.4375rem]">
              평일
            </li>
          </ol>
          <ol className="flex items-center justify-between gap-2 text-center font-semibold text-textSecondary md:gap-6">
            <li className="flex-1 rounded-xl bg-primary px-[0.375rem] py-[0.75rem] text-xs text-white md:px-[0.75rem] md:py-[1.5rem] md:text-[1.4375rem]">
              완료하기
            </li>
          </ol>
        </section>
      </section>
      <hr className="h-[0.75rem] border-none bg-[#e5e5e5]" />
      <section>
        <ol className="flex max-h-[17vh] flex-col gap-3 overflow-y-hidden p-[1.125rem] md:gap-6 md:py-[2.125rem]">
          <li className="bg-backgroundGray flex items-center justify-between rounded-[0.375rem] p-3 font-semibold md:rounded-xl md:p-6">
            <p className="text-[0.75rem] md:text-[1.5rem]">
              🎽 &nbsp;
              <span className="text-[#808080] line-through">
                물통, 운동복 챙기기
              </span>
              &nbsp;&nbsp;
              <span className="text-[0.625rem] text-textSecondary md:text-[1.25rem]">
                5분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="md:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden md:block" />
          </li>
          <li className="bg-backgroundGray flex items-center justify-between rounded-[0.375rem] p-3 font-semibold md:rounded-xl md:p-6">
            <p className="text-[0.75rem] md:text-[1.5rem]">
              <span>🧘 &nbsp;간단한 스트레칭&nbsp;&nbsp;</span>
              <span className="text-[0.625rem] text-textSecondary md:text-[1.25rem]">
                10분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="md:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden md:block" />
          </li>
          <li className="bg-backgroundGray flex items-center justify-between rounded-[0.375rem] p-3 font-semibold md:rounded-xl md:p-6">
            <p className="text-[0.75rem] md:text-[1.5rem]">
              🏋️ &nbsp;가슴 운동&nbsp;&nbsp;
              <span className="text-[0.625rem] text-textSecondary md:text-[1.25rem]">
                30분
              </span>
            </p>
            <Icon name="phoneArrow" size={12} className="md:hidden" />
            <Icon name="phoneArrow" size={22} className="hidden md:block" />
          </li>
        </ol>
      </section>
    </section>
  )
}
