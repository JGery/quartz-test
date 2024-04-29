import ProductImage from "@/components/ProductImage"
import ProductDetail from "@/components/ProductDetail"
import Link from 'next/link'

interface IProduct {
  id: number,
  title: string,
  price: number,
  description: string,
  images: string[],
  image: string,
  creationAt: string,
  updatedAt: string,
  category: {
    id: number,
    name: string,
    image: string,
    creationAt: string,
    updatedAt: string
  }
}

export type { IProduct }

export default function Product({
  data,
}: {
  data: IProduct;
}) {
  return (
    <>
      {data?.id && (
        <>
          <ProductImage images={data.images} />
          <ProductDetail product={data} />
        </>
      )}

      {!data?.id && (
        <div className="flex flex-col items-center">
          <p>
            Product not found.
          </p>

          <Link className="btn btn-primary" href={`/`}>
            Back to Home Page
          </Link>
        </div>
      )}
    </>
  )
}
