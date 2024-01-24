import { View, ScrollView, Text, Image, Button, Pressable } from "react-native";
const DotsMenu = require("./../../assets/img/ellipsis-vertical-solid.svg")
import DotMenu from "../../assets/img/ellipsis-vertical-solid.svg"
export default function Navbar() {
    return <View>
        <View style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            backgroundColor: "#008069",
            height: 100,
            width: "100%",
            padding: 15,
        }}>
            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", alignSelf: "stretch" }}>
                <Text style={{ color: "white", fontSize: 25, fontWeight: 500 }}>WhatsApp</Text>
                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }} >
                    <Image style={{ height: 20, width: 20, marginRight: 10 }} source={{ uri: "https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png" }} />
                    {/* <Image style={{ height: 20, width: 20 }} source={DotsMenu} /> */}
                    {/* <Image style={{ height: 20, width: 20 }} source={{ uri: "https://cdn2.iconfinder.com/data/icons/50-material-design-round-corner-style/44/Submenu_2-512.png" }} /> */}
                </View>
            </View>
            <View style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: 300 }}>
                <Pressable ><Text style={{ color: "white", fontSize: 16, fontWeight: 500 }}>Chats</Text></Pressable>
                <Pressable ><Text style={{ color: "white", fontSize: 16, fontWeight: 500 }}>Status</Text></Pressable>
                <Pressable ><Text style={{ color: "white", fontSize: 16, fontWeight: 500 }}>Calls</Text></Pressable>
            </View>
        </View>
    </View>
}