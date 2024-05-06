import Link from "next/link";

export default function Navbar({ isMain = false }: { isMain?: boolean } = {}) {
  return (
    <div className="navbar">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href="/">
          Products
        </Link>
      </div>
      {isMain && (
        <div className="flex-none gap-2">
          <Link className="btn btn-ghost" href="/product/add">
            Create Product
          </Link>

          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
        </div>
      )}
    </div>
  )
}