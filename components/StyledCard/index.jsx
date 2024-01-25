import { View, Text, StyleSheet } from "react-native";

export default function StyledCard() {
    return <View style={styles.container}>
        <Text style={styles.title}>HI</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "violet",
        padding: 20
    },
    title: {
        fontWeight: "600",
        color: "white"
    }
})