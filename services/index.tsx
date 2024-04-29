export const fetchProducts = async () => {
  // const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${perPage * (page - 1)}&limit=${perPage}`)
  // const res = await fetch(`https://fakestoreapi.com/products`)
  const res = await fetch(`https://api.escuelajs.co/api/v1/products`, { cache: 'no-store' })
  //console.log(`https://api.escuelajs.co/api/v1/products?offset=${perPage * (page - 1)}&limit=${perPage}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const json = await res.json()

  return json
}

export const fetchProductById = async (productId: string) => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
  // const res = await fetch(`https://fakestoreapi.com/products/${productId}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const json = await res.json()

  return json
}

export const fetchProductCategories = async () => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/categories`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const json = await res.json()

  return json
}

// https://jasonwatmore.com/post/2021/09/05/fetch-http-post-request-examples
// POST request using fetch with error handling


export const createProduct = async (data: {
  title: string
  price: number
  description: string
  images: string[]
  categoryId: number
}) => {
  console.log(data)

  const res = await fetch(`https://api.escuelajs.co/api/v1/products`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    // body: new FormData(data)
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const json = await res.json()

  return json
}
