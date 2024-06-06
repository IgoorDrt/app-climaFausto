import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../config/styles";
export default function NewsScreen() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
    //   "https://newsapi.org/v2/top-headlines?country=us&apiKey=b7e0d030997c44b8958ec5989b78b509"
      "https://newsapi.org/v2/everything?q=climate&from=2024-05-06&sortBy=publishedAt&apiKey=b7e0d030997c44b8958ec5989b78b509"
    )
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.error(error));
  }, []);
  return (
    <View>
      <Text style={styles.titulo}>Welcome to CliNews!!</Text>
      <FlatList
        data={news}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            
            <Text style={styles.titulo}>{item.title}</Text> <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}