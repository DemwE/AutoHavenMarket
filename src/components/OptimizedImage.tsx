'use client';
import Image from 'next/image'
import {Skeleton} from "@nextui-org/skeleton";
import React from "react";

export default function OptimizedImage({src, className, alt}: { src: string, className?: string, alt: string }) {
  const [loaded, setLoaded] = React.useState(false)

  return (
      <Skeleton isLoaded={loaded} className={`relative ${className}`}>
        <Image src={src} alt={alt}
               className="object-center object-cover" fill={true} onLoad={() => setLoaded(true)}/>
      </Skeleton>
  );
}