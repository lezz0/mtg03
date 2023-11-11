import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { Search } from '../components/search.component';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
// import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";





const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 15
  }

})``

const Loading = styled(ActivityIndicator)`
margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
   return(
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
         <Loading size={50} animating={true} /> 
         </LoadingContainer>
         ) }
      <Search/>
      <RestaurantList
        data = {restaurants}
        horizontal
        //to make it horizontal scrolling ^^^change back but styles are kinda fked
        renderItem={({ item }) => {
          console.log(item);
          return(
          <Spacer position="bottom" size="large">
           <RestaurantInfoCard restaurant={item} /> 
           </Spacer>
        )} }
        keyExtractor ={(item) => item.name}
      />       
  </SafeArea>
)
};
