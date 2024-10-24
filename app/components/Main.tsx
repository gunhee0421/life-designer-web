import Icon from './icons'
import heroSection from '../../public/hero_section.png'
import Image from 'next/image'
import '../styles/phone.css'

export const Main = () => {
  return (
    <section className="justify-center px-8 py-14 text-center md:mx-40 md:mt-40 md:flex md:text-left">
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
    <section className="phoneBorderMobile font-notoSans m-2 h-fit w-full md:flex-1">
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
        <div className="text-textSub flex flex-col gap-6 text-[1.125rem]">
          <div className="flex flex-col gap-3">
            <h3>알림</h3>
            <div className="inputMobile p-3 text-[1rem]">알림 시간</div>
          </div>
          <div className="flex flex-col gap-3">
            <h3>반복 요일</h3>
            <ol className="flex items-center justify-between gap-3 text-center font-semibold text-textSecondary">
              <li className="flex-1 rounded bg-[#DFEAFF] px-[0.375rem] py-[0.75rem] text-primary">
                매일
              </li>
              <li className="flex-1 rounded bg-[#f4f4f4] px-[0.375rem] py-[0.75rem]">
                평일
              </li>
            </ol>
            <ol className="flex items-center justify-between gap-3 text-center font-semibold text-textSecondary">
              <li className="flex-1 rounded bg-[#f4f4f4] px-[0.375rem] py-[0.75rem]">
                주말
              </li>
              <li className="flex-1 rounded bg-[#f4f4f4] px-[0.375rem] py-[0.75rem]">
                직접 선택
              </li>
            </ol>
          </div>
          <div className="flex flex-col gap-3">
            <h3>시작 시간</h3>
            <div className="inputMobile p-3 text-[1rem] text-textPrimary">
              7:00 PM
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3>루틴 목표</h3>
            <div className="inputMobile p-3 text-[1rem] text-textPrimary">
              꾸준히 운동하기
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
