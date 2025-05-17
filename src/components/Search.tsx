import { View, Text } from "react-native";
import { Search } from "lucide-react-native";
import { Button } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { useState } from "react";

export default function SearchComponent() {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        // Aquí puedes manejar la búsqueda
        console.log("Buscando:", search);
    };
    return (
        <View className="flex flex-row items-center justify-between px-4 py-1 bg-white border-gray-200">
            <Input
                className="flex-1 p-1 rounded-md">
                <InputField
                    type="text"
                    placeholder="Buscar..."
                    value={search}
                    onChangeText={setSearch}
                />
                <Button className="ml-2" variant="link" onPress={handleSearch} >
                    <Search size={20} />
                </Button>
            </Input>
        </View>
    );
}