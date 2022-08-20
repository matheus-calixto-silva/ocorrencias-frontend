import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

import OcorrenciasForm from './components/OcorrenciasForm/OcorrenciasForm';
import ProfessoresForm from './components/ProfessoresForm/ProfessoresForm';
import EstudantesForm from './components/EstudantesForm/EstudantesForm';


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ocorrencias/new' element={<OcorrenciasForm />} />
        <Route path='/ocorrencias/:professorId' element={<OcorrenciasForm />} />
        <Route path='/professores/new' element={<ProfessoresForm />} />
        <Route path='/professores/:professorId' element={<ProfessoresForm />} />
        <Route path='/estudantes/new' element={<EstudantesForm />} />
        <Route path='/estudantes/:estudanteId' element={<EstudantesForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;