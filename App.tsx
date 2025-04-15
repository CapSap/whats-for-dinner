import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What’s for dinner?</Text>
      <View style={styles.line} />
      <Text style={styles.subtitle}>The Munchmaker</Text>
            <View>
        <View style={styles.cardImageContainer}>
          <Image
            style={styles.cardImage}
            source={require("./assets/images/hotpot.jpeg")}
          />
        </View>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>Hotpot</Text>
          <Text>🕓 Prep: 10 mins</Text>
          <Text>🕓 Cook: 15 mins</Text>
          <Text>🕓 Total: 25 mins</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4fbf8",
    // backgroundColor: "#ee82ee",
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "Shrikhand-Regular",
    fontSize: 25,
    letterSpacing: 0.25,
  },
  subtitle: {
    fontFamily: "Fasthand-Regular",
    color: "#39584D",
    fontSize: 30,
  },

  subtitle2: {
    color: "#39584D",
    fontSize: 30,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#50AABC80",
    width: "100%",
  },
  cardContainer: {},
  cardImageContainer: {
    height: 250,
    width: 300,
    backgroundColor: "black",
    padding: 25,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  cardImage: {
    height: 187,
    width: 252,
    borderRadius: 30,
  },
  cardTextContainer: { backgroundColor: "#E4E2E2", width: 300, height: 150 },
  cardTitle: { fontWeight: "500", fontSize: 30 },
});
