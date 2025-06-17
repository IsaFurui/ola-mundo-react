import Banner from 'componentes/Banner';
import { Outlet } from 'react-router-dom';

export default function PaginaPadrao ({ children }) {
    return (
        <main>
            <Banner />
            <Outlet />
            {children}            
        </main>
    )
}