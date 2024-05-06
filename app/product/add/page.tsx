'use client'
import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"
import { fetchProductCategories, createProduct } from "@/services"
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form"

interface FormData {
  title: string
  price: number
  description: string
  image: string
  images: string[]
  categoryId: number
}

interface Category {
  id: number
  name: string
}

// obviously a FormField component could be created
// function objectToFormData(obj) {
//   const formData = new FormData();

//   Object.entries(obj).forEach(([key, value]) => {
//     formData.append(key, value);
//   });

//   return formData;
// }

export default function ProductForm() {
  const {
    register,
    // setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      'image': 'https://picsum.photos/200/300',
      "title": "New Product",
      "price": 10,
      "description": "A description",
      "categoryId": 1,
    }
  })
  const [categories, setCategories] = useState<Category[]>([])
  const [isFetching, setIsFetching] = useState<boolean>(true)

  const onSubmit = handleSubmit((data) => {
    Object.assign(data, { images: [data.image] })
    /* @ts-ignore */
    delete data.image;

    createProduct(data);
  })

  const router = useRouter()

  useEffect(() => {
    (async () => {
      const result = await fetchProductCategories();

      setCategories(result);
      setIsFetching(false)
    })();

  }, []);

  return (
    <>
      <Navbar />
      <div className="flex py-12 sm:pt-20">
        <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body justify-around">
              <h2 className="card-title">Create Product</h2>
              <form onSubmit={onSubmit}>
                <div className="space-y-12">
                  <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="col-span-full">
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                          Product title
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            id="title"
                            autoComplete="title"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            {...register("title", { required: 'This is a required field' })}
                          />
                          {errors.title && (
                            <p className="text-xs italic text-red-500 pt-1.5">{errors.title.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="col-span-full">
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                          Product description
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="description"
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            defaultValue={''}
                            {...register("description", { required: 'This is a required field' })}
                          />
                          {errors.description && (
                            <p className="text-xs italic text-red-500 pt-1.5">{errors.description.message}</p>
                          )}
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about the product.</p>
                      </div>

                      <div className="col-span-full">
                        <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
                          Image URL
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            id="image"
                            autoComplete="image"
                            placeholder="https://picsum.photos/200/300"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            {...register("image", { required: 'This is a required field' })}
                          />
                          {errors.image && (
                            <p className="text-xs italic text-red-500 pt-1.5">{errors.image.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                          Category
                        </label>
                        <div className="mt-2 relative">
                          {isFetching && (
                            <div className="absolute h-full w-full flex items-center justify-center">
                              <div
                                className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                                role="status">
                                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                  Loading...
                                </span>
                              </div>
                            </div>
                          )}

                          <select
                            // defaultValue=""
                            id="categoryId"
                            autoComplete="categoryId"
                            disabled={isFetching}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            {...register("categoryId", { required: 'This is a required field', valueAsNumber: true })}
                          >
                            {/*<option value="" hidden>Select Category...</option>*/}

                            {categories.map(({ id, name }: Category) => (
                              <option key={id} value={id}>{name}</option>
                            ))}
                          </select>

                          {errors.categoryId && (
                            <p className="text-xs italic text-red-500 pt-1.5">{errors.categoryId.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                          Price
                        </label>
                        <div className="mt-2">
                          <input
                            type="number"
                            id="price"
                            autoComplete="price"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                            pattern=""
                            {...register("price", { required: 'This is a required field' })}
                          />
                          {errors.price && (
                            <p className="text-xs italic text-red-500 pt-1.5">{errors.price.message}</p>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>


                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => router.push('/')}>
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
