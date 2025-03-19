'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Leaf, User, ChevronDown } from 'lucide-react'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Housing', href: '/housing' },
  { name: 'Resources', href: '/resources' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Leaf className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-heading font-bold text-gray-900">Elm Recovery</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'text-sm font-medium transition-colors',
                  pathname === item.href 
                    ? 'text-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/apply"
              className="btn btn-primary py-2 px-4"
            >
              Apply Now
            </Link>
            <Link 
              href="/login"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-primary-600"
            >
              <User className="h-4 w-4 mr-1" />
              Log In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-primary-600"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
              {isOpen ? (
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
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="md:hidden"
      >
        <div className="bg-white p-4 shadow-lg border-t">
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'text-base font-medium py-2',
                  pathname === item.href 
                    ? 'text-primary-600' 
                    : 'text-gray-700 hover:text-primary-600'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <hr className="my-2" />
            <Link 
              href="/apply"
              className="btn btn-primary justify-center"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </Link>
            <Link 
              href="/login"
              className="btn btn-secondary flex justify-center"
              onClick={() => setIsOpen(false)}
            >
              <User className="h-4 w-4 mr-2" />
              Log In
            </Link>
          </nav>
        </div>
      </Transition>
    </header>
  )
}
