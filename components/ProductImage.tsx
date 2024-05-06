'use client'
import Carousel from './Carousel'

export default function ProductImage({ images = [] }: { images: string[] }) {
  return (
    <div className="card bg-base-100 shadow-xl h-full w-full md:w-1/2 mx-auto space-y-4 min-h-128">
      <div className="card-body justify-around p-0">
        <div className="card-actions">
          <Carousel >
            {images.map((s) => (
              <img src={s} key={s} alt="" />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}