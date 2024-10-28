import React from 'react'

interface CircularProgressProps {
  percentage: number
  previousPercentage: number
}
const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  previousPercentage,
}) => {
  const outerRadius = 50
  const innerRadius = 42
  const strokeWidth = 7.5
  const outerCircumference = 2 * Math.PI * outerRadius
  const innerCircumference = 2 * Math.PI * innerRadius

  const outerOffset =
    outerCircumference - (percentage / 100) * outerCircumference
  const innerOffset =
    innerCircumference - (previousPercentage / 100) * innerCircumference

  return (
    <div className="relative h-[7.5rem] w-[7.5rem] md:h-[15rem] md:w-[15rem]">
      <svg width="120" height="120" className="md:hidden">
        <circle
          cx="60"
          cy="60"
          r={innerRadius}
          stroke="#D9D9D9"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={innerCircumference}
          strokeDashoffset={innerOffset}
          strokeLinecap="butt"
          transform="rotate(-90 60 60)"
        />
        <circle
          cx="60"
          cy="60"
          r={outerRadius}
          stroke="#1777E9"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={outerCircumference}
          strokeDashoffset={outerOffset}
          strokeLinecap="butt"
          transform="rotate(-90 60 60)"
        />
      </svg>
      <svg width="240" height="240" className="hidden md:block">
        <circle
          cx="10"
          cy="120"
          r={innerRadius * 2}
          stroke="#D9D9D9"
          fill="transparent"
          strokeWidth={strokeWidth * 2}
          strokeDasharray={innerCircumference * 2}
          strokeDashoffset={innerOffset * 2}
          strokeLinecap="butt"
          transform="rotate(-90 60 60)"
        />
        <circle
          cx="10"
          cy="120"
          r={outerRadius * 2}
          stroke="#1777E9"
          fill="transparent"
          strokeWidth={strokeWidth * 2}
          strokeDasharray={outerCircumference * 2}
          strokeDashoffset={outerOffset * 2}
          strokeLinecap="butt"
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
        <div className="text-2xl font-bold text-[#007bff] md:text-5xl">
          {percentage}%
        </div>
        <div className="text-[0.5rem] text-[#909090] md:text-[1.125rem]">
          지난 주 {previousPercentage}%
        </div>
      </div>
    </div>
  )
}

export default CircularProgress
