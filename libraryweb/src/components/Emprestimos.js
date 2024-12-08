import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import "../styles/Emprestimos.scss";

const Emprestimos = () => {
  const [emprestimos, setEmprestimos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [livros, setLivros] = useState([]);
  const [novoEmprestimo, setNovoEmprestimo] = useState({
    usuarioId: "",
    livroId: "",
    dataEmprestimo: "",
    dataDevolucao: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const emprestimosSnapshot = await getDocs(collection(db, "emprestimos"));
        const usuariosSnapshot = await getDocs(collection(db, "usuarios"));
        const livrosSnapshot = await getDocs(collection(db, "livros"));

        setEmprestimos(
          emprestimosSnapshot.docs.map((doc) => {
            const data = doc.data();
            return {
              id: doc.id,
              ...data,
              dataDevolucao: data.dataDevolucao instanceof Timestamp
                ? data.dataDevolucao.toDate()
                : new Date(data.dataDevolucao),
            };
          })
        );

        setUsuarios(
          usuariosSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setLivros(
          livrosSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleAddEmprestimo = async () => {
    if (
      !novoEmprestimo.usuarioId ||
      !novoEmprestimo.livroId ||
      !novoEmprestimo.dataEmprestimo ||
      !novoEmprestimo.dataDevolucao
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const emprestimoComTimestamp = {
        ...novoEmprestimo,
        dataEmprestimo: Timestamp.fromDate(new Date(novoEmprestimo.dataEmprestimo)),
        dataDevolucao: Timestamp.fromDate(new Date(novoEmprestimo.dataDevolucao)),
      };

      const docRef = await addDoc(collection(db, "emprestimos"), emprestimoComTimestamp);
      setEmprestimos((prev) => [
        ...prev,
        {
          id: docRef.id,
          ...emprestimoComTimestamp,
          dataDevolucao: new Date(novoEmprestimo.dataDevolucao),
        },
      ]);
      setNovoEmprestimo({
        usuarioId: "",
        livroId: "",
        dataEmprestimo: "",
        dataDevolucao: "",
      });
    } catch (error) {
      console.error("Erro ao adicionar empréstimo:", error);
    }
  };

  const handleDevolucao = async (id) => {
    try {
      await updateDoc(doc(db, "emprestimos", id), { devolvido: true });
      setEmprestimos((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, devolvido: true } : item
        )
      );
    } catch (error) {
      console.error("Erro ao marcar devolução:", error);
    }
  };

  return (
    <div className="emprestimos-container">
      <h2>Gerenciamento de Empréstimos</h2>

      <div className="novo-emprestimo">
        <h3>Registrar novo empréstimo</h3>
        <select
          value={novoEmprestimo.usuarioId}
          onChange={(e) =>
            setNovoEmprestimo({ ...novoEmprestimo, usuarioId: e.target.value })
          }
        >
          <option value="">Selecione um usuário</option>
          {usuarios.map((usuario) => (
            <option key={usuario.id} value={usuario.id}>
              {usuario.nome}
            </option>
          ))}
        </select>

        <select
          value={novoEmprestimo.livroId}
          onChange={(e) =>
            setNovoEmprestimo({ ...novoEmprestimo, livroId: e.target.value })
          }
        >
          <option value="">Selecione um livro</option>
          {livros.map((livro) => (
            <option key={livro.id} value={livro.id}>
              {livro.titulo}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={novoEmprestimo.dataEmprestimo}
          onChange={(e) =>
            setNovoEmprestimo({
              ...novoEmprestimo,
              dataEmprestimo: e.target.value,
            })
          }
        />
        <input
          type="date"
          value={novoEmprestimo.dataDevolucao}
          onChange={(e) =>
            setNovoEmprestimo({
              ...novoEmprestimo,
              dataDevolucao: e.target.value,
            })
          }
        />
        <button onClick={handleAddEmprestimo}>Adicionar empréstimo</button>
      </div>

      <div className="lista-emprestimos">
        <h3>Empréstimos Ativos</h3>
        <ul>
          {emprestimos
            .filter((e) => !e.devolvido)
            .map((emprestimo) => (
              <li key={emprestimo.id}>
                <p>
                  <strong>Usuário:</strong>{" "}
                  {usuarios.find((u) => u.id === emprestimo.usuarioId)?.nome}
                </p>
                <p>
                  <strong>Livro:</strong>{" "}
                  {livros.find((l) => l.id === emprestimo.livroId)?.titulo}
                </p>
                <p>
                  <strong>Data de Devolução:</strong>{" "}
                  {emprestimo.dataDevolucao.toLocaleDateString()}
                </p>
                <button onClick={() => handleDevolucao(emprestimo.id)}>
                  Marcar como Devolvido
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Emprestimos;