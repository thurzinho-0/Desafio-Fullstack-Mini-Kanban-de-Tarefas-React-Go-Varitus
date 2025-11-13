* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --input-focus: #2d8cf0;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --bg-color-alt: #f5f5f5;
    --main-color: #323232;
    --gradient-start: #FF6B6B;
    --gradient-end: #4ECDC4;
    --success-color: #10b981;
    --error-color: #ef4444;
    --shadow-color: rgba(0, 0, 0, 0.1);
}

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    width: 100%;
    max-width: 1400px;
}

.dashboard {
    background: var(--bg-color);
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 10px 40px var(--shadow-color);
}

.dashboard-header {
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 3px solid var(--main-color);
}

.dashboard-header h1 {
    color: var(--font-color);
    font-size: 32px;
    font-weight: 700;
}

.task-form {
    background: var(--bg-color-alt);
    padding: 25px;
    border-radius: 12px;
    margin-bottom: 30px;
    border: 2px solid var(--main-color);
}

.task-form h3 {
    color: var(--input-focus);
    margin-bottom: 20px;
    font-size: 20px;
}

.input-group {
    margin-bottom: 18px;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    color: var(--font-color);
    font-weight: 600;
    font-size: 14px;
}

.form-input {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid var(--main-color);
    border-radius: 8px;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    background: var(--bg-color);
    color: var(--font-color);
    box-shadow: 3px 3px 0 var(--main-color);
    transition: all 0.3s;
}

.form-input:focus {
    outline: none;
    border-color: var(--input-focus);
    box-shadow: 4px 4px 0 var(--input-focus);
}

textarea.form-input {
    resize: vertical;
    min-height: 80px;
}

.form-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.btn-primary {
    flex: 1;
    padding: 12px 24px;
    background: linear-gradient(135deg, var(--input-focus), #1e40af);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    font-family: 'Poppins', sans-serif;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(45, 140, 240, 0.4);
}

.btn-secondary {
    padding: 12px 24px;
    background: #6c757d;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: all 0.3s;
    font-family: 'Poppins', sans-serif;
}

.btn-secondary:hover {
    background: #5a6268;
    transform: translateY(-2px);
}

.kanban-board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;
}

.kanban-column {
    background: var(--bg-color-alt);
    border-radius: 12px;
    padding: 15px;
    min-height: 500px;
}

.kanban-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 3px solid;
}

.kanban-header h3 {
    margin: 0;
    font-size: 18px;
    color: var(--font-color);
}

.task-count {
    background: var(--main-color);
    color: var(--bg-color);
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 600;
}

.kanban-tasks {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.empty-column {
    text-align: center;
    padding: 60px 20px;
    color: var(--font-color-sub);
    font-size: 14px;
}

.kanban-card {
    background: var(--bg-color);
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 8px var(--shadow-color);
    transition: all 0.3s ease;
    border-left: 4px solid var(--input-focus);
}

.kanban-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px var(--shadow-color);
}

.card-header h4 {
    margin: 0 0 10px 0;
    font-size: 16px;
    color: var(--font-color);
    word-wrap: break-word;
}

.card-description {
    color: var(--font-color-sub);
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 12px;
    word-wrap: break-word;
}

.card-actions {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: center;
}

.btn-move-left,
.btn-move-right,
.btn-edit,
.btn-delete {
    padding: 8px 12px;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s;
}

.btn-move-left,
.btn-move-right {
    background: var(--input-focus);
}

.btn-move-left:hover,
.btn-move-right:hover {
    background: #1e40af;
    transform: scale(1.1);
}

.btn-edit {
    background: #10b981;
}

.btn-edit:hover {
    background: #059669;
    transform: translateY(-2px);
}

.btn-delete {
    background: var(--error-color);
}

.btn-delete:hover {
    background: #dc2626;
    transform: translateY(-2px);
}

.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loading-spinner {
    width: 50px;
    height: 50px;
    border: 5px solid var(--bg-color-alt);
    border-top: 5px solid var(--input-focus);
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

.loading-overlay p {
    color: white;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.message {
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 16px 24px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    animation: slideInRight 0.4s ease;
    font-family: 'Poppins', sans-serif;
}

@keyframes slideInRight {
    from { opacity: 0; transform: translateX(100px); }
    to { opacity: 1; transform: translateX(0); }
}

.message.success {
    background: var(--success-color);
    color: white;
}

.message.error {
    background: var(--error-color);
    color: white;
}

@media (max-width: 1024px) {
    .kanban-board {
        grid-template-columns: 1fr;
    }
    .kanban-column {
        min-height: auto;
    }
}

@media (max-width: 768px) {
    .dashboard {
        padding: 20px;
    }
    .dashboard-header h1 {
        font-size: 24px;
    }
    .form-buttons {
        flex-direction: column;
    }
}
