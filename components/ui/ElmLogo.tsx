'use client'

import { FC } from 'react'

interface ElmLogoProps {
  className?: string
}

export const ElmLogo: FC<ElmLogoProps> = ({ className = 'h-12 w-auto' }) => {
  // Primary colors based on logo
  const darkGreen = '#183a23';
  const mainGreen = '#2a613a';
  const midGreen = '#4d9a63';
  const lightGreen = '#7cba8e';
  const paleGreen = '#a5cfb3';

  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 600 600" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Elm Recovery Group Logo"
      >
        {/* Circle background */}
        <circle cx="300" cy="300" r="290" fill="none" stroke={darkGreen} strokeWidth="10" />
        
        {/* Tree */}
        <g>
          {/* Trunk */}
          <path 
            d="M300,500 C280,500 250,450 250,400 C250,350 270,300 300,250 C330,300 350,350 350,400 C350,450 320,500 300,500 Z" 
            fill={mainGreen} 
          />
          
          {/* Roots */}
          <path 
            d="M300,500 C280,510 260,520 240,530 C220,540 200,550 180,560 M300,500 C320,510 340,520 360,530 C380,540 400,550 420,560" 
            fill="none" 
            stroke={darkGreen} 
            strokeWidth="5" 
          />
          
          {/* Leaves */}
          <g>
            <ellipse cx="240" cy="310" rx="50" ry="40" fill={lightGreen} />
            <ellipse cx="360" cy="310" rx="50" ry="40" fill={lightGreen} />
            <ellipse cx="300" cy="300" rx="60" ry="50" fill={midGreen} />
            <ellipse cx="270" cy="240" rx="45" ry="35" fill={paleGreen} />
            <ellipse cx="330" cy="240" rx="45" ry="35" fill={paleGreen} />
            <ellipse cx="300" cy="200" rx="70" ry="60" fill={lightGreen} />
            <ellipse cx="300" cy="150" rx="60" ry="50" fill={midGreen} />
          </g>
        </g>
        
        {/* Text */}
        <text x="300" y="560" fontFamily="serif" fontSize="80" fontWeight="bold" textAnchor="middle" fill={darkGreen}>ELM</text>
        <text x="300" y="590" fontFamily="sans-serif" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#000000">RECOVERY GROUP, LLC</text>
      </svg>
    </div>
  )
}

export const ElmLogoIcon: FC<ElmLogoProps> = ({ className = 'h-10 w-auto' }) => {
  // Primary colors based on logo
  const darkGreen = '#183a23';
  const mainGreen = '#2a613a';
  const midGreen = '#4d9a63';
  const lightGreen = '#7cba8e';
  const paleGreen = '#a5cfb3';

  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 600 600" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Elm Recovery Icon"
      >
        {/* Circle background */}
        <circle cx="300" cy="300" r="290" fill="none" stroke={darkGreen} strokeWidth="10" />
        
        {/* Tree */}
        <g>
          {/* Trunk */}
          <path 
            d="M300,500 C280,500 250,450 250,400 C250,350 270,300 300,250 C330,300 350,350 350,400 C350,450 320,500 300,500 Z" 
            fill={mainGreen} 
          />
          
          {/* Leaves */}
          <g>
            <ellipse cx="240" cy="310" rx="50" ry="40" fill={lightGreen} />
            <ellipse cx="360" cy="310" rx="50" ry="40" fill={lightGreen} />
            <ellipse cx="300" cy="300" rx="60" ry="50" fill={midGreen} />
            <ellipse cx="270" cy="240" rx="45" ry="35" fill={paleGreen} />
            <ellipse cx="330" cy="240" rx="45" ry="35" fill={paleGreen} />
            <ellipse cx="300" cy="200" rx="70" ry="60" fill={lightGreen} />
            <ellipse cx="300" cy="150" rx="60" ry="50" fill={midGreen} />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ElmLogo
