import {
    Routes, Route,
    Navigate
} from 'react-router-dom';


import Ingredientes from '../components/Ingredientes';

export const DashboardRoutes = () => {
    return ( 
        <>
            <div>
           
                <Routes>
                    <Route path="/" element={<Ingredientes />} />
                    <Route path='*' element={<Navigate to="/" />} />
                    
                </Routes>
            </div>

        </>
    )
}
