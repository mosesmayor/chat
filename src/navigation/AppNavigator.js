import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';

// Auth screens
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

// Main tab screens
import DashboardScreen from '../screens/DashboardScreen';
import ConversationsScreen from '../screens/ConversationsScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Profile sub-screens
import MyProfileScreen from '../screens/MyProfileScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import TeammatesScreen from '../screens/TeammatesScreen';
import InviteTeammateScreen from '../screens/InviteTeammateScreen';
import BrandsScreen from '../screens/BrandsScreen';
import CreateBrandScreen from '../screens/CreateBrandScreen';
import OfficeHoursScreen from '../screens/OfficeHoursScreen';
import EditDayHoursScreen from '../screens/EditDayHoursScreen';
import WidgetSettingsScreen from '../screens/WidgetSettingsScreen';
import PlansBillingScreen from '../screens/PlansBillingScreen';
import BanListScreen from '../screens/BanListScreen';
import AuditLogScreen from '../screens/AuditLogScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

// Utility screens
import SearchScreen from '../screens/SearchScreen';
import EmptyInboxScreen from '../screens/EmptyInboxScreen';
import EmptyContactsScreen from '../screens/EmptyContactsScreen';
import EmptyTicketsScreen from '../screens/EmptyTicketsScreen';
import ErrorScreen from '../screens/ErrorScreen';
import LoadingScreen from '../screens/LoadingScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primaryDark,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarStyle: {
          backgroundColor: Colors.white,
          borderTopColor: Colors.divider,
          paddingTop: 8,
          paddingBottom: 8,
          height: 60,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: '600' },
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Dashboard: 'grid',
            Conversations: 'chatbubbles',
            Analytics: 'bar-chart',
            Profile: 'person',
          };
          return <Ionicons name={icons[route.name]} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Conversations" component={ConversationsScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Auth Flow */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />

        {/* Main App */}
        <Stack.Screen name="MainTabs" component={MainTabs} />

        {/* Profile Sub-screens */}
        <Stack.Screen name="MyProfile" component={MyProfileScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="Teammates" component={TeammatesScreen} />
        <Stack.Screen name="InviteTeammate" component={InviteTeammateScreen} />
        <Stack.Screen name="Brands" component={BrandsScreen} />
        <Stack.Screen name="CreateBrand" component={CreateBrandScreen} />
        <Stack.Screen name="OfficeHours" component={OfficeHoursScreen} />
        <Stack.Screen name="EditDayHours" component={EditDayHoursScreen} />
        <Stack.Screen name="WidgetSettings" component={WidgetSettingsScreen} />
        <Stack.Screen name="PlansBilling" component={PlansBillingScreen} />
        <Stack.Screen name="BanList" component={BanListScreen} />
        <Stack.Screen name="AuditLog" component={AuditLogScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />

        {/* Utility */}
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="EmptyInbox" component={EmptyInboxScreen} />
        <Stack.Screen name="EmptyContacts" component={EmptyContactsScreen} />
        <Stack.Screen name="EmptyTickets" component={EmptyTicketsScreen} />
        <Stack.Screen name="Error" component={ErrorScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
