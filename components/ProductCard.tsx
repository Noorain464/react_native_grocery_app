import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl?: string;
  category: string;
  description?: string;
  stock?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <View className="bg-white rounded-xl shadow-sm mb-4 overflow-hidden border border-gray-100">
      <View className="flex-row">
        {/* Product Image */}
        <Image 
          source={{ uri: product.imageUrl }} 
          className="w-32 h-32"
          resizeMode="cover"
        />
        
        {/* Product Details */}
        <View className="flex-1 p-4 justify-between">
          <View>
            <Text className="text-lg font-bold text-gray-800" numberOfLines={1}>
              {product.name}
            </Text>
            <Text className="text-xs text-gray-500 bg-gray-100 self-start px-2 py-1 rounded mt-1">
              {product.category}
            </Text>
          </View>

          <View className="flex-row justify-between items-center mt-2">
            <Text className="text-emerald-600 font-bold text-lg">
              ₹{product.price}
            </Text>
            
            {/* Simple Add button (Visual only for now) */}
            <TouchableOpacity className="bg-emerald-600 px-3 py-1 rounded-full">
              <Text className="text-white text-xs font-bold">ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}