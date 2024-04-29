import type { IProduct } from "@/components/Product"
import ProductCard from "@/components/ProductCard"
import Navbar from "@/components/Navbar"
import { fetchProducts } from "@/services"

// https://calis-store.vercel.app

export default async function Home() {
  const prods = await fetchProducts();

  return (
    <main className="flex-- min-h-screen flex-col--- items-center-- justify-between--- p-24---">
      <Navbar isMain />

      <div className="grid grid-flow-row gap-8 text-neutral-600 py-12 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {prods.map((p: IProduct) => <ProductCard key={p.id} {...p} />)}
      </div>

      <div className="py-12 flex justify-center items-center">
        <div className="join">
          <button className="join-item btn btn-active">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div>
      </div>

      <footer className="footer p-10 bg-neutral text-neutral-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </main>
  );
}
