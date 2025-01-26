import prisma from '@/prisma/client'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

import React from 'react'

const authOptions:NextAuthOptions = {
 
    
        adapter: PrismaAdapter(prisma),
      providers:[GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })],
    callbacks: {
      async redirect({ url, baseUrl }) {
        // If callbackUrl is provided, redirect there; otherwise, go to the baseUrl
        return url.startsWith(baseUrl) ? url : baseUrl;
      },
    }
  }
   
  


export default authOptions
