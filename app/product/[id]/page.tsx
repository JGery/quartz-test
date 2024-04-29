import Product from "@/components/Product"
import Navbar from "@/components/Navbar"
import { fetchProductById } from "@/services"

export default async function ProductPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const productData = await fetchProductById(params.id).catch(console.log);

  return (
    <>
      <Navbar />

      <div className="min-h-screen--- flex py-12 sm:pt-20">
        <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
          <Product data={productData} />
        </div>
      </div>
    </>
  )
}
