import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, View, FlatList } from "react-native";
import { TextInput } from "react-native";
import { Title } from "react-native-paper";

import { default as data } from "../../api/data.json";
import CardItem from "../components/card";
import LoadingBox from "../components/LoadingBox";
import ErrorBox from "../components/ErrorBox";
import { useStarships } from "../hook/UseStarship";

// const Item = ({ item }) => (
//     <View style={styles.card}>
//       <Text >{item.name}</Text>
//       <Text>{item.model}</Text>
//       <Text>{item.cost_in_credits} Credits</Text>
//       <TextInput>BUY THIS STARSHIP</TextInput>
//     </View>
//   );

  

  

export const StarshipFeedScreen = () => {


  const { isLoading, isError,data} = useStarships();

  if (isLoading) {
    return <LoadingBox />;
  }
  if (isError) {
    return <ErrorBox />;
  }
  const  datas = data.results;
  // console.log(datas.name);

  const renderItem =({item}:any)=>(
    
    <CardItem {...item}/>
 
  );
  

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Title style={styles.titre}>Starships</Title>

        <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={item => item.name}/>
      {/* <View style={styles.container}>
        <Text>{JSON.stringify(data.results[0].name)}</Text>

      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor:'lightgrey',
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card:{
    backgroundColor:'white',
    width:200,
    height:50,
  },
  titre:{
    paddingTop:40,
    margin:20,
    fontSize:40,
  }
});
