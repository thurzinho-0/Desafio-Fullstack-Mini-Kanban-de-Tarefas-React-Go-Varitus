# 🚀 **Desafio Fullstack – Mini Kanban de Tarefas (React + Go)**

Bem-vindo ao repositório do **Desafio Fullstack**! Este projeto consiste em desenvolver um **Mini Kanban de Tarefas** utilizando **React** no frontend e **Go** no backend. O objetivo é criar um sistema de gerenciamento de tarefas simples, mas eficiente, com as colunas **A Fazer**, **Em Progresso** e **Concluídas**.

## 🛠️ **Tecnologias Utilizadas**

- **Frontend:**  
  - **React**: Biblioteca para construção de interfaces dinâmicas.
  - **CSS/HTML**: Para estilização e layout da aplicação.

- **Backend:**  
  - **Go (Golang)**: Linguagem de programação para construção de APIs RESTful de alta performance.
  - **Gin ou net/http**: Framework para criação das rotas e controle da API.

- **Armazenamento de Dados:**  
  - **Memória (em memória)**: Armazenamento simples para persistência temporária das tarefas.

## 📂 **Estrutura do Projeto**

A estrutura do repositório está organizada da seguinte forma:


### **Diretórios e Arquivos Importantes**

- **/backend**  
  Arquivos responsáveis pela criação da API e manipulação dos dados:
  - `main.go`: Arquivo principal do servidor backend.
  - `handlers.go`: Funções de manipulação de tarefas (CRUD).
  - `models.go`: Definição dos modelos de dados (tarefa).

- **/frontend**  
  Arquivos que implementam a interface do usuário com React:
  - `package.json`: Gerencia as dependências do frontend.
  - `src/`: Contém os componentes React e as funcionalidades da aplicação.

- **/docs**  
  Contém os diagramas de fluxo:
  - `user-flow.png`: Diagrama que descreve as ações do usuário no sistema.
  - `data-flow.png`: Diagrama opcional de como os dados fluem entre o frontend e o backend.

---

## 🚀 **Como Rodar o Projeto**

### **Backend (Go)**

1. Acesse o diretório `/backend/`:
   ```bash
   cd backend
