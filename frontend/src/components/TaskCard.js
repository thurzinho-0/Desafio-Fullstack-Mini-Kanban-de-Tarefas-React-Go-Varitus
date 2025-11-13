import React from 'react';

const TaskCard = ({ task, onEdit, onDelete, onMove, currentStatus }) => {
    return (
        <div className="kanban-card">
            <div className="card-header">
                <h4>{task.title}</h4>
            </div>
            
            {task.description && (
                <p className="card-description">{task.description}</p>
            )}
            
            <div className="card-actions">
                {currentStatus !== 'todo' && (
                    <button 
                        className="btn-move-left"
                        onClick={() => onMove(task.id, currentStatus === 'done' ? 'inprogress' : 'todo')}
                        title="Mover para esquerda"
                    >
                        ◀
                    </button>
                )}
                
                <button className="btn-edit" onClick={() => onEdit(task)}>
                    ✏️
                </button>
                
                <button className="btn-delete" onClick={() => onDelete(task.id)}>
                    🗑️
                </button>
                
                {currentStatus !== 'done' && (
                    <button 
                        className="btn-move-right"
                        onClick={() => onMove(task.id, currentStatus === 'todo' ? 'inprogress' : 'done')}
                        title="Mover para direita"
                    >
                        ▶
                    </button>
                )}
            </div>
        </div>
    );
};

export default TaskCard;
