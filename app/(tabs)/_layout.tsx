import "@/app/global.css";
import MainView from "@/componenets/MainView";
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Tabs } from "expo-router";
export default function Layout() {
    return (
        <>
            <MainView 
                >
                <Tabs
                // ={{ backgroundColor: Colors.gray700 }}
                
                screenOptions={{
                    headerStyle:{
                        backgroundColor: Colors.gray500, 
                    },
                    headerTitleStyle: {
                        color: Colors.secondary300,
                        
                    },
                    tabBarActiveTintColor: Colors.secondary300,
                    tabBarStyle: {
                        backgroundColor: Colors.gray500,
                        
                    },
                    headerRightContainerStyle:{
                        paddingRight: 24,
                    },
                    headerRight(props) {
                        return (
                            <Ionicons
                                name="add"
                                size={24}
                                color={Colors.secondary300}
                                onPress={() => {
                                    router.push('/manageExpenses');
                                }}
                            />
                        );
                    },
                }}
                >
                    <Tabs.Screen
                        name="recent"

                        options={{
                            
                            title: "Recent",
                            headerShown: true,
                            
                            tabBarIcon: ({ focused, color, size }) =>
                                focused ? <Ionicons name="hourglass" size={size} color={color} /> : <Ionicons name="hourglass-outline" size={size} color={color} />,
                        }}
                    />
                    <Tabs.Screen
                        name="allExpenses"
                        options={{
                            title: "All Expenses",
                            headerShown: true,
                             tabBarIcon: ({ focused, color, size }) =>
                                focused ? <Ionicons name="calendar" size={size} color={color} /> : <Ionicons name="calendar-outline" size={size} color={color} />,
                        }}
                    />
                                        <Tabs.Screen
                        name="about"
                        options={{
                            title: "About",
                            headerShown: true,
                             tabBarIcon: ({ focused, color, size }) =>
                                focused ? <Ionicons name="information-circle" size={size} color={color} /> : <Ionicons name="information-circle-outline" size={size} color={color} />,
                        }}
                    />
                </Tabs>
            </MainView>

        </>

    )
}