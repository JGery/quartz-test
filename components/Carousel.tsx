import React, { useState, useEffect, useCallback, ReactNode } from 'react'

interface Props {
  children: ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }: Props) => {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

  const next = useCallback(() => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)), [slides.length])

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [autoSlide, autoSlideInterval, next])


  return (
    <div className='overflow-hidden relative rounded-xl'>
      <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className='h-8 w-8 p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <span className="w-3 mx-1 text-palette-primary" >❮</span>
        </button>
        <button onClick={next} className='h-8 w-8 p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <span className="w-3 mx-1 text-palette-primary" >❯</span>
        </button>
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {slides.map((_: any, i: React.Key | null | undefined) => (
            <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Carousel

// https://github.com/constgenius/CarouselImageSliderReactTailwind?tab=readme-ov-file