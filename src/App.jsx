import React, { useEffect, useState } from 'react';
import ocorrenciasService from './services/ocorrenciasService';

const App = () => {
  const [ocorrencias, setOcorrencias] = useState([]);
  const [estudantes, setEstudantes] = useState([]);
  const [professores, setProfessores] = useState([]);

  /*
  const handleInputFilter = ({ target }) => {
    setFilter(target.value);
    const filteredCountries = allCountries.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
    );
    setCountries(filteredCountries);
  };
  */

  useEffect(() => {
    ocorrenciasService.getAll('ocorrencias').then((ocorrencias) => {
      setOcorrencias(ocorrencias);
    });
  }, []);

  useEffect(() => {
    ocorrenciasService.getAll('professor').then((professores) => {
      setProfessores(professores);
    });
  }, []);

  useEffect(() => {
    ocorrenciasService.getAll('estudante').then((estudantes) => {
      setEstudantes(estudantes);
    });
  }, []);

  const getProfessorName = (id) => {
    const professor = professores.find((professor) => professor.codigo === id);
    return professor.nome;
  };

  const getEstudanteName = (id) => {
    const estudante = estudantes.find(
      (estudante) => estudante.matricula === id
    );
    return estudante.nome;
  };

  const formatData = (data) => {
    const year = data.slice(0, 4);
    const month = data.slice(5, 7);
    const day = data.slice(8, 10);

    return `${day}/${month}/${year}`;
  };

  return (
    <div className='grid h-screen place-items-center'>
      <div className='overflow-hidden overflow-x-auto border border-gray-100 rounded'>
        <table className='min-w-full text-sm divide-y divide-gray-200'>
          <thead>
            <tr className='bg-gray-50'>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Código
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Estudante
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Professor
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Descrição
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Info adicional
              </th>
              <th className='px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap'>
                Data
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-100'>
            {ocorrencias &&
              ocorrencias.map((ocorrencia, i) => (
                <tr key={i}>
                  <td className='px-4 py-2 font-medium text-gray-900 whitespace-nowrap'>
                    {ocorrencia.id}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {getEstudanteName(ocorrencia.estudante)}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {getProfessorName(ocorrencia.professor)}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {ocorrencia.descricao}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {ocorrencia.infoAdicional.length > 0
                      ? ocorrencia.infoAdicional
                      : 'Sem informações adicionais'}
                  </td>
                  <td className='px-4 py-2 text-gray-700 whitespace-nowrap'>
                    {formatData(ocorrencia.data)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
