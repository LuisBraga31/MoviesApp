import { ActivityIndicator, FlatList, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { MagnifyingGlass } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { CardMovie } from "../../components/CardMovie";
import { useNavigation } from "@react-navigation/native";

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}

export function Home () {

    const [discoveyMovies, setDiscoveyMovies] = useState<Movie[]>([]);
    const [searchResultMoves, setSearchResultMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [noResult, setNoResult] = useState(false);
    const [search, setSearch] = useState("");

    const loadingData = async () => {
        setLoading(true);
        const response = await api.get("/movie/popular", {
            params: {
                page,
            },
        });
        setDiscoveyMovies(response.data.results)
        setPage(page + 1)
        setLoading(false);
    }

    const searchMovies = async (query: string) => {
        setLoading(true);
        const response = await api.get("/search/movie", {
            params: {
                query,
            },
        });
        
        if(response.data.results.length === 0) {
            setNoResult(true);
            setLoading(false);
            setSearchResultMovies([]);
        } else {
            setNoResult(false);
            setSearchResultMovies(response.data.results);
            setLoading(false);
        }
    }

    const handleSearch = (text: string) => {
        setSearch(text)
        if(text.length > 2) {
            searchMovies(text);
        } else {
            setNoResult(false);
            setSearchResultMovies([]);
        }
    }

    const navigation = useNavigation();

    const renderMovieItem = ({item} : {item: Movie}) => (
        <CardMovie data={item} onPress={() => navigation.navigate("Details", {movieId: item.id})}/>
    )

    useEffect(() => {
        loadingData();
    }, []);

    const movieData = search.length > 2 ? searchResultMoves : discoveyMovies;

    return (
        <View style={styles.container}> 
            
            <View style={styles.header}>
                <Text style={styles.headerText}> O que você quer assistir ? </Text>
                <View style={styles.containerInput}>
                    <TextInput style={styles.input} 
                        placeholderTextColor="#fff" 
                        placeholder="Buscar"
                        value={search} 
                        onChangeText={handleSearch}
                    />
                    <MagnifyingGlass color="#fff" size={25} weight="light"/>
                </View>

                {noResult && (
                    <Text style={styles.noResult}> 
                        Nenhum resultado encontrado para {search} 
                    </Text>
                )}

            </View>

            <View>
                <FlatList 
                    data={movieData}
                    numColumns={3}
                    renderItem={renderMovieItem}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={{
                        padding: 35,
                        paddingBottom: 100,
                    }}
                    onEndReached={() => loadingData()}
                    onEndReachedThreshold={0.5}
                />
                {loading && <ActivityIndicator size={50} color="#0296e5"/>}
            </View>

        </View>
    )
}