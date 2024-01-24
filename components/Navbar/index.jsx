import { View, ScrollView, Text, Image, Button, Pressable } from "react-native";
const DotsMenu = require("./../../assets/img/ellipsis-vertical-solid.svg")
import DotMenu from "../../assets/img/ellipsis-vertical-solid.svg"
export default function Navbar() {
    return <View>
        <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column", backgroundColor: "#075E55", height: 100, width: "100%", padding: 10 }}>
            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                <Text style={{ color: "white", fontSize: 25, fontWeight: 500 }}>WhatsApp</Text>
                <Image source={{ uri: "https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png" }} />
                {/* <Image source={DotMenu} style={{ height: 20 }} /> */}
            </View>
            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 300 }}>
                <Pressable ><Text style={{ color: "white", fontSize: 16, fontWeight: 500 }}>Chats</Text></Pressable>
                <Pressable ><Text style={{ color: "white", fontSize: 16, fontWeight: 500 }}>Status</Text></Pressable>
                <Pressable ><Text style={{ color: "white", fontSize: 16, fontWeight: 500 }}>Calls</Text></Pressable>
            </View>
        </View>
    </View>
}