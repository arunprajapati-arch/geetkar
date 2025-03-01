'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Button } from '@repo/ui'
const page = () => {
  return (
    <div className="bg-background w-screen h-svh pb-8">
      <div className="max-w-screen-lg w-full mx-auto h-full font-roboto grid grid-cols-2 pt-[10%]">
        <div>
          <h1 className="text-5xl font-bold text-primary capitalize tracking-[-.0325em] leading-[1.1]">
            create <span className="uppercase">super</span> turbo
          </h1>
          <p className="text-lg text-foreground/70 leading-[28px] tracking-[-0.37px] font-medium my-2">
            Kickstart your Next.js project in a flash with Create Super Turbo!
          </p>
          <ol className="font-mono list-decimal pl-8">
            <li>Get started by editing src/app/page.tsx.</li>
            <li>Save and see your changes instantly.</li>
          </ol>
          <div className="flex gap-4 my-4">
            <Button asChild>
              <Link href="#">Start Building</Link>
            </Button>
            <Button asChild variant={'link'} className="gap-1">
              <Link href="https://nextjs.org/" target="_blank">
                <Image
                  width={16}
                  height={16}
                  src={'/globe.svg'}
                  alt="Globe"
                  className="h-4 dark:invert opacity-50 mr-1"
                />
                Go to nextjs.org
                <Image
                  width={16}
                  height={16}
                  src={'/arrow.svg'}
                  alt="Arrow right"
                  className="h-4 dark:invert"
                />
              </Link>
            </Button>
          </div>
        </div>
        <Button asChild variant={'outline'} className="gap-1 justify-self-end">
          <Link
            href="https://github.com/super-turbo-stack/create-super-turbo"
            target="_blank"
          >
            <Image
              width={16}
              height={16}
              src={'/github.svg'}
              alt="Github"
              className="h-4 dark:invert"
            />
            <strong>Github</strong>
          </Link>
        </Button>
        <RandomNumberGenerator />
      </div>
    </div>
  )
}
function RandomNumberGenerator() {
  const [count, setCount] = useState(0)
  const generateRandomNumber = () => {
    setCount(Math.floor(Math.random() * 1000))
  }
  useEffect(generateRandomNumber, [setCount])
  return (
    <div className="grid place-items-center gap-2 col-span-2 self-start">
      <span>{count}</span>
      <Button variant={'secondary'} onClick={generateRandomNumber}>
        Generate Random Number
      </Button>
    </div>
  )
}
export default page
