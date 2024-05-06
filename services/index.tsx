export const fetchProducts = async () => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products`, { cache: 'no-store' })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const json = await res.json()

  return json
}

export const fetchProductById = async (productId: string) => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)

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
    body: JSON.stringify(data)
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const json = await res.json()

  return json
}
