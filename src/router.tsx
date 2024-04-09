import {
    createBrowserRouter
} from "react-router-dom";
import History from "./pages/admin/history";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Dashboard from './pages/admin/dashboard';
import TripsList from './pages/admin/trips';
import AdminLayout from "./components/layouts/Adminlayout";
import AddTrip from "./pages/admin/trips/add";
import { getBusHouses } from "./services/busHouse.api";
import UpdateTrip from "./pages/admin/trips/update";
import { getTripById } from "./services/trip.api";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "trip",
        element: <AboutPage />,
    },
    {
        path: "admin",
        element: <AdminLayout />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "trips",

                element: <TripsList />,
            },
            {
                path: "trips/add",
                loader: async () => {
                    const { data } = await getBusHouses();
                    return data
                },
                element: <AddTrip />
            },
            {
                path: "trips/:id",
                loader: async ({ params }) => {
                    const { data: busHouses } = await getBusHouses();
                    if (params.id) {
                        const { data: trip } = await getTripById(params.id)
                        return { trip, busHouses }
                    }
                    return { busHouses }
                },
                element: <UpdateTrip />
            },
            {
                path: "history",
                loader: async () => {
                    const { data } = await getBusHouses();
                    return data
                },
                element: <History />
            },
        ]
    },
]);

export default router