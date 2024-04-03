"use client"
import Image from 'next/image';
import React from 'react';
import { Button, styledButton } from './elements';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { PersonIcon } from '@radix-ui/react-icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter()

  return (
<nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50 border-b">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image src={`${process.env.basePath}/img/logo.png`} className="h-8" alt="ATU" height={32} width={219}/>
    </a>
    <button 
      data-collapse-toggle="navbar-default" 
      type="button" 
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
      aria-controls="navbar-default" 
      aria-expanded={isMenuOpen ? "true" : "false"}
      onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
      <ul className="font-normal flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">INICIO</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ACERCA DEL PROYECTO</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">AYUDA</a>
        </li> 
        <li>
          <Link href="/login" className="flex items-center space-x-1 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <PersonIcon />
            <p>INICIAR SESSIÓN</p>
          </Link>

        </li>       
      </ul>
    </div>
  </div>
</nav>

  );
}
