import { TourisTour } from "./TourisTour";
import { SafeAreaView, ScrollView } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { LinearGradient } from "react-native-svg";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView>
        <ScrollView>
          <LinearGradient>
          <TourisTour />
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </ApplicationProvider>
  );
}
