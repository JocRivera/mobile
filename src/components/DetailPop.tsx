import { TouchableOpacity, View } from 'react-native';
import { Icon } from '@/components/ui/icon';
import { Eye, Calendar, MapPin, User, X } from 'lucide-react-native';
import {
    Popover,
    PopoverBackdrop,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverCloseButton
} from "@/components/ui/popover";
import { Text } from "react-native";
import React from "react";

// Define the type for a reservation
interface Reserva {
    id: string;
    plan: string;
    alojamiento: string;
    cliente: string;
    fechaInicio: string;
    fechaFin: string;
    estado: string;
}

export default function DetailPop({ reserva }: { reserva: Reserva }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const statusColors = {
        'Confirmada': 'text-green-500',
        'Pendiente': 'text-yellow-500',
        'Cancelada': 'text-red-500',
        'default': 'text-gray-500'
    };

    const getStatusColor = (estado: string) => {
        return statusColors[estado as keyof typeof statusColors] || statusColors.default;
    };

    return (
        <Popover
            isOpen={isOpen}
            onClose={handleClose}
            onOpen={handleOpen}
            placement="bottom left"
            size="lg"
            trigger={(triggerProps) => {
                return (
                    <TouchableOpacity
                        {...triggerProps}
                        onPress={handleOpen}
                        className="mr-3"
                        accessibilityLabel="Ver detalle"
                    >
                        <Icon as={Eye} size="md" />
                    </TouchableOpacity>
                );
            }}
        >
            <PopoverBackdrop />
            <PopoverContent className="bg-white rounded-lg">
                <PopoverArrow />
                <PopoverHeader className="flex-row items-center justify-between p-3 border-b border-gray-200">
                    <Text className="text-lg font-bold text-typography-900">Detalles de Reserva</Text>
                    <TouchableOpacity onPress={handleClose}>
                        <Icon as={X} size="sm" />
                    </TouchableOpacity>
                </PopoverHeader>
                <PopoverBody className="p-4">
                    <View className="space-y-3">
                        {/* Estado con color */}
                        <View className="flex-row items-center justify-between">
                            <Text className={`font-bold ${getStatusColor(reserva.estado)}`}>
                                {reserva.estado}
                            </Text>
                        </View>

                        {/* Cliente */}
                        <View className="flex-row items-center">
                            <Icon as={User} size="sm" className="mr-2 text-gray-600" />
                            <Text className="flex-1 text-typography-900">{reserva.cliente}</Text>
                        </View>

                        {/* Alojamiento */}
                        <View className="flex-row items-center">
                            <Text className="flex-1 text-typography-900">{reserva.alojamiento}</Text>
                        </View>

                        {/* Plan */}
                        <View className="flex-row items-center justify-between">
                            <Text className="font-medium text-typography-700">{reserva.plan}</Text>
                        </View>

                        {/* Fechas */}
                        <View className="flex-row items-center">
                            <Icon as={Calendar} size="sm" className="mr-2 text-gray-600" />
                            <Text className="flex-1 text-typography-900">
                                {reserva.fechaInicio} - {reserva.fechaFin}
                            </Text>
                        </View>
                    </View>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}