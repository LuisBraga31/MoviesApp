import { FlatList, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CardMovie } from "../../components/CardMovie";

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}

export function Home () {

    const [discoveyMovies, setDiscoveyMovies] = useState<Movie[]>([]);

    const loadingData = async () => {
        const response = await api.get("/movie/popular")
        setDiscoveyMovies(response.data.results)
    }

    useEffect(() => {
        loadingData();
    }, [])

    return (
        <View style={styles.container}> 
            
            <View style={styles.header}>
                <Text style={styles.headerText}> O que você quer assistir ? </Text>
                <View style={styles.containerInput}>
                    <TextInput style={styles.input} placeholderTextColor="#fff" placeholder="Buscar"/>
                    <MagnifyingGlass color="#fff" size={25} weight="light"/>
                </View>
            </View>

            <View>
                <FlatList 
                    data={discoveyMovies}
                    numColumns={3}
                    renderItem={(item) => (<CardMovie data={item.item}/>)}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{
                        padding: 35,
                        paddingBottom: 100,
                    }}
                />
            </View>

        </View>
    )
}