import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import Ocorrencias from '../../components/Ocorrencias/Ocorrencias';
import Professores from '../../components/Professores/Professores';
import Estudantes from '../../components/Estudantes/Estudantes';

const Home = () => {
  const [currentMenu, setCurrentMenu] = useState('ocorrencias');
  console.log(currentMenu);

  return (
    <div className='flex flex-row'>
      {/*side Bar*/}
      <div className='flex flex-col justify-between w-16 h-screen bg-white border-r'>
        <div>
          <div className='inline-flex items-center justify-center w-16 h-16'>
            <span className='block w-10 h-10 bg-gray-200 rounded-lg'></span>
          </div>

          <div className='border-t border-gray-100'>
            <nav className='flex flex-col p-2'>
              <ul className='pt-4 space-y-1 border-gray-100'>
                {/*produtos*/}
                <li onClick={() => setCurrentMenu('ocorrencias')}>
                  <Link
                    to={''}
                    className='flex relative group justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 opacity-75'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                      />
                    </svg>

                    <span className='absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'>
                      Ocorrências
                    </span>
                  </Link>
                </li>

                {/*donatarios*/}
                <li onClick={() => setCurrentMenu('professores')}>
                  <Link
                    to={''}
                    className='flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 opacity-75'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                      />
                    </svg>

                    <span className='absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'>
                      Professores
                    </span>
                  </Link>
                </li>

                {/*fiscalizadores*/}
                <li onClick={() => setCurrentMenu('estudantes')}>
                  <Link
                    to={''}
                    className='flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 opacity-75'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>

                    <span className='absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'>
                      Estudantes
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* cards */}
      <section>
        <div className='max-w-screen-xl w-screen px-4 py-8 mx-auto'>
          <div className='flex justify-between justify-items-stretch items-center'>
            <h2 className='mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl'>
              {currentMenu === 'ocorrencias'
                ? 'Ocorrências'
                : currentMenu === 'professores'
                  ? 'Professores'
                  : 'Estudantes'}
            </h2>
            <Link to={`${currentMenu}/new`}>
              {' '}
              {currentMenu === 'ocorrencias'
                ? 'Nova ocorrência'
                : currentMenu === 'professores'
                  ? 'Novo professor'
                  : 'Novo estudante'}
            </Link>
          </div>

          <div>
            {currentMenu === 'ocorrencias' && <Ocorrencias />}
            {currentMenu === 'professores' && <Professores />}
            {currentMenu === 'estudantes' && <Estudantes />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
