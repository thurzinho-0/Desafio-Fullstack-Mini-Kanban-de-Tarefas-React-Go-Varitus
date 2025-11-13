import React from 'react';
import TaskCard from './TaskCard';
function KanbanBoard({ tasks, onEdit, onDelete, onMove }) {
    const columns = [{ id: 'todo', title: 'A Fazer', color: '#FF6B6B' },{ id: 'inprogress', title: 'Em Progresso', color: '#f59e0b' },{ id: 'done', title: 'Concluidas', color: '#10b981' }];
    const getTasksByStatus = (status) => { return tasks.filter(task => task.status === status); };
    return (<div className="kanban-board">{columns.map(column => { const columnTasks = getTasksByStatus(column.id); return (<div key={column.id} className="kanban-column"><div className="kanban-header" style={{ borderColor: column.color }}><h3>{column.title}</h3><span className="task-count">{columnTasks.length}</span></div><div className="kanban-tasks">{columnTasks.length === 0 ? (<div className="empty-column"><p>Nenhuma tarefa</p></div>) : (columnTasks.map(task => (<TaskCard key={task.id} task={task} currentStatus={column.id} onEdit={onEdit} onDelete={onDelete} onMove={onMove} />)))}</div></div>); })}</div>);
}
export default KanbanBoard;
