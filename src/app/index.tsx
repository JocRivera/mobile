import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../layout/Header";
import Login from "@/modules/user/Login";

export default function Page() {
  return (
    <View className="flex flex-1">
      {/* <Header /> */}
      <Content />
      <Footer />
    </View>
  );
}

function Content() {
  return (
    <View className="flex-1">
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className="px-4 md:px-6">
          <View className="flex flex-col items-center gap-4 text-center">
            <Text
              role="heading"
              className="text-3xl font-bold tracking-tighter text-center native:text-5xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Welcome to Project ACME
            </Text>
            <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
              Discover and collaborate on acme. Explore our services now.
            </Text>
            <Login />
          </View>
        </View>
      </View>
    </View>
  );
}



function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="flex bg-gray-100 shrink-0 native:hidden"
      style={{ paddingBottom: bottom }}
    >
      <View className="items-start flex-1 px-4 py-6 md:px-6 ">
        <Text className={"text-center text-gray-700"}>
          © {new Date().getFullYear()} Me
        </Text>
      </View>
    </View>
  );
}
