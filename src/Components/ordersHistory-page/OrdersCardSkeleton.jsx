import React from 'react'
import { CardContainer } from '../ui/CardContainer'
import { cn } from '../../utils/utils';

export const OrdersCardSkeleton = () => {
  return (
     <CardContainer className="border border-gray-300 rounded-md bg-white animate-pulse">
    <div className="flex items-center justify-between gap-4 px-4 py-3">
      {/* LEFT – image + text */}
      <div className="flex items-center gap-6">
        <SkeletonBlock className="h-20 w-20 rounded-sm" />
        <div className="space-y-2">
          <SkeletonBlock className="h-4 w-48" />
          <SkeletonBlock className="h-3 w-32" />
        </div>
      </div>

      {/* RIGHT – status lines + button */}
      <div className="flex flex-col items-end gap-2">
        <SkeletonBlock className="h-3 w-40" />
        <SkeletonBlock className="h-3 w-44" />
        <SkeletonBlock className="h-8 w-32 rounded" />
      </div>
    </div>
  </CardContainer>
  )
}


export const SkeletonBlock = ({ className }) => (
  <div className={cn("bg-gray-200/70 rounded-md", className)} />
);