// Import library yang dibutuhkan
import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
// Akhir Import library yang dibutuhkan

// Class Menu 1
class Menu1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#000000', fontFamily: 'sans-serif-medium' }}>Beranda</Text>
      </View>
    );
  }
}
// Akhir Class Menu 1

// Class Menu 2
class Menu2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#000000', fontFamily: 'sans-serif-medium' }}>Berita</Text>
      </View>
    );
  }
}
// Akhir Class Menu 2

// Class Menu 3
class Menu3 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#000000', fontFamily: 'sans-serif-medium' }}>Pengaturan</Text>
      </View>
    );
  }
}
// Akhir Class Menu 3

// Konfigurasi tabs menu
export default createMaterialTopTabNavigator({
  // Class-class menu yang telah kita buat di atas
  Beranda: Menu1,
  Berita: Menu2,
  Pengaturan: Menu3,
  // Akhir Class-class menu yang telah kita buat di atas
}, {
  initialRouteName: 'Beranda', // Tampilan pertama pada tab, kalian bisa ubah ke Berita atau Pengaturan
  // Styling pada tab menu
  tabBarOptions: {
    activeTintColor: '#000000',
    labelStyle: {
      fontWeight: 'bold'
    },
    style: {
      backgroundColor: '#f1c40f',
    },
    indicatorStyle: {
      backgroundColor: '#000000',
    },
  }
  // Akhir Styling pada tab menu
});
// Akhir Konfigurasi tabs menu
