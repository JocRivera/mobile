import { TouchableOpacity } from 'react-native';
import { Icon } from '@/components/ui/icon';
import { Eye } from 'lucide-react-native';
import { Button, ButtonText } from "@/components/ui/button";
import {
    Popover,
    PopoverBackdrop,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover";
import { Text, View } from "react-native";
import React from "react";

export default function DetailPop({ reserva }: { reserva: any }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleDetail = (id: string) => {
        // Aquí puedes manejar la navegación a la pantalla de detalle de la reserva
        console.log(`Navegar a detalle de reserva con ID: ${id}`);
    }

    return (
        <Popover
            trigger={(triggerProps) => {
                return (
                    <TouchableOpacity
                        {...triggerProps}
                        onPress={() => {
                            handleDetail(reserva.id);
                            setIsOpen(true);
                        }}
                        className="mr-3"
                        accessibilityLabel="Ver detalle"
                    >
                        <Icon as={Eye} size="md" />
                    </TouchableOpacity>
                );
            }}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            placement="bottom"
            size="md"
        >
            <PopoverContent>
                <PopoverBackdrop />
                <PopoverArrow />
                <PopoverBody>
                    <Text className="text-typography-900">
                        Alex, Annie and many others are already enjoying the Pro features,
                        don't miss out on the fun!
                    </Text>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}