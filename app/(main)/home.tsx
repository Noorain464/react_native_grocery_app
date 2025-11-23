import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {

  // Minimal placeholder data (UI only)
  const categories = [
    { id: 1, name: 'Fruits', icon: '🍎', color: 'bg-red-100' },
    { id: 2, name: 'Vegetables', icon: '🥬', color: 'bg-green-100' },
    { id: 3, name: 'Dairy', icon: '🥛', color: 'bg-blue-100' },
    { id: 4, name: 'Bakery', icon: '🍞', color: 'bg-yellow-200' },
    { id: 5, name: 'Meat', icon: '🍖', color: 'bg-pink-100' },
    { id: 6, name: 'Beverages', icon: '🧃', color: 'bg-purple-100' },
  ];

  const products = [
    { id: 1, name: 'Tomatoes', price: '₹49', image: '🍅', category: 'Vegetables' },
    { id: 2, name: 'Bananas', price: '₹39', image: '🍌', category: 'Fruits' },
    { id: 3, name: 'Milk', price: '₹65', image: '🥛', category: 'Dairy' },
    { id: 4, name: 'Bread', price: '₹29', image: '🍞', category: 'Bakery' },
    { id: 5, name: 'Chicken', price: '₹199', image: '🍗', category: 'Meat' },
    { id: 6, name: 'Orange Juice', price: '₹89', image: '🧃', category: 'Beverages' },
    { id: 7, name: 'Carrots', price: '₹35', image: '🥕', category: 'Vegetables' },
    { id: 8, name: 'Strawberries', price: '₹99', image: '🍓', category: 'Fruits' },
    { id: 9, name: 'Cheese', price: '₹120', image: '🧀', category: 'Dairy' },
    { id: 10, name: 'Croissant', price: '₹45', image: '🥐', category: 'Bakery' },
    
  ];



  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <ScrollView>
        <View className="bg-emerald-600 px-4 pt-2 pb-4">
          <View className="flex-row items-center justify-between mb-3">
            <View className="flex-1">
              <Text className="text-white text-xs opacity-90">Delivery to</Text>
              <View className="flex-row items-center">
                <Text className="text-white text-base font-bold mr-1">Home</Text>                 
                <Text className="text-white text-lg">▼</Text>
              </View>
            </View>

            <TouchableOpacity>
              <Text className="text-white text-l font-semibold">📍 Change</Text>
            </TouchableOpacity>


          </View>
          {/* searchBar */}
          <View>
            <View className="bg-white rounded-xl px-3 flex-row items-center">
              <Text className="text-gray-400 mr-1">🔍</Text>
              <TextInput
                className="flex-1 text-gray-800"
                placeholder="Search for products..."
                placeholderTextColor="#9CA3AF"
              />
            </View>


          </View>
        </View>

        {/* Delivery Banner */}
        <View className="bg-emerald-100 mx-4 my-3 rounded-xl p-4 flex-row items-center">
          <View className="flex-1">
            <Text className="text-emerald-800 font-bold mb-1">Free Delivery on orders over ₹500!</Text>
            <Text className="text-emerald-700 text-sm">Shop now and enjoy fast, free delivery.</Text>
          </View>
        </View>

        {/* Categories */}
        <View className="px-4">
          <Text className="text-lg font-bold mb-3">Categories</Text>
          <FlatList
            data={categories}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => (
              <View className={`mr-4 p-3 rounded-xl items-center ${item.color}`}>
                <Text className="text-2xl mb-2">{item.icon}</Text>
                <Text className="text-sm font-medium">{item.name}</Text>
              </View>
            )}
          />
        </View>
        {/* Products */}
        <View className="px-4 mt-6 mb-10">
          <Text className="text-lg font-bold mb-3">Popular Products</Text>
          <FlatList
            data={products}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 16 }}
            renderItem={({ item }) => (
              <View className="bg-white rounded-xl shadow p-4 w-[48%]">
                <Text className="text-4xl mb-4">{item.image}</Text>
                <Text className="text-base font-semibold mb-2">{item.name}</Text>
                <Text className="text-green-600 font-bold">{item.price}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({});