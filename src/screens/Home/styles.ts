import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242A32',
    },
    header: {
      padding: 25,
      paddingBottom: 5,
    },
    headerText: {
        marginTop: 30,
        fontSize: 24,
        lineHeight: 45,
        color: '#FFF'
    },
    containerInput: {
        backgroundColor: "#67686D",
        height: 42,
        padding: 10,
        borderRadius: 16,
        marginTop: 24,
        marginBottom: 20,
        opacity: 0.7,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    input: {
      color: "#fff",
      width: "80%",
      paddingLeft: 15
    }
  });