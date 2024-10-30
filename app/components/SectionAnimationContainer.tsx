'use client'

import React, { useEffect, useRef, useState } from 'react'

export const SectionAnimationContainer = ({
  children,
  delay = 0,
  threshold = 0.5,
  nextAnimation,
}: {
  children: React.ReactNode
  delay?: number
  threshold?: number
  nextAnimation?: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer = setTimeout(() => {
              setIsVisible(true)
            }, delay)
            observer.unobserve(entry.target)
            nextAnimation && nextAnimation(true)
          }
        })
      },
      { threshold: threshold },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [delay])

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-500 ${
        isVisible ? 'animation-fadeIn' : 'translate-y-10 opacity-0'
      }`}
    >
      {children}
    </div>
  )
}

export const SectionAnimationLongContainer = ({
  children,
  delay = 0,
  threshold = 0.5,
  nextAnimation,
}: {
  children: React.ReactNode
  delay?: number
  threshold?: number
  nextAnimation?: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer = setTimeout(() => {
              setIsVisible(true)
            }, delay)
            nextAnimation && nextAnimation(true)
          } else {
            nextAnimation && nextAnimation(false)
          }
        })
      },
      { threshold: threshold },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [delay])

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-500 ${
        isVisible ? 'animation-fadeIn' : 'translate-y-10 opacity-0'
      }`}
    >
      {children}
    </div>
  )
}
