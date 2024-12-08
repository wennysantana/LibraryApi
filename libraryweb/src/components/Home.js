// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bem-vindo ao Gerenciador da Biblioteca 📚</h1>
        <p>Facilite a organização e aproveite as ferramentas disponíveis para gerenciar usuários, livros e empréstimos de forma eficiente.</p>
      </header>

      <div className="links-container">
        <Link to="/livros" className="home-link">Livros</Link>
        <Link to="/usuarios" className="home-link">Usuários</Link>
        <Link to="/relatorios" className="home-link">Relatórios</Link>
        <Link to="/emprestimos" className="home-link">Empréstimos</Link>
      </div>
    </div>
  );
};

export default Home;
