import { View, Text, Image, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* SECTION FOTO */}
      <Image
        source={require("../../assets/images/mikaelll.jpeg")}
        style={styles.profilePic}
      />

      {/* SECTION IDENTITAS */}
      <Text style={styles.name}>Mobile Dev </Text>
       <Text style={styles.nim}>Nama: Mikael Putra Manullang </Text>
       <Text style={styles.nim}>Nim : 243303621262</Text>

      {/* SECTION BIO */}
      <View style={styles.bioCard}>
        <Text style={styles.bioText}>
           the next step is far important, than your previous mistakes.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profilePic: {
    width: 140,
    height: 168,
    borderRadius: 70, // Bikin jadi bulat
    borderWidth: 3,
    borderColor: "#fffffb",
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "900",
    color: "#fff",
    marginBottom: 5,
  },
  nim: {
    fontSize: 14,
    color: "#ffff99",
    marginBottom: 5,
    letterSpacing: 2,
  },
  bioCard: {
    backgroundColor: "#111",
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#333",
    width: "100%",
  },
  bioText: {
    color: "#ccc",
    textAlign: "center",
    fontStyle: "italic",
  },
});
