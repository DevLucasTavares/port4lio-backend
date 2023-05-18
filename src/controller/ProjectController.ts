import { ZodError } from "zod"
import { BaseError } from "../errors/BaseError"
import { Request, Response } from "express";
import { GetProjectsSchema } from "../dtos/project/getProjects.dto";
import { ProjectBusiness } from "../business/ProjectBusiness";

export class ProjectController {
  constructor(
    private projectBusiness: ProjectBusiness
  ){}

    public getProjects = async (req:Request, res:Response) => {
      try {
        const input = GetProjectsSchema.parse({

        })

        const output = await this.projectBusiness.getProjects(input)

        res.status(201).send(output)
        
      } catch (error) {
        console.log(error)

            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
      }
    }
}