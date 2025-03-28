'use client'

import { useState, Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, User, ChevronDown, LogIn, UserPlus } from 'lucide-react'
import { Transition, Popover } from '@headlessui/react'
import clsx from 'clsx'
import { ElmLogo, ElmLogoIcon } from '../ui/ElmLogo'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Housing', href: '/housing' },
  { name: 'Resources', href: '/resources' }, // Keep as single link for now
  { name: 'About Us', href: '/about' },
  // { name: 'Blog', href: '/blog' }, // Add later when page exists
  // { name: 'Contact', href: '/contact' }, // Add later when page exists
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Elm Recovery Home">
            <ElmLogoIcon className="h-8 w-auto md:hidden" />
            <ElmLogo className="hidden md:block h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 ml-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'text-sm font-medium transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-md px-1 py-0.5',
                  pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                )}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & User Menu */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
            <Link
              href="/apply" // Assuming an apply page exists or will exist
              className="btn btn-primary py-2 px-4 text-sm"
            >
              Apply Now
            </Link>
            <Link
              href="/login"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-md px-1 py-0.5"
            >
              <LogIn className="h-4 w-4 mr-1" />
              Log In
            </Link>
            {/* Optional: Add Register link if needed */}
            {/* <Link
              href="/register"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-md px-1 py-0.5"
            >
              <UserPlus className="h-4 w-4 mr-1" />
              Register
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 inline-flex items-center justify-center text-gray-600 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 rounded-md"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        show={isMobileMenuOpen}
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden absolute top-full inset-x-0 z-40" id="mobile-menu">
          <div className="bg-white p-4 shadow-lg border-t border-gray-100">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary-500',
                    pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="my-3 border-gray-200" />
              <Link
                href="/apply"
                className="btn btn-primary justify-center w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
              <Link
                href="/login"
                className="btn btn-secondary flex justify-center w-full mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LogIn className="h-4 w-4 mr-2" />
                Log In
              </Link>
              {/* Optional: Add Register link */}
              {/* <Link
                href="/register"
                className="btn btn-secondary flex justify-center w-full mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Register
              </Link> */}
            </nav>
          </div>
        </div>
      </Transition>
    </header>
  )
}
