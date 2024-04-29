import type { IProduct } from "@/components/Product"

export default function ProductDetail({ product }: { product: IProduct }) {
  return (
    <div className="card bg-base-100 shadow-xl h-full w-full md:w-1/2 max-w-xs--- mx-auto space-y-4 min-h-128">
      <div className="card-body justify-around-">
        <h2 className="card-title">{product.title}</h2>
        <h2 className="font-bold">${product.price}</h2>
        <div className="p-0 min-h-24">
          <p>
            {product.description}
          </p>
        </div>
        <div className="card-actions justify-between-- items-center justify-end mt-auto">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  )
}