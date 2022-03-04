import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '../api'

export default function Nav() {

    return (
        <nav className="flex items-center justify-between flex-wrap p-6 container mx-auto">
        <div className="flex items-center flex-no-shrink text-black mr-6">
            <Link href="/">
                <a className="font-semibold text-xl tracking-tight">Nedium</a>
            </Link>       
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/about" >
                <a className="block lg:inline-block lg:mt-0 text-teal-lighter mr-4">
                    About
                </a>
            </Link>
             <Link href="/signin" >
                <a className="block mt-6 lg:inline-block lg:mt-0 text-teal-lighter mr-4">
                    Sign in
                </a>
            </Link>
          </div>
          <div>
            <Link href="/signup">
                <a className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0">
                    Sign Up   
                </a>
            </Link>
          </div>
        </div>
      </nav>
    )
}