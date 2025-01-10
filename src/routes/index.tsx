import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Button from '@mui/material/Button';


//export default function ButtonUsage() {
//  return <Button variant="contained">Hello world</Button>;
//}


export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/Pagina-inicial" element={<Button variant="contained" color='primary'>Página Inicial</Button> } />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );


}
