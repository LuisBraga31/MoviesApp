import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { MagnifyingGlassPlus } from "phosphor-react-native";

export function Home () {
    return (
        <View style={styles.container}> 
            <Text style={styles.headerText}> O que você quer assistir ? </Text>
            <View style={styles.containerInput}>
                <TextInput style={styles.input} placeholder="Buscar"/>
                <MagnifyingGlassPlus color="#fff" size={25} weight="light"/>
            </View>
        </View>
    )
}