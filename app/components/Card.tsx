import Image from 'next/image'
import introLadi from '../../public/intro_ladi.webp'

export const BetaTestCard = () => {
  return (
    <section className="flex h-[150px] w-[270px] flex-col gap-[5px] rounded px-[0.875rem] py-3 shadow-cardMobile lg:gap-6 lg:rounded-3xl lg:px-[4rem] lg:py-[3.5rem] lg:shadow-cardWeb xl:h-[800px] xl:w-[1080px] 2xl:h-[720px] 2xl:w-[1280px]">
      <h1 className="text-[0.875rem] font-bold text-primary lg:text-6xl">
        라디 - 베타 테스트 오픈!
      </h1>
      <h2 className="text-[0.375rem] text-textSub lg:text-3xl">
        "시험도, 다이어트도, 라디와 함께! 더 나은 삶을 디자인하세요!✨"
      </h2>
      <div className="flex h-full w-full">
        <div className="flex w-full flex-row items-center justify-between">
          <Image
            src={'/study_ladi.gif'}
            alt="공부하는 라디"
            width={72}
            height={81}
            className="lg:hidden"
            loading="lazy"
          />
          <Image
            src={'/study_ladi.gif'}
            alt="공부하는 라디"
            width={340}
            height={382}
            className="hidden lg:block"
            loading="lazy"
          />
          <div className="text-[0.375rem] lg:text-3xl">
            <h1 className="font-bold">진행중인 이벤트</h1>
            <br />
            <ul className="font-semibold">
              <li>1. 라디 서보고 기프티콘 받아가자!</li>
              <li>2. 루틴 오류 제보하고 기프티콘 받아가자!</li>
              <li>3. 3,900원의 유료 요금제를 무료로 이용!</li>
            </ul>
            <br />
            <a
              className="text-[0.375rem] font-bold text-primary underline lg:text-3xl"
              href="https://life-designer.notion.site/123ddd0f35ba80faa9a6deb5d4e70322?pvs=4"
            >
              자세히 알아보기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
export const IntroLadiCard = () => {
  return (
    <section className="flex h-[150px] w-[270px] flex-col gap-[5px] rounded shadow-cardMobile lg:h-[720px] lg:w-[1280px] lg:gap-6 lg:rounded-3xl lg:shadow-cardWeb">
      <Image
        src={introLadi}
        alt="라디 소개 이미지"
        width={270}
        height={150}
        className="w-full"
        loading="lazy"
      />
    </section>
  )
}
