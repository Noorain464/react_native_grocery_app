import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SafeAreaView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { CATEGORIES, Product } from '../../utils/constants';
import CategoryCard from '../../components/CategoryCard';
import { productApi } from '@/utils/api'; 

export default function CategoriesScreen() {
 
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    loadProductsForCounts();
  }, []);

  const loadProductsForCounts = async () => {
    try {
      const allProducts = await productApi.fetchProducts();
      setProducts(allProducts);
    } catch (error) {
      console.log("Error fetching products for counts:", error);
    }
  };

  const getProductCount = (categoryName: string) => {
    if (!products.length) return 0;

    return products.filter(p =>
      (p.category || '').toLowerCase().trim() === categoryName.toLowerCase().trim()
    ).length;
  };

  const handleCategoryPress = (categoryName: string) => {
    router.push({
      pathname: '/category/[name]',
      params: { name: categoryName }
    } as any);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="bg-emerald-600 pt-10 pb-8 px-6 rounded-b-[32px] shadow-lg z-10">
        <Text className="text-white text-3xl font-extrabold mb-1">
          Categories
        </Text>
        <Text className="text-emerald-100 text-base mb-4">
          Explore our fresh collections
        </Text>

        {/* Visual Search Bar */}
        <View className="bg-emerald-700/50 flex-row items-center p-3 rounded-2xl border border-emerald-500/30">
          <Text className="mr-2">🔍</Text>
          <TextInput
            placeholder="Search categories..."
            placeholderTextColor="#a7f3d0"
            className="flex-1 text-white font-medium"
          />
        </View>
      </View>

      {/* Categories Grid */}
      <FlatList
        data={CATEGORIES} 
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ padding: 20, paddingTop: 24 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryCard
            category={item}
            productCount={getProductCount(item.name)}
            onPress={() => handleCategoryPress(item.name)}
          />
        )}
      />
    </SafeAreaView>
  );
}