import Link from 'next/link';
import Image from "next/image";

export default function Home() {
  return(
    <main>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Extreme Left */}
            <Link href="/" className="flex items-center">
              <Image
                src="/pflogo.png"
                alt="Print Forge Logo"
                width={120}
                height={50}
                priority
                className="hover:scale-105 transition-transform duration-200"
              />
            </Link>

            {/* Navigation Links - Extreme Right */}
            <div className="flex items-center gap-8">
              <Link
                href="/3d-models"
                className="font-medium text-gray-700 hover:text-black transition-colors text-sm uppercase tracking-wider"
              >
                3D Models
              </Link>
              <Link
                href="/about"
                className="font-medium text-gray-700 hover:text-black transition-colors text-sm uppercase tracking-wider"
              >
                About
              </Link>

              {/* Optional: Add a CTA button */}
              <Link
                href="/3d-models"
                className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Browse Models
              </Link>
            </div>
          </div>
        </nav>
      </header>      
      
      <section className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
        <div className="flex-1 space-y-6">
         
          <p className="hidden text-sm text-gray-600 uppercase md:block">
            Your go-to platform for 3D printing files
          </p>
          <h1 className="text-4xl font-bold md:text-5xl">
            Discover what's possible with 3D Printing
          </h1>
          <p className="text-lg text-gray-600">
            Join our community of creators and explore a vast
            library of user-submitted models.
          </p>

          <div className="flex gap-4">
            <Link
              href="/3d-models"
              className="px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white"
            >
              Browse Models
            </Link>
          </div>

        </div>

        <Image 
          src="/home-hero-image.png" 
          alt='home hero image'
          width={350}
          height={350}
        />
      </section>
    </main>
  );
}