import { Link } from 'react-router-dom'

const categories = [
  {
    name: "Girls' Pajamas",
    image: "/placeholder.jpg",
    link: "/shop/girls"
  },
  {
    name: "Boys' Pajamas",
    image: "/placeholder.jpg",
    link: "/shop/boys"
  },
  {
    name: "Bedtime Essentials",
    image: "/placeholder.jpg",
    link: "/shop/essentials"
  },
  {
    name: "New Arrivals",
    image: "/placeholder.jpg",
    link: "/shop/new"
  }
]

function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={category.link}
          className="group relative aspect-square overflow-hidden rounded-lg"
        >
          <img
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryGrid