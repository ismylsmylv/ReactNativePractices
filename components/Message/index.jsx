import { Image, Text, TextComponent, TextInput, View } from "react-native";

export default function Message() {
    return <View style={MessageStyles}>
        <Image
            style={{ height: 50, width: 50, marginRight: 10, borderRadius: 50 }}
            source={{ uri: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg" }}
        />
        <View>
            <Text style={{ fontSize: 16, fontWeight: 600, color: "black" }}>Jane Doe</Text>
            <Text style={{ fontSize: 14, marginRight: 180 }}>How are you?</Text>
        </View>
        <View>
            <Text style={{ marginBottom: 5 }}>09:23</Text>
            <Text style={{ backgroundColor: "#20C253", textAlign: "center", height: 20, width: 20, borderRadius: 50, color: "white" }}>2</Text>
        </View>

    </View>
}

const MessageStyles = {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
    borderBottomWidth: 1,
    borderBottomColor: '#c9c9c9'

}