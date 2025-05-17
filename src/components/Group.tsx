import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { Box } from '@/components/ui/box';
import { Icon } from '@/components/ui/icon';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react-native';

interface Reserva {
    id: string;
    plan: string;
    alojamiento: string;
    cliente: string;
    fechaInicio: string;
    fechaFin: string;
    estado: string;
}

const reservas: Reserva[] = [
    { id: '1', plan: 'Plan 1', alojamiento: 'Alojamiento 1', cliente: 'Cliente 1', fechaInicio: '2023-10-01', fechaFin: '2023-10-05', estado: 'Confirmada' },
    { id: '2', plan: 'Plan 2', alojamiento: 'Alojamiento 2', cliente: 'Cliente 2', fechaInicio: '2023-10-06', fechaFin: '2023-10-10', estado: 'Pendiente' },
    { id: '3', plan: 'Plan 3', alojamiento: 'Alojamiento 3', cliente: 'Cliente 3', fechaInicio: '2023-10-11', fechaFin: '2023-10-15', estado: 'Cancelada' },
    { id: '4', plan: 'Plan 4', alojamiento: 'Alojamiento 4', cliente: 'Cliente 4', fechaInicio: '2023-10-16', fechaFin: '2023-10-20', estado: 'Confirmada' },
];

// Extraemos estados únicos
const estadosUnicos = Array.from(new Set(reservas.map(r => r.estado)));

export default function ReservasPorEstadoAccordion() {
    // Estado que guarda qué estados están expandidos (true = abierto)
    const [estadosAbiertos, setEstadosAbiertos] = useState<Record<string, boolean>>({});

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
                                        className="p-3 mb-4 border rounded bg-gray-50"
                                    >
                                        <Text className="text-base font-semibold">{reserva.cliente}</Text>
                                        <Text>Plan: {reserva.plan}</Text>
                                        <Text>Alojamiento: {reserva.alojamiento}</Text>
                                        <Text>Fecha: {reserva.fechaInicio} - {reserva.fechaFin}</Text>
                                        <Text className="font-medium text-blue-600">Estado: {reserva.estado}</Text>
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
