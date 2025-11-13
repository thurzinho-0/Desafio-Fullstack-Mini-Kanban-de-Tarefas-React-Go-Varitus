package main

import (
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	SetupCORS(r)
	SetupRoutes(r)

	log.Println("🚀 Servidor rodando na porta :8080")
	if err := r.Run(":8080"); err != nil {
		log.Fatal("❌ Erro:", err)
	}
}
