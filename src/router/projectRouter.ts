import express from 'express'
import { IdGenerator } from '../services/IdGenerator'
import { ProjectBusiness } from '../business/ProjectBusiness'
import { ProjectDatabase } from '../database/ProjectDatabase'
import { ProjectController } from '../controller/ProjectController'

export const projectRouter = express.Router()

const projectController = new ProjectController(
  new ProjectBusiness(
    new ProjectDatabase(),
    new IdGenerator()
  )
)

projectRouter.get("/", projectController.getProjects)