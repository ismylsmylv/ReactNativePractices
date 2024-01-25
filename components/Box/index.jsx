import { View, StyleSheet, Text } from "react-native"

export default function Box({ styles, children }) {
    return <View style={styles.box}>
        {
            children.map((elem, i) => {
                return <Text style={styles.text} key={i}>{elem}</Text>

            })
        }
        <Text style={styles.text}>Box2</Text>
    </View>
}


const styles = StyleSheet.create({

})