import Icon from './icons'
import heroSection from '../../public/hero_section.png'
import Image from 'next/image'

export const Main = () => {
  return (
    <section
      style={{ height: `calc(100vh - 264px)` }}
      className="justify-center px-8 py-14 text-center md:mx-40 md:mt-40 md:flex md:text-left"
    >
      <div className="flex flex-col md:justify-between">
        <div>
          <div className="mb-5">
            <h1 className="text-2xl font-bold text-textPrimary md:h-[3.75rem] md:text-[3.5rem]">
              당신만의 루틴으로
            </h1>
            <h1 className="mb-2 text-2xl font-bold text-textPrimary md:h-[3.75rem] md:text-[3.5rem]">
              더 나은 삶을 디자인하세요
            </h1>
            <p className="whitespace-nowrap text-xs font-medium text-textSecondary md:h-[2.25rem] md:text-[2rem]">
              라디와 함께 간편하게 목표를 설정하고 습관을 만들어보세요
            </p>
          </div>

          <div className="mb-16 inline-flex w-auto gap-2 rounded-md bg-primary px-5 py-3">
            <p className="font-semibold text-white">지금 시작하기</p>
            <Icon name="arrowNavigate" />
          </div>
        </div>
        <div className="mb-10 hidden flex-row gap-4 md:flex">
          <div className="inline-flex items-center gap-2 rounded-md bg-black px-2 py-1 text-start">
            <Icon name="playstore" size={32} />
            <div className="text-white">
              <p className="text-[16px] font-medium">Google Play에서</p>
              <p className="text-[14px] font-medium">다운로드</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-md bg-black px-2 py-1 text-start">
            <Icon name="apple" size={32} />
            <div className="text-white">
              <p className="text-[16px] font-medium">Apple Store에서</p>
              <p className="text-[14px] font-medium">다운로드</p>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={heroSection}
        width={251}
        height={175}
        alt="woman yoga with routine app"
        className="mb-12 md:hidden"
      />
      <Image
        src={heroSection}
        width={980}
        height={671}
        alt="woman yoga with routine app"
        className="mb-12 hidden md:block"
      />

      <div className="inline-flex flex-row gap-4 md:hidden">
        <div className="inline-flex items-center gap-2 rounded-md bg-black px-2 py-1 text-start">
          <Icon name="playstore" size={16} />
          <div className="text-white">
            <p className="text-[10px] font-medium">Google Play에서</p>
            <p className="text-[8px] font-medium">다운로드</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-md bg-black px-2 py-1 text-start">
          <Icon name="apple" size={16} />
          <div className="text-white">
            <p className="text-[10px] font-medium">Apple Store에서</p>
            <p className="text-[8px] font-medium">다운로드</p>
          </div>
        </div>
      </div>
    </section>
  )
}
