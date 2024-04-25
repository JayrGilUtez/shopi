import {useRoutes, BrowserRouter} from "react-router-dom";
import './App.css'
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import MyOrder from "./pages/MyOrder.jsx";
import MyOrders from "./pages/MyOrders.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./components/home/Navbar.jsx";

const AppRoutes = () => {
    return  useRoutes([
        {path: '/', element: <Home/>},
        {path: '/sign-in', element: <SignIn/>},
        {path: '/my-account', element: <MyAccount/>},
        {path: '/my-order', element: <MyOrder/>},
        {path: '/my-orders', element: <MyOrders/>},
        {path: '/not-found', element: <NotFound/>},
    ])
}
function App() {
    return (
        <BrowserRouter>
            <AppRoutes/>
            <Navbar/>
        </BrowserRouter>
    )
}
export default App
