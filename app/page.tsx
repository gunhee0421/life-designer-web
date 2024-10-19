import { Header } from './components/Hedaer'
import Icon from './components/icons'
import { Main } from './components/Main'

export default function Home() {
  return (
    <div>
      <Header />
      <Main />

      <section className="bg-[#f9f9f9] px-6 py-10 text-center">
        <div>
          <h1 className="mb-4 text-2xl font-bold text-textPrimary">
            About 라디
          </h1>
          <p className="text-lg text-textSecondary">
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
