'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function Navbar() {
  const { setTheme, theme } = useTheme()

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem asChild>
              <Link href="#about">About Me</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#projects">Projects</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#links">Links</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#contact">Contact</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#skills">Skills</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </nav>
  )
}

