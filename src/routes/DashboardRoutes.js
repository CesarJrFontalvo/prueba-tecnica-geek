import {
    Routes, Route,
    Navigate
} from 'react-router-dom';


import Ingredientes from '../components/Ingredientes';
import RegistroIngredientes from '../components/RegistroIngredientes';

export const DashboardRoutes = () => {
    return ( 
        <>
            <div>
           
                <Routes>
                    <Route path="/" element={<Ingredientes />} />
                    <Route path="/registro-ingredientes" element={<RegistroIngredientes />} />
                    <Route path='*' element={<Navigate to="/" />} />
                    
                </Routes>
            </div>

        </>
    )
}
