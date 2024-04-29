import Link from 'next/link'
import type { IProduct } from "@/components/Product"

// https://github.com/PlatziLabs/fake-api-backend/issues/28
function fixImageSrc(src = '') {
  return src.replace(/["[\]\\]/g, '')
}

export default function ProductCard(p: IProduct) {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="max-h-48 h-full pt-8">
        <img className="h-full" src={fixImageSrc(p.image || p.images[0])} alt={p.title} />
      </figure>
      <div className="card-body justify-around">
        <h2 className="card-title">{p.title}</h2>
        <h2 className="font-bold">${p.price}</h2>
        <div className="line-clamp-4 p-0 min-h-24">
          <p>
            {p.description}
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link className="btn btn-ghost" href={`/product/${encodeURIComponent(p.id)}`}>
            Details
          </Link>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  )
}