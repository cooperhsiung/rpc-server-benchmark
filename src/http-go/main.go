package main

import (
  "github.com/labstack/echo"
  "github.com/labstack/echo/middleware"
)

type Repository struct {
  Type *string `thrift:"type,1" db:"type" json:"type,omitempty"`
  URL  *string `thrift:"url,2" db:"url" json:"url,omitempty"`
}

type FindOneResponse struct {
  Name        *string     `thrift:"name,1" db:"name" json:"name,omitempty"`
  Version     *string     `thrift:"version,2" db:"version" json:"version,omitempty"`
  Description *string     `thrift:"description,3" db:"description" json:"description,omitempty"`
  Main        *string     `thrift:"main,4" db:"main" json:"main,omitempty"`
  Repository  *Repository `thrift:"repository,5" db:"repository" json:"repository,omitempty"`
  Author      *string     `thrift:"author,6" db:"author" json:"author,omitempty"`
  License     *string     `thrift:"license,7" db:"license" json:"license,omitempty"`
}

func main() {
  e := echo.New()
  e.HideBanner = true
  //e.Use(middleware.Logger())
  e.Use(middleware.Recover())

  e.GET("/test", func(c echo.Context) error {
    u := &FindOneResponse{
      Name:        toPtr("rpc-server-benchmark"),
      Version:     toPtr("1.0.0"),
      Description: toPtr("Performance testing of rpc servers."),
      Main:        toPtr("index.js"),
      Repository: &Repository{
        Type: toPtr("git"),
        URL:  toPtr("git+https://github.com/cooperhsiung/rpc-server-benchmark.git"),
      },
      Author:  toPtr("CooperHsiung"),
      License: toPtr("MIT"),
    }

    return c.JSON(200, u)
  })

  e.Logger.Fatal(e.Start(":3004"))
}

func toPtr(string2 string) *string {
  return &string2
}
