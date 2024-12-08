import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../styles/Relatorios.scss";

const Relatorios = () => {
  const [emprestimos, setEmprestimos] = useState([]);
  const [usuariosMap, setUsuariosMap] = useState({});
  const [livrosMap, setLivrosMap] = useState({});
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [relatorio, setRelatorio] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Buscar empréstimos
        const emprestimosSnapshot = await getDocs(collection(db, "emprestimos"));
        const emprestimosData = emprestimosSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            dataEmprestimo: new Date(data.dataEmprestimo),
            dataDevolucao: new Date(data.dataDevolucao),
          };
        });

        // Buscar usuários
        const usuariosSnapshot = await getDocs(collection(db, "usuarios"));
        const usuariosMap = usuariosSnapshot.docs.reduce((map, doc) => {
          const data = doc.data();
          map[doc.id] = data.nome; // Presumindo que o campo "nome" contém o nome do usuário
          return map;
        }, {});

        // Buscar livros
        const livrosSnapshot = await getDocs(collection(db, "livros"));
        const livrosMap = livrosSnapshot.docs.reduce((map, doc) => {
          const data = doc.data();
          map[doc.id] = data.titulo; // Presumindo que o campo "titulo" contém o título do livro
          return map;
        }, {});

        setEmprestimos(emprestimosData);
        setUsuariosMap(usuariosMap);
        setLivrosMap(livrosMap);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };

    fetchData();
  }, []);

  const gerarRelatorio = () => {
    if (!dataInicio || !dataFim) {
      alert("Por favor, preencha as datas de início e fim.");
      return;
    }

    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);

    const resultado = emprestimos.filter(
      (e) =>
        e.dataEmprestimo >= inicio &&
        e.dataEmprestimo <= fim &&
        !e.devolvido // Filtrar apenas os não devolvidos
    );

    setRelatorio(resultado);
  };

  return (
    <div className="relatorios-container">
      <h2>Relatórios de Empréstimos</h2>
      <div className="filtros-relatorio">
        <input
          type="date"
          value={dataInicio}
          onChange={(e) => setDataInicio(e.target.value)}
        />
        <input
          type="date"
          value={dataFim}
          onChange={(e) => setDataFim(e.target.value)}
        />
        <button onClick={gerarRelatorio}>Gerar Relatório</button>
      </div>

      <div className="resultados-relatorio">
        {relatorio.length > 0 ? (
          <ul>
            {relatorio.map((e) => (
              <li key={e.id}>
                <p>
                  <strong>Usuário:</strong> {usuariosMap[e.usuarioId] || "Desconhecido"}
                </p>
                <p>
                  <strong>Livro:</strong> {livrosMap[e.livroId] || "Desconhecido"}
                </p>
                <p>
                  <strong>Data do Empréstimo:</strong>{" "}
                  {e.dataEmprestimo.toLocaleDateString()}
                </p>
                <p>
                  <strong>Data de Devolução:</strong>{" "}
                  {e.dataDevolucao.toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum empréstimo encontrado para o período selecionado.</p>
        )}
      </div>
    </div>
  );
};

export default Relatorios;
