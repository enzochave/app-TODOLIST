import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { style } from "./style";

export default function App() {

    return (
        <View style={style.container}>
            <Text style={style.title}> Meus Estudos</Text>
            <Text style={style.subtitle}>Carregando...</Text>

            <View style={style.inputRow}>

                <TextInput  
                    style={style.input}
                    value="" />

                <TouchableOpacity style={style.addButton}>
                    <Text style={style.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
}