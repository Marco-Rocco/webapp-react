import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";

//context
import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";


export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)

    return <>
        <Header />
        <main>
            <Outlet />
        </main>

        {isLoading && <Loader />}
    </>
};