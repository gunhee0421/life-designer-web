import Image from 'next/image'
import heroSection from '../public/hero_section.png'
import Icon from './components/icons'

export default function Home() {
  return (
    <div>
      <header className="flex h-[52px] flex-row justify-between p-4">
        <p>나만의 Life Designer: 라디</p>
        <Icon name="hambuger" />
      </header>

      <section className="px-8 py-14 text-center">
        <div className="mb-5">
          <h1 className="text-textPrimary text-2xl font-bold">
            당신만의 루틴으로
          </h1>
          <h1 className="text-textPrimary mb-2 text-2xl font-bold">
            더 나은 삶을 디자인하세요
          </h1>
          <p className="text-textSecondary text-xs">
            라디와 함께 간편하게 목표를 설정하고 습관을 만들어보세요
          </p>
        </div>

        <div className="bg-primary mb-20 inline-flex w-auto gap-2 rounded-md px-4 py-2">
          <p className="font-semibold text-white">지금 시작하기</p>
          <Icon name="arrowNavigate" />
        </div>

        <Image
          src={heroSection}
          alt="woman yoga with routine app"
          className="mb-12"
        />

        <div className="inline-flex flex-row gap-4">
          <div className="inline-flex items-center gap-2 rounded-md bg-black px-2 py-1 text-start">
            <Icon name="playstore" size={32} />
            <div className="text-white">
              <p>Google Play에서</p>
              <p className="text-sm">다운로드</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-md bg-black px-2 py-1 text-start">
            <Icon name="apple" size={32} />
            <div className="text-white">
              <p>Apple Store에서</p>
              <p className="text-sm">다운로드</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f9f9] px-6 py-10 text-center">
        <div>
          <h1 className="text-textPrimary mb-4 text-2xl font-bold">
            About 라디
          </h1>
          <p className="text-textSecondary text-lg">
            라디는 AI를 활용하여 번거로운 조작 없이도 당신에게 맞는 루틴을
            찾아드립니다.
          </p>
        </div>

        <div className="flex items-center gap-2 space-x-4 overflow-x-auto p-5 pb-12 text-start">
          <div className="min-w-[200px] rounded-md bg-white p-7 pt-16 shadow-md">
            <Icon className="mb-4" name="arrowTarget" size={52} />
            <p className="font-bold text-[#5c5c5c]">내 목표에 맞는</p>
            <p className="font-bold text-[#5c5c5c]">맞춤 루틴 생성</p>
          </div>
          <Icon name="arrowContinue" />
          <div className="min-w-[200px] rounded-md bg-white p-7 pt-16 shadow-md">
            <Icon className="mb-4" name="growthChart" size={52} />
            <p className="font-bold text-[#5c5c5c]">루틴 수행을 통한</p>
            <p className="font-bold text-[#5c5c5c]">습관 형성</p>
          </div>
          <Icon name="arrowContinue" />
          <div className="min-w-[200px] rounded-md bg-white p-7 pt-16 shadow-md">
            <Icon className="mb-4" name="growthPlant" size={52} />
            <p className="font-bold text-[#5c5c5c]">나에게 맞는</p>
            <p className="font-bold text-[#5c5c5c]">갓생 살기!</p>
          </div>
        </div>
      </section>

      <section>
        <h1>Key Features</h1>
        <div>
          <div>
            <p>기능 1</p>
            <h2>AI 기반 맞춤 루틴 생성</h2>
            <p>간단한 입력만으로 AI가 최적의 루틴을 생성합니다.</p>
          </div>
          <div></div>
        </div>

        <div>
          <div>
            <p>기능 2</p>
            <h2>루틴 수행 및 기록</h2>
            <p>타이머를 통해 루틴을 수행하고 진행 상황을 쉽게 기록하세요.</p>
          </div>
          <div></div>
        </div>

        <div>
          <div>
            <p>기능 3</p>
            <h2>루틴 피드백 제공</h2>
            <p>수행 기록을 바탕으로 루틴 개선점을 제안합니다.</p>
          </div>
          <div></div>
        </div>

        <div>
          <div>
            <p>기능 4</p>
            <h2>루틴 회고 작성</h2>
            <p>루틴에 대한 리뷰를 작성하여 성취감을 높여보세요</p>
          </div>
          <div></div>
        </div>
      </section>

      <footer>
        <h3>나만의 Life Designer: 라디</h3>
        <p>대표: 신홍기</p>
        <p>이메일: life.designer.dev@gmail.com</p>

        <p>서비스 이용약관</p>
        <p>개인정보 처리방침</p>

        <div></div>
      </footer>
    </div>
  )
}
