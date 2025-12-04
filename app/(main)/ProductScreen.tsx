// // ProductsScreen.js
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet, SafeAreaView } from 'react-native';

// const API_BASE = 'http://localhost:3000'; 
// export default function ProductsScreen() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   async function fetchProducts() {
//     try {
//       setLoading(true);
//       const resp = await fetch(`${API_BASE}/products`);
//       if (!resp.ok) throw new Error('Failed to fetch');
//       const data = await resp.json();
//       setProducts(data);
//     } catch (err) {
//       setError(err.message || 'Error');
//     } finally {
//       setLoading(false);
//     }
//   }

//   if (loading) return (
//     <View style={styles.center}><ActivityIndicator size="large" /></View>
//   );
//   if (error) return (
//     <View style={styles.center}><Text>Error: {error}</Text></View>
//   );

//   return (
//     <SafeAreaView style={{flex:1}}>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item._id}
//         contentContainerStyle={{padding: 16}}
//         renderItem={({item}) => (
//           <View style={styles.card}>
//             <Image source={{uri: item.imageUrl || 'https://via.placeholder.com/150'}} style={styles.img} />
//             <View style={{flex:1, marginLeft:12}}>
//               <Text style={styles.name}>{item.name}</Text>
//               <Text style={styles.cat}>{item.category} • ₹{item.price}</Text>
//               <Text style={styles.stock}>Stock: {item.stock}</Text>
//             </View>
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   center:{flex:1, alignItems:'center', justifyContent:'center'},
//   card:{flexDirection:'row', backgroundColor:'#fff', padding:12, borderRadius:8, marginBottom:12, shadowColor:'#000', shadowOpacity:0.05, elevation:2},
//   img:{width:72, height:72, borderRadius:6},
//   name:{fontSize:16, fontWeight:'600'},
//   cat:{color:'#666', marginTop:4},
//   stock:{marginTop:6, color:'#333'}
// });
