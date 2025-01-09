import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {

    <Routes>
      <Route path="/Pagina-inicial" element={<p>Página inicial</p>} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>



}
