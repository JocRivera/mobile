import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectItem } from "@/components/ui/select";
import { ChevronDownIcon } from "lucide-react-native";
import { View } from 'react-native'; // Importa View si aún no lo has hecho

export default function Filter() {
    return (
        <Select >
            <SelectTrigger
                className="rounded-md border border-gray-300 py-2.5 px-3 flex-row items-center justify-between"
                size="xl"
            >
                <SelectInput placeholder="Estado" />
                <ChevronDownIcon />
            </SelectTrigger>
            <SelectPortal>
                <SelectBackdrop />
                <SelectContent >
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="Confirmada" value="Confirmada" />
                    <SelectItem label="Pendiente" value="Pendiente" />
                    <SelectItem label="Cancelada" value="Cancelada" />
                </SelectContent>
            </SelectPortal>
        </Select>
    );
}