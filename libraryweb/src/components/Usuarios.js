import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import "../styles/Usuarios.scss";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [novoUsuario, setNovoUsuario] = useState({
    nome: "",
    endereco: "",
    email: "",
    telefone: ""
  });
  const [editando, setEditando] = useState(null);
  const [usuarioEditado, setUsuarioEditado] = useState({
    nome: "",
    endereco: "",
    email: "",
    telefone: ""
  });

  const usuariosRef = collection(db, "usuarios");

  // Buscar usuários
  const fetchUsuarios = async () => {
    const data = await getDocs(usuariosRef);
    setUsuarios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // Adicionar usuário
  const adicionarUsuario = async () => {
    if (!novoUsuario.nome || !novoUsuario.email) {
      alert("Nome e e-mail são obrigatórios!");
      return;
    }
    await addDoc(usuariosRef, novoUsuario);
    fetchUsuarios();
    setNovoUsuario({ nome: "", endereco: "", email: "", telefone: "" });
  };

  // Excluir usuário
  const deletarUsuario = async (id) => {
    await deleteDoc(doc(db, "usuarios", id));
    fetchUsuarios();
  };

  // Modo de edição
  const iniciarEdicao = (usuario) => {
    setEditando(usuario.id);
    setUsuarioEditado(usuario);
  };

  // Salvar alterações
  const salvarEdicao = async (id) => {
    const usuarioRef = doc(db, "usuarios", id);
    await updateDoc(usuarioRef, usuarioEditado);
    fetchUsuarios();
    setEditando(null);
    setUsuarioEditado({ nome: "", endereco: "", email: "", telefone: "" });
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div className="usuarios-container">
      <h2>Gerenciar Usuários</h2>

      <div className="add-usuario-form">
        <input
          type="text"
          placeholder="Nome"
          value={novoUsuario.nome}
          onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
        />
        <input
          type="text"
          placeholder="Endereço"
          value={novoUsuario.endereco}
          onChange={(e) => setNovoUsuario({ ...novoUsuario, endereco: e.target.value })}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={novoUsuario.email}
          onChange={(e) => setNovoUsuario({ ...novoUsuario, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={novoUsuario.telefone}
          onChange={(e) => setNovoUsuario({ ...novoUsuario, telefone: e.target.value })}
        />
        <button onClick={adicionarUsuario}>Adicionar Usuário</button>
      </div>

      {/* Lista de usuários */}
      <ul className="usuario-list">
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {editando === usuario.id ? (
              <div className="edit-container">
                <input
                  type="text"
                  value={usuarioEditado.nome}
                  onChange={(e) =>
                    setUsuarioEditado({ ...usuarioEditado, nome: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={usuarioEditado.endereco}
                  onChange={(e) =>
                    setUsuarioEditado({ ...usuarioEditado, endereco: e.target.value })
                  }
                />
                <input
                  type="email"
                  value={usuarioEditado.email}
                  onChange={(e) =>
                    setUsuarioEditado({ ...usuarioEditado, email: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={usuarioEditado.telefone}
                  onChange={(e) =>
                    setUsuarioEditado({ ...usuarioEditado, telefone: e.target.value })
                  }
                />
                <button className="salvar-btn" onClick={() => salvarEdicao(usuario.id)}>Salvar</button>
                <button onClick={() => setEditando(null)}>Cancelar</button>
              </div>
            ) : (
              <div>
                <strong>{usuario.nome}</strong> - {usuario.email}
                <button className="edit-btn" onClick={() => iniciarEdicao(usuario)}>Editar</button>
                <button onClick={() => deletarUsuario(usuario.id)}>Deletar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;
