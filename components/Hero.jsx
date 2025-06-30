'use client'
import  { useEffect } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import {useRef} from 'react';

const HeroSection = () => {
   const imageRef = useRef(null);

   useEffect(() => {
      const imageElement = imageRef.current;
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThershold = 100;
        if(scrollPosition > scrollThershold)
        {
            imageElement.classList.add("scrolled")
             console.log("yes");
        } else {
            imageElement.classList.remove("scrolled");
        }
      };
       console.log('2');
      //window.addEventListener("scroll", handleScroll);
      return () =>  window.removeEventListener("scroll", handleScroll);
   }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
                <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl  xl:text-8xl gradient-title'>
                  Your AI Career Coach For
                  <br/>
                  professional Success
                </h1>
                <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
                    Advance your career with  personalized guidence, Interview prep, AI powered tool for job success
                </p>

            </div>
            <div className='flex justify-center space-x-4'>
                <Link href="/dashboard">
                    <Button size="lg" className="px-8">
                        Get Started
                    </Button>
                </Link>
                <Link href="/dashboard">
                    <Button size="lg" className="px-8" variant="outline">
                        Get Started
                    </Button>
                </Link>
            </div>
            <div className='hero-image-wrapper mt-5 md:mt-0'>
                <div ref={imageRef} className='hero-image ' >
                    <Image src={"/Banner.jpg"}
                    width={1280}
                    height={720}
                     alt="Banner CareerCraft"
                     className="rounded-lg shadow-2xl border mx-auto"/>
                     priority
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection;
