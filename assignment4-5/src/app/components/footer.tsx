import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section - Copyright */}
        <div className="mb-6 md:mb-0">
          <p className="text-sm text-center md:text-left">© 2024 MyStore. All rights reserved.</p>
        </div>
        
        {/* Center Section - Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-center text-sm mb-6 md:mb-0">
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-condition">Terms & Condition</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        
        {/* Right Section - Social Icons */}
        <div className="flex justify-center md:justify-end gap-4">
          <a href="#" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.35C0 23.4.6 24 1.325 24h21.35C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0zm-4.15 12.465h-3.168v10.64h-4.094v-10.64h-2.317v-3.42h2.317V7.516c0-2.922 1.567-4.516 4.09-4.516 1.18 0 2.42.213 2.42.213v2.67h-1.57c-1.475 0-1.934.92-1.934 1.855v2.188h3.884l-.617 3.42z"/>
            </svg>
          </a>
          
          <a href="#" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 4.5h9A3.75 3.75 0 0120.25 8v9A3.75 3.75 0 0116.5 20.25h-9A3.75 3.75 0 013 16.5v-9A3.75 3.75 0 017.5 4.5zM12 15a3 3 0 100-6 3 3 0 000 6zm4.5-9.75h-9m9 0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
            </svg>
          </a>

          <a href="#" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.29 20.29c10.38 0 15.93-8.62 15.93-16.06 0-.24 0-.48-.01-.72A11.4 11.4 0 0024 4.58a11.18 11.18 0 01-3.2.878A5.573 5.573 0 0023.331 3a11.26 11.26 0 01-3.57 1.361A5.563 5.563 0 0016.1 0a5.573 5.573 0 00-5.57 5.57c0 .43.05.85.14 1.25C7.62 6.24 4.04 4.66 1.64 1.64a5.559 5.559 0 00-.77 2.8c0 1.94 1.03 3.65 2.58 4.67A5.546 5.546 0 01.64 9.85c0 .02 0 .04 0 .06a5.563 5.563 0 005.53 5.54A5.566 5.566 0 014.72 14a5.568 5.568 0 005.43 4.033A11.195 11.195 0 010 18.17a15.823 15.823 0 008.29 2.42" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
