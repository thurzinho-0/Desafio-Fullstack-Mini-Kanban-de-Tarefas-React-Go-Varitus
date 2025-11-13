package main

import (
	"net/http"
	"strconv"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
)

var (
	taskStore     = make(map[int]Task)
	taskIDCounter = 0
	mu            sync.Mutex
)

func nextTaskID() int {
	mu.Lock()
	defer mu.Unlock()
	taskIDCounter++
	return taskIDCounter
}

func GetTasks(c *gin.Context) {
	mu.Lock()
	defer mu.Unlock()

	tasks := []Task{}
	for _, t := range taskStore {
		tasks = append(tasks, t)
	}
	c.JSON(http.StatusOK, tasks)
}

func CreateTask(c *gin.Context) {
	var task Task
	if err := c.ShouldBindJSON(&task); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSON inválido"})
		return
	}

	if task.Title == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Título é obrigatório"})
		return
	}

	validStatuses := map[string]bool{"todo": true, "inprogress": true, "done": true}
	if task.Status == "" {
		task.Status = "todo"
	}
	if !validStatuses[task.Status] {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Status inválido"})
		return
	}

	task.ID = nextTaskID()
	task.CreatedAt = time.Now()
	task.UpdatedAt = time.Now()

	mu.Lock()
	taskStore[task.ID] = task
	mu.Unlock()

	c.JSON(http.StatusCreated, task)
}

func UpdateTask(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	mu.Lock()
	existing, ok := taskStore[id]
	mu.Unlock()

	if !ok {
		c.JSON(http.StatusNotFound, gin.H{"error": "Tarefa não encontrada"})
		return
	}

	var update Task
	if err := c.ShouldBindJSON(&update); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSON inválido"})
		return
	}

	if update.Status != "" {
		validStatuses := map[string]bool{"todo": true, "inprogress": true, "done": true}
		if !validStatuses[update.Status] {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Status inválido"})
			return
		}
		existing.Status = update.Status
	}

	if update.Title != "" {
		existing.Title = update.Title
	}
	existing.Description = update.Description
	existing.UpdatedAt = time.Now()

	mu.Lock()
	taskStore[id] = existing
	mu.Unlock()

	c.JSON(http.StatusOK, existing)
}

func DeleteTask(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	mu.Lock()
	_, ok := taskStore[id]
	if !ok {
		mu.Unlock()
		c.JSON(http.StatusNotFound, gin.H{"error": "Tarefa não encontrada"})
		return
	}
	delete(taskStore, id)
	mu.Unlock()

	c.Status(http.StatusNoContent)
}
