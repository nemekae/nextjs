import Link from "next/link"

const Navigation = () => {
  return (
    <header className="bg-gray-100 p-4 shadow">
        <nav>
            <ul className="flex gap-4 text-gray-800">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/about/team">Our Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
        </nav>
    </header>
  )
}
export default Navigation