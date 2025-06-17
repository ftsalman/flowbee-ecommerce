import React from 'react'
import { List } from '../ui/List'
import { cn } from '../../utils/utils'

export const ProductImageGallery = ({images, activeImage, setActiveImage}) => {
  return (
   <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
    <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible px-1">
      <List
        className="flex lg:flex-col gap-3"
        data={images}
        uniqueKey={(item, i) => i}
        render={(item, i) => (
          <div
            key={i}
            onClick={() => setActiveImage(item)}
            className={cn(
              "cursor-pointer border rounded-md p-1",
              activeImage === item ? "border-black" : "border-transparent"
            )}
          >
            <img
              src={item}
              alt={`Thumbnail ${i + 1}`}
              className="w-16 h-16 object-contain"
            />
          </div>
        )}
      />
    </div>
    <div className="w-[340px] h-[580px]">
      <img
        src={activeImage}
        alt="Main Product"
        className="w-full h-full object-contain rounded-md"
      />
    </div>
  </div>
  )
}
