import Icon from './icons'

export const Header = () => {
  return (
    <div>
      <header className="flex h-[52px] flex-row items-center justify-between p-4 font-sans md:h-[104px] md:px-20">
        <p className="text-[12px] font-[500] text-[#1777E9] md:text-[20px]">
          나만의 Life Designer: 라디
        </p>
        <ol className="hidden gap-[9px] text-[1.25rem] font-[500] text-textSecondary md:flex">
          <li className="w-[6.25rem]">라디 소개</li>
          <li className="w-[6.25rem]">주요 기능</li>
          <li className="w-[6.25rem]">고객 지원</li>
          <li className="w-[6.25rem]">앱 다운로드</li>
        </ol>
        <Icon className="md:hidden" name="hambuger" />
      </header>
    </div>
  )
}
