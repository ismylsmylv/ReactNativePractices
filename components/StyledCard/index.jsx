import { View, Text, StyleSheet } from "react-native";

export default function StyledCard() {
    return <View style={styles.container}>
        <Text style={[styles.lightBlue, styles.box]}>Light Blue</Text>
        <Text style={[styles.lightGreen, styles.box]}>LIght Green</Text>
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
    },
    box: {
        height: 50,
        // height: "20%",
        width: 50,
        // width: "20%",
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 2,
        marginVertical: 30,
        borderWidth: 3,
        borderColor: "red",
        borderStyle: "solid",
        borderRadius: 3,
        shadowColor: "#333333",
        shadowOpacity: 0.9,
        shadowRadius: 100,
        shadowOffset: {
            height: 230,
            width: 200
        },
        elevation: 10
    },
    lightBlue: {
        backgroundColor: "blue",
    },
    lightGreen: {
        backgroundColor: "green",
    }
})