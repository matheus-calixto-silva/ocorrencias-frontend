import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ocorrenciasService from '../../services/ocorrenciasService';

const OcorrenciasForm = () => {
  const [ocorrencia, setOcorrencia] = useState({
    professor: '',
    estudante: '',
    local: '',
    descricao: '',
    infoAdicional: '',
  });
  const [estudantes, setEstudantes] = useState([]);
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    (async () => {
      await ocorrenciasService.getAll('estudante').then((estudantes) => {
        setEstudantes(estudantes);
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await ocorrenciasService.getAll('professor').then((professores) => {
        setProfessores(professores);
      });
    })();
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setOcorrencia((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    ocorrenciasService.create('ocorrencias', ocorrencia).then(() => {
      alert('Ocorrência registrada, clique em OK para voltar a página inicial');
      window.location = 'http://127.0.0.1:5173/';
    });
  };

  return (
    <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-lg mx-auto text-center'>
        <h1 className='text-2xl font-bold sm:text-3xl'>Nova Ocorrência</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className='max-w-md mx-auto mt-8 mb-0 p-2.5 space-y-4 border-2 border-gray-200 rounded-md'
      >
        <div>
          <label htmlFor='professor' className='text-sm font-medium'>
            Professor
          </label>
          <select
            name='professor'
            className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md bg-white'
            value={ocorrencia.professor}
            onChange={handleInputChange}
          >
            <option value='' disabled>
              Selecione
            </option>
            {professores.map((professor) => (
              <option value={professor.codigo} key={professor.codigo}>
                {professor.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor='estudante' className='text-sm font-medium'>
            Estudante
          </label>
          <select
            name='estudante'
            className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md bg-white'
            value={ocorrencia.estudante}
            onChange={handleInputChange}
          >
            <option value='' disabled>
              Selecione
            </option>
            {estudantes.map((estudante) => (
              <option value={estudante.matricula} key={estudante.matricula}>
                {estudante.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor='local' className='text-sm font-medium'>
            Local
          </label>

          <div className='relative'>
            <input
              name='local'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: Sala de aula'
              value={ocorrencia.local}
              onChange={handleInputChange}
            />
          </div>
        </div>


        <div>
          <label htmlFor='descricao' className='text-sm font-medium'>
            Descrição
          </label>

          <div className='relative'>
            <input
              name='descricao'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: Aluno fazendo muito barulho na aula'
              value={ocorrencia.descricao}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='infoAdicional' className='text-sm font-medium'>
            Informação adicional
          </label>

          <div className='infoAdicional'>
            <input
              name='infoAdicional'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-700 rounded-lg shadow-md'
              placeholder='Ex: Aluno faz isso de forma recorrente'
              value={ocorrencia.infoAdicional}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <Link
            to={'/'}
            className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
          >
            Voltar
          </Link>

          <button
            type='submit'
            className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
          >
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default OcorrenciasForm;
