import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { api } from "../../services/api";

type MovieDetails = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    runtime: string;
    release_data: string;
    vote_average: number;
}

type RouterProps = {
    movieId: number;
}

export function Details() {

    const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
    const [loading, setLoading] = useState(false);
    
    const route = useRoute()
    const { movieId } = route.params as RouterProps;

    useEffect(() => {

        const fetchMovieDetails = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/movie/${movieId}`)
                    console.log(JSON.stringify(response.data, null, 2));
                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log(err);
            }
        };

        fetchMovieDetails();
        
    }, [movieId])


    return (
        <Text> Details </Text>
    )
} 