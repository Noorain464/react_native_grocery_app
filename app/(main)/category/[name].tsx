import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, ActivityIndicator, StatusBar } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import ListProductCard from '../../../components/ProductCard'; 
import { productApi } from '@/utils/api';
// 1. Import CATEGORIES to get the color and icon data
import { Product, CATEGORIES } from '@/utils/constants';

export default function CategoryDetail() {
  const { name } = useLocalSearchParams();
  const router = useRouter();
  
  const [products, setProducts] = useState<Product[]>([]); 
  const [loading, setLoading] = useState(true);

  // Normalize category name
  const categoryName = (Array.isArray(name) ? name[0] : name || '').toLowerCase().trim();

  // 2. FIND CATEGORY DETAILS (Color & Icon)
  // We look for the category object that matches the name to get its styling
  const currentCategory = CATEGORIES.find(c => 
    c.name.toLowerCase() === categoryName
  ) || { name: categoryName, icon: '📦', color: 'bg-gray-100' }; // Fallback defaults

  useEffect(() => {
    loadProducts();
  }, [categoryName]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const allProducts = await productApi.fetchProducts();
      
      const filteredProducts = allProducts.filter((product: Product) => {
        const productCategory = (product.category || '').toLowerCase().trim();
        return productCategory === categoryName;
      });

      setProducts(filteredProducts); 
    } catch (error) {
      console.log("Product fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#059669" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* 3. QUICK COMMERCE STYLE HEADER 
        - Uses the category's specific background color (currentCategory.color)
        - Adds rounded corners at the bottom
      */}
      <View className={`${currentCategory.color} pt-2 pb-6 px-6 rounded-b-[32px] shadow-sm relative overflow-hidden`}>
        
        {/* Decorative Giant Icon (Absolute Positioned) */}
        {/* This puts the category emoji faded in the background for that "Pro" look */}
        <Text className="absolute -right-4 -bottom-6 text-9xl opacity-10 transform rotate-12">
          {currentCategory.icon}
        </Text>

        {/* Navigation Row */}
        <View className="flex-row items-center mb-4 mt-2">
          <TouchableOpacity 
            onPress={() => router.back()} 
            className="bg-white/40 w-10 h-10 rounded-full items-center justify-center mr-4 backdrop-blur-md"
          >
            <Text className="text-xl font-bold text-gray-800">←</Text>
          </TouchableOpacity>
          
          <View>
            <Text className="text-gray-600 text-xs font-medium uppercase tracking-wider mb-1">
              Browsing
            </Text>
            <Text className="text-3xl font-extrabold text-gray-900 capitalize">
              {currentCategory.name}
            </Text>
          </View>
        </View>

        {/* Results Badge */}
        <View className="bg-white/30 self-start px-3 py-1 rounded-full border border-white/20">
          <Text className="text-gray-800 text-xs font-bold">
            {products.length} {products.length === 1 ? 'Product' : 'Products'} found
          </Text>
        </View>
      </View>

      {/* Product List */}
      <FlatList
        data={products} 
        keyExtractor={(item) => item._id.toString()} 
        renderItem={({ item }) => <ListProductCard product={item} />}
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="items-center justify-center py-20 opacity-50">
            <Text className="text-6xl mb-4 grayscale">{currentCategory.icon}</Text>
            <Text className="text-gray-500 font-medium text-lg">Empty Shelf</Text>
            <Text className="text-gray-400 text-sm">No items found in {categoryName}</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}