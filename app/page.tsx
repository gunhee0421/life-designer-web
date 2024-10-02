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

      <section>
        <div>
          <h1>당신만의 루틴으로</h1>
          <h1>더 나은 삶을 디자인하세요</h1>
          <p>라디와 함께 간편하게 목표를 설정하고 습관을 만들어보세요</p>
        </div>
        <div>
          <p>지금 시작하기</p>
          <Icon name="arrowNavigate" />
        </div>
        <Image src={heroSection} alt="woman yoga with routine app" />
        <div>
          <div>
            <Icon name="playstore" />
            <div>
              <p>Google Play에서</p>
              <p>다운로드</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Icon name="apple" />
            <div>
              <p>App Store에서</p>
              <p>다운로드</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h1>About 라디</h1>
          <p>
            라디는 AI를 활용하여 번거로운 조작 없이도 당신에게 맞는 루틴을
            찾아드립니다.
          </p>
        </div>
        <div>
          <div>
            <Icon name="arrowTarget" size={52} />
            <p>내 목표에 맞는</p>
            <p>맞춤 루틴 생성</p>
          </div>
          <Icon name="arrowContinue" />
          <div>
            <Icon name="growthChart" size={52} />
            <p>내 목표에 맞는</p>
            <p>맞춤 루틴 생성</p>
          </div>
          <Icon name="arrowContinue" />
          <div>
            <Icon name="growthPlant" size={52} />
            <p>내 목표에 맞는</p>
            <p>맞춤 루틴 생성</p>
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
