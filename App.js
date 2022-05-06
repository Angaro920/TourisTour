import { TourisTour } from "./TourisTour";
import { SafeAreaView, ScrollView } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView>
        <ScrollView>
          <TourisTour />
        </ScrollView>
      </SafeAreaView>
    </ApplicationProvider>
  );
}
