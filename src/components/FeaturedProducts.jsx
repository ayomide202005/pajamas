import { Link } from 'react-router-dom'

const products = [
  {
    name: "Classic Comfort Pajamas",
    price: "$39.99",
    image: "/placeholder.jpg",
    link: "/shop/products/classic-comfort"
  },
  {
    name: "Dreamy Nights Set",
    price: "$44.99",
    image: "/placeholder.jpg",
    link: "/shop/products/dreamy-nights"
  },
  {
    name: "Cozy Collection",
    price: "$49.99",
    image: "/placeholder.jpg",
    link: "/shop/products/cozy-collection"
  },
  {
    name: "Sweet Dreams Bundle",
    price: "$59.99",
    image: "/placeholder.jpg",
    link: "/shop/products/sweet-dreams"
  }
]

function FeaturedProducts() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.name}
              to={product.link}
              className="group"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts