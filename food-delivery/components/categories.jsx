import React from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./categoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoryCard imgUrl="https://papareact.com/wru" title="testing" />
      <CategoryCard imgUrl="https://papareact.com/wru" title="testing" />
      <CategoryCard imgUrl="https://papareact.com/wru" title="testing" />
    </ScrollView>
  );
};

export default Categories;
