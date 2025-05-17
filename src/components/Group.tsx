import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { Box } from '@/components/ui/box';
import { Icon } from '@/components/ui/icon';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react-native';
import { Calendar, Eye } from 'lucide-react-native';
import { View } from 'react-native';
import DetailPop from './DetailPop';

interface Reserva {
    id: string;
    plan: string;
    alojamiento: string;
    cliente: string;
    fechaInicio: string;
    fechaFin: string;
    estado: string;
}
const colorEstado = (estado: string) => {
    switch (estado) {
        case 'Confirmada': return 'bg-green-500';
        case 'Pendiente': return 'bg-yellow-400';
        case 'Cancelada': return 'bg-red-500';
        default: return 'bg-gray-400';
    }
};
const reservas: Reserva[] = [
    { id: '1', plan: 'Plan 1', alojamiento: 'Alojamiento 1', cliente: 'Jose manuel Rivera', fechaInicio: 'Dic 24', fechaFin: 'Dic 31, 2025', estado: 'Confirmada' },
    { id: '2', plan: 'Plan 2', alojamiento: 'Alojamiento 2', cliente: 'Maria Fernanda Lopez', fechaInicio: '2023-10-06', fechaFin: '2023-10-10', estado: 'Pendiente' },
    { id: '3', plan: 'Plan 3', alojamiento: 'Alojamiento 3', cliente: 'Pastora Nube', fechaInicio: '2023-10-11', fechaFin: '2023-10-15', estado: 'Cancelada' },
    { id: '4', plan: 'Plan 4', alojamiento: 'Alojamiento 4', cliente: 'Me Quiero Matar', fechaInicio: '2023-10-16', fechaFin: '2023-10-20', estado: 'Confirmada' },
];

// Extraemos estados únicos
const estadosUnicos = Array.from(new Set(reservas.map(r => r.estado)));

export default function ReservasPorEstadoAccordion() {
    // Estado que guarda qué estados están expandidos (true = abierto)
    const [estadosAbiertos, setEstadosAbiertos] = useState<Record<string, boolean>>({});

    const handleDetail = (id: string) => {
        // Aquí puedes manejar la navegación a la pantalla de detalle de la reserva
        console.log(`Navegar a detalle de reserva con ID: ${id}`);
    }

    const toggleEstado = (estado: string) => {
        setEstadosAbiertos((prev) => ({
            ...prev,
            [estado]: !prev[estado],
        }));
    };

    return (
        <ScrollView className="flex-1 p-4 bg-white">
            {estadosUnicos.map((estado) => {
                // Reservas para ese estado
                const reservasFiltradas = reservas.filter(r => r.estado === estado);

                const abierto = estadosAbiertos[estado] || false;

                return (
                    <Box key={estado} className="mb-4 border rounded shadow">
                        {/* Header / Card que se toca para abrir/cerrar */}
                        <TouchableOpacity
                            onPress={() => toggleEstado(estado)}
                            className="flex-row items-center justify-between p-4 bg-gray-200 rounded-t"
                        >
                            <Text className="text-lg font-semibold">{estado}</Text>
                            <Icon
                                as={abierto ? ChevronUpIcon : ChevronDownIcon}
                                className="text-gray-700"
                            />
                        </TouchableOpacity>

                        {/* Contenido expandible: reservas */}
                        {abierto && (
                            <Box className="p-4 bg-white border-t border-gray-300">
                                {reservasFiltradas.length === 0 && (
                                    <Text className="italic text-gray-500">No hay reservas en este estado.</Text>
                                )}

                                {reservasFiltradas.map((reserva) => (
                                    <Box
                                        key={reserva.id}
                                        className="flex flex-row items-center p-3 mb-4 border rounded bg-gray-50"
                                    >
                                        {/* Barra lateral color al inicio */}
                                        <View className={`${colorEstado(reserva.estado)} w-2 h-full rounded-md mr-3`} />
                                        <DetailPop reserva={reservas} />

                                        {/* Contenido info reserva alineado a la derecha */}
                                        <View className="flex flex-col items-end flex-1">
                                            <Text className="text-base font-semibold">{reserva.cliente}</Text>
                                            <Text>{reserva.alojamiento}</Text>
                                            <View className="flex-row items-center">
                                                <Icon as={Calendar} className="mr-2" />
                                                <Text>{reserva.fechaInicio} - {reserva.fechaFin}</Text>
                                            </View>
                                        </View>
                                    </Box>

                                ))}
                            </Box>
                        )}
                    </Box>
                );
            })}
        </ScrollView>
    );
}
