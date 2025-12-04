import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { incrementQty, decrementQty, removeItem } from "../../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const getTotal = () => {
    return cartItems
      .reduce((sum: any, item: any) => {
        const price = parseFloat(item.price);
        return sum + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-4 py-4">
      <Text className="text-2xl font-bold text-gray-800 mb-4">My Cart</Text>

      {cartItems.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg text-gray-500">Your cart is empty 🛒</Text>
        </View>
      ) : (
        <>
          {/* Cart List */}
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="bg-gray-50 rounded-xl p-4 mb-3 flex-row justify-between items-center border border-gray-200">
                {/* LEFT */}
                <View className="flex-row items-center gap-3">
                  <View className="w-12 h-12 bg-white rounded-lg items-center justify-center">
                    <Text className="text-3xl">{item.image}</Text>
                  </View>

                  <View>
                    <Text className="text-gray-800 font-semibold text-base">
                      {item.name}
                    </Text>
                    <Text className="text-emerald-600 font-bold text-sm">
                      {item.price}
                    </Text>
                  </View>
                </View>

                {/* RIGHT */}
                <View className="flex-row items-center gap-2">
                  <TouchableOpacity
                    className="w-7 h-7 rounded-full bg-gray-200 items-center justify-center"
                    onPress={() => dispatch(decrementQty(item.id))}
                  >
                    <Text className="text-lg font-bold">−</Text>
                  </TouchableOpacity>

                  <Text className="mx-4 text-gray-400">{item.quantity}</Text>
                  <TouchableOpacity
                    className="w-7 h-7 rounded-full bg-emerald-600 items-center justify-center"
                    onPress={() => dispatch(incrementQty(item.id))}
                  >
                    <Text className="text-white text-lg font-bold">+</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => dispatch(removeItem(item.id))}
                    className="ml-3"
                  >
                    <Text className="text-red-500 text-sm font-semibold">
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />

          {/* TOTAL + CHECKOUT */}
          <View className="bg-white p-4 border-t border-gray-200 mt-2">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-semibold text-gray-800">
                Total
              </Text>
              <Text className="text-xl font-bold text-emerald-600">
                ₹{getTotal()}
              </Text>
            </View>

            <TouchableOpacity className="bg-emerald-600 py-4 rounded-xl items-center">
              <Text className="text-white font-semibold text-lg">
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({});
