"use client";

import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  altPrefix: string;
  available: boolean;
}

export default function ImageGallery({ images, altPrefix, available }: ImageGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <>
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-900/10 dark:border-white/10 shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={mainImage}
          alt={altPrefix}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        />
        <div className="absolute top-3 sm:top-6 right-3 sm:right-6 z-20">
          <span className={`inline-flex items-center rounded-full backdrop-blur-md px-2.5 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold text-white ring-1 ring-inset ${available ? 'bg-emerald-500/80 ring-emerald-400/50' : 'bg-red-500/80 ring-red-400/50'}`}>
            {available ? 'Available' : 'Unavailable'}
          </span>
        </div>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 snap-x px-1 -mx-1">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setMainImage(img)}
              className={`relative aspect-video w-24 sm:w-32 md:w-40 flex-shrink-0 snap-start overflow-hidden rounded-lg sm:rounded-xl bg-neutral-200 dark:bg-neutral-800 cursor-pointer transition-all duration-200 border-2 ${mainImage === img ? 'border-emerald-500 shadow-lg shadow-emerald-500/20 opacity-100' : 'border-neutral-900/10 dark:border-white/10 hover:border-neutral-900/30 dark:hover:border-white/30 opacity-60 hover:opacity-100'}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`${altPrefix} view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
