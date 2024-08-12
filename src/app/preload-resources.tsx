'use client'

import { Roboto, Nunito_Sans } from "next/font/google";

const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
});

const nunito = Nunito_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export function PreloadResources() {
  return (
    <style jsx global>{`
      html {
        --font-roboto: ${roboto.style.fontFamily};
        --font-nunito: ${nunito.style.fontFamily};
      }
    `}</style>
  )
}