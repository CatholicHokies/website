import './globals.css'
import React, { useState } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CustomFooter from '@/comps/CustomFooter'
import Box from '@mui/material/Box';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CCM',
  description: 'Catholic Campus Ministry',
}

export default function RootLayout({children} : React.ReactNode) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <Box sx={{minHeight : "100vh"}}>{children}</Box>
        </body>
    </html >
  )
}
