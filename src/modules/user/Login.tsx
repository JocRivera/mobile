import { View } from "react-native";
import { Link } from "expo-router";

export default function Login() {
    return (
        <View className="gap-4">
            <Link
                suppressHighlighting
                className="flex items-center justify-center px-4 py-2 overflow-hidden text-sm font-medium transition-colors bg-gray-900 rounded-md h-9 text-gray-50 web:shadow ios:shadow hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/"
            >
                Explore
            </Link>
        </View>
    )
}