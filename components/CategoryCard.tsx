// components/CategoryCard.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Category } from '../utils/constants';

const { width } = Dimensions.get('window');
// Calculate card width dynamically: (Screen Width - Padding - Gap) / 2
const cardWidth = (width - 48) / 2;

interface CategoryCardProps {
  category: Category;
  productCount: number;
  onPress: () => void;
}

export default function CategoryCard({ category, productCount, onPress }: CategoryCardProps) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{ width: cardWidth }}
      className={`
        ${category.color} 
        h-44 rounded-3xl mb-4 
        items-center justify-center 
        shadow-sm border border-white/50
      `}
    >
      {/* Icon Circle */}
      <View className="w-16 h-16 bg-white/60 rounded-full items-center justify-center mb-3 shadow-sm">
        <Text className="text-3xl">{category.icon}</Text>
      </View>
      
      {/* Name */}
      <Text className="text-gray-800 font-bold text-lg tracking-wide">
        {category.name}
      </Text>
      
      {/* Count Badge */}
      <View className="bg-white/40 px-3 py-1 rounded-full mt-2">
        <Text className="text-gray-600 text-xs font-medium">
          {productCount} items
        </Text>
      </View>
    </TouchableOpacity>
  );
}