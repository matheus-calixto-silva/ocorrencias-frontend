import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ocorrenciasService from '../../services/ocorrenciasService';

const Professores = () => {
  const [estudantes, setProfessores] = useState([]);

  useEffect(() => {
    ocorrenciasService.getAll('estudante').then((estudantes) => {
      setProfessores(estudantes);
    });
  }, []);

  return (
    <div className='grid h-screen place-items-center'>
      <div className='overflow-hidden overflow-x-auto border border-gray-100 rounded'>
        <table className='min-w-full text-sm divide-y divide-gray-200'>
          <thead>
            <tr className='bg-gray-50'>
              <th className='px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap'>
                Código
              </th>
              <th className='px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap'>
                Nome
              </th>
              <th className='px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap'>
                Curso
              </th>
              <th className='px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap'>
                Ano de entrada
              </th>
              <th className='px-4 py-2 font-medium text-center text-gray-900 whitespace-nowrap'>
                Opções
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-100'>
            {estudantes &&
              estudantes.map((estudante, i) => (
                <tr key={i}>
                  <td className='px-4 py-2 text-center font-medium text-gray-900 whitespace-nowrap'>
                    {estudante.matricula}
                  </td>
                  <td className='px-4 py-2 text-center text-gray-700 whitespace-nowrap'>
                    {estudante.nome}
                  </td>
                  <td className='px-4 py-2 text-center text-gray-700 whitespace-nowrap'>
                    {estudante.curso}
                  </td>
                  <td className='px-4 py-2 text-center text-gray-700 whitespace-nowrap'>
                    {estudante.anoEntrada}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    <Link className='relative text-indigo-600 font-medium before:absolute before:-bottom-1 before:h-0.5 before:w-full before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-x-100' to={`/estudantes/${estudante.matricula}`}>Editar</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Professores;
