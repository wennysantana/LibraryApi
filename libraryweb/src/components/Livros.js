import React, { useState, useEffect, useCallback } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import "../styles/Livros.scss";

const Livros = () => {
  const [livros, setLivros] = useState([]);
  const [novoLivro, setNovoLivro] = useState({
    titulo: "",
    autor: "",
    genero: "",
    anoPublicacao: "",
  });

  const livrosRef = collection(db, "livros");

  const fetchLivros = useCallback(async () => {
    const data = await getDocs(livrosRef);
    setLivros(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }, [livrosRef]);

  const adicionarLivro = async () => {
    if (!novoLivro.titulo || !novoLivro.autor) {
      alert("Por favor, preencha os campos obrigatórios!");
      return;
    }
    await addDoc(livrosRef, novoLivro);
    fetchLivros();
    setNovoLivro({ titulo: "", autor: "", genero: "", anoPublicacao: "" });
  };

  const deletarLivro = async (id) => {
    await deleteDoc(doc(db, "livros", id));
    fetchLivros();
  };

  useEffect(() => {
    fetchLivros();
  }, [fetchLivros]);

  return (
    <div className="livros-container">
      <h2>Controle de Livros</h2>

      <form
        className="add-livro-form"
        onSubmit={(e) => {
          e.preventDefault();
          adicionarLivro();
        }}
      >
        <input
          type="text"
          placeholder="Título *"
          value={novoLivro.titulo}
          onChange={(e) =>
            setNovoLivro({ ...novoLivro, titulo: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Autor *"
          value={novoLivro.autor}
          onChange={(e) =>
            setNovoLivro({ ...novoLivro, autor: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Gênero"
          value={novoLivro.genero}
          onChange={(e) =>
            setNovoLivro({ ...novoLivro, genero: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Ano de Publicação"
          value={novoLivro.anoPublicacao}
          onChange={(e) =>
            setNovoLivro({ ...novoLivro, anoPublicacao: e.target.value })
          }
        />
        <button type="submit">Adicionar Livro</button>
      </form>

      <ul className="livro-list">
        {livros.map((livro) => (
          <li key={livro.id}>
            <div>
              <strong>{livro.titulo}</strong> — {livro.autor}
              {livro.genero && <em> ({livro.genero})</em>}
              {livro.anoPublicacao && `, ${livro.anoPublicacao}`}
            </div>
            <button onClick={() => deletarLivro(livro.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Livros;
