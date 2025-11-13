package main

import "github.com/gin-gonic/gin"

func SetupRoutes(r *gin.Engine) {
	api := r.Group("/api")
	{
		api.GET("/tasks", GetTasks)
		api.POST("/tasks", CreateTask)
		api.PUT("/tasks/:id", UpdateTask)
		api.DELETE("/tasks/:id", DeleteTask)
	}
}
