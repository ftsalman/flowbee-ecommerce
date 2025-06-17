import React from 'react'

export const ProductInfo = ({product}) => {
  return (
   <div className="space-y-6">
    <h1 className="text-3xl font-semibold">{product.label}</h1>
    <div className="flex items-center gap-2">
      <span className="text-lg font-bold text-black">$1399</span>
      <span className="line-through text-gray-400 text-sm">$1499</span>
    </div>

    <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
      <div className="bg-gray-100 p-2 rounded">📱 Screen size: 6.7"</div>
      <div className="bg-gray-100 p-2 rounded">🧠 CPU: Apple A16 Bionic</div>
      <div className="bg-gray-100 p-2 rounded">📸 Main camera: 48+12+12 MP</div>
      <div className="bg-gray-100 p-2 rounded">🤳 Front camera: 12 MP</div>
      <div className="bg-gray-100 p-2 rounded">🔋 Battery: 4323 mAh</div>
      <div className="bg-gray-100 p-2 rounded">📦 Storage: {product.storage}</div>
    </div>

    <p className="text-sm text-gray-600">
      Enhanced capabilities thanks to an enlarged display of 6.7 inches and
      work without recharging throughout the day. Incredible photos in any
      week, year and in bright lighting with the new system with two camera
      modes...
    </p>
  </div>
  )
}
