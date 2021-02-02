import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/63323224?s=460&u=2daadb593c5a951e43762aa302f5c42a60d6f6d7&v=4"
            alt="Paulo Reis"
          />

          <div>
            <strong>Paulo Reis7</strong>
            <p>Aplicação de vendas de produtos por usuários</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/63323224?s=460&u=2daadb593c5a951e43762aa302f5c42a60d6f6d7&v=4"
            alt="Paulo Reis"
          />

          <div>
            <strong>Paulo Reis7</strong>
            <p>Aplicação de vendas de produtos por usuários</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars.githubusercontent.com/u/63323224?s=460&u=2daadb593c5a951e43762aa302f5c42a60d6f6d7&v=4"
            alt="Paulo Reis"
          />

          <div>
            <strong>Paulo Reis7</strong>
            <p>Aplicação de vendas de produtos por usuários</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
