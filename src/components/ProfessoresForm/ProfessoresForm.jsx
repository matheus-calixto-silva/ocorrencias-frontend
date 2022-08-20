import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ocorrenciasService from '../../services/ocorrenciasService';

const ProfessoresForm = () => {
  const [professor, setProfessor] = useState({});
  const routeParams = useParams();
  const professorId = routeParams.professorId;

  useEffect(() => {
    (async () => {
      await ocorrenciasService
        .getOne('professor', professorId)
        .then((professor) => {
          setProfessor(professor);
        });
    })();
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setProfessor((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (professorId) {
      ocorrenciasService
        .update('professor', professorId, professor)
        .then(() => {
          alert(
            `${professor.nome} foi atualizado, clique em OK para voltar a página inicial`
          );
          window.location = 'http://127.0.0.1:5173/';
        });
    } else {
      ocorrenciasService.create('professor', professor).then(() => {
        alert(
          `${professor.nome} foi criado, clique em OK para voltar a página inicial`
        );
        window.location = 'http://127.0.0.1:5173/';
      });
    }
  };

  return (
    <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-lg mx-auto text-center'>
        <h1 className='text-2xl font-bold sm:text-3xl'>
          {professorId ? `Editando ${professor.nome}` : 'Novo professor'}
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className='max-w-md mx-auto mt-8 mb-0 p-2.5 space-y-4 border-2 border-gray-200 rounded-md'
      >
        <div>
          <label htmlFor='nome' className='text-sm font-medium'>
            Nome
          </label>

          <div className='relative'>
            <input
              name='nome'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: Eduardo'
              value={professor.nome ? professor.nome : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='curso' className='text-sm font-medium'>
            Curso
          </label>

          <div className='relative'>
            <input
              name='curso'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: TADS'
              value={professor.curso ? professor.curso : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='materia' className='text-sm font-medium'>
            Matéria
          </label>

          <div className='relative'>
            <input
              name='materia'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: TADS'
              value={professor.materia ? professor.materia : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='flex produtos-center justify-between'>
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
            {professorId ? 'Atualizar' : 'Criar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfessoresForm;
