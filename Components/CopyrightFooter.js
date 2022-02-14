import React from 'react'
import Link from 'next/link'
export default function CopyrightFooter() {
  return (
    <footer className="w-full bg-gray-100 py-6">
    <div className="container mx-auto text-center px-8">
      <p className="text-grey-dark mb-2 text-sm">
        &copy; Copyright
        <span className="font-bold">
          <Link href="/AboutUs"> NearMistry </Link>
        </span>
        {new Date().getFullYear()}
      </p>
    </div>
  </footer>
  )
}
