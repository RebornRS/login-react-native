import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar,Platform } from "react-native";

import Routes from "../routes/"

export default function RootLayout() {

  useEffect(() => {

    if(Platform.OS == "android" ){
        StatusBar.setBackgroundColor("#353A40");
    }

  }, []);

  return (
      <NavigationContainer independent={true}>
        <StatusBar backgroundColor="#353A40"/>
        <Routes/>
      </NavigationContainer>
  );
}
