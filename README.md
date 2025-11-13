
# 📋 Mini Kanban - Veritas

Sistema de gerenciamento de tarefas estilo Kanban desenvolvido com **Go** (backend) e **React** (frontend).

---

## 🚀 Tecnologias

### Backend
- **Go 1.21+**
- **Gin Framework** (API REST)
- Armazenamento em memória (sem banco de dados)

### Frontend
- **React 18**
- **Axios** (requisições HTTP)
- CSS puro (Neobrutalism Design)

---

## 📦 Instalação e Execução

### **Pré-requisitos**
- Go 1.21 ou superior
- Node.js 16 ou superior
- npm ou yarn

---

### **Backend (Porta 8080)**

\`\`\`bash
cd backend
go mod tidy
go run .
\`\`\`

Servidor rodando em: **http://localhost:8080**

---

### **Frontend (Porta 3000)**

\`\`\`bash
cd frontend
npm install
npm start
\`\`\`

Aplicação rodando em: **http://localhost:3000**

---

## 🎯 Funcionalidades

- ✅ Criar tarefas
- ✅ Editar tarefas
- ✅ Excluir tarefas
- ✅ Mover tarefas entre colunas (A Fazer → Em Progresso → Concluídas)
- ✅ Interface responsiva
- ✅ Mensagens de feedback

---

## 📂 Estrutura do Projeto

\`\`\`
task-manager/
├── backend/         # API em Go
│   ├── main.go
│   ├── config.go
│   ├── routes.go
│   ├── handlers.go
│   └── models.go
└── frontend/        # Interface React
    ├── src/
    │   ├── components/
    │   ├── services/
    │   ├── App.js
    │   └── App.css
    └── public/
\`\`\`

---

## 🔗 API Endpoints

### **GET** /api/tasks
Retorna todas as tarefas

### **POST** /api/tasks
Cria uma nova tarefa
\`\`\`json
{
  "title": "Título da tarefa",
  "description": "Descrição opcional",
  "status": "todo"
}
\`\`\`

### **PUT** /api/tasks/:id
Atualiza uma tarefa existente

### **DELETE** /api/tasks/:id
Exclui uma tarefa

---

## 👨‍💻 Autor

**Arthur (@tutuzinho-0)**

Desenvolvido como desafio técnico para **Veritas**.

---

## 📄 Licença

MIT License - Sinta-se livre para usar e modificar!
"@ | Out-File -FilePath README.md -Encoding UTF8
