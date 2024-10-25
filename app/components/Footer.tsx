export const FooterThree = () => {
  return (
    <footer className="flex flex-col gap-3 md:gap-[3.75rem]">
      <p className="text-2xl font-bold md:text-5xl">
        번거로운 입력은 <span className="text-[#AAAAAA]">줄이고,</span>
        <br />
        사용자의 부담은 <span className="text-[#707070]">낮추고,</span>
        <br />
        목표 달성률은 <span className="text-[#595959]">높입니다.</span>
      </p>
      <p className="text-[0.9375rem] text-textSecondary md:text-4xl">
        생성형 AI와 루틴 데이터를 바탕으로
        <br />
        사용자의 목표에 최적화된 루틴을 만들어줘요.
      </p>
    </footer>
  )
}
