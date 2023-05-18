import { ProjectDatabase } from "../database/ProjectDatabase";
import { GetProjectsInputDTO, GetProjectsOutputDTO } from "../dtos/project/getProjects.dto";
import { Project } from "../models/Project";
import { IdGenerator } from "../services/IdGenerator";

export class ProjectBusiness {
  constructor (
    private projectDatabase: ProjectDatabase,
    private idGenerator: IdGenerator
  ){}

  public getProjects = async (input: GetProjectsInputDTO): Promise<GetProjectsOutputDTO> => {
    
    const projectsDB = await this.projectDatabase.getProjects()

    const projects = projectsDB
    .map((projectFromDB) => {
      const project = new Project(
        projectFromDB.id,
        projectFromDB.title,
        projectFromDB.description,
        projectFromDB.technologies,
        projectFromDB.deploy_link,
        projectFromDB.image_link
      )

      return project.toBusinessModel()
    })

    const output: GetProjectsOutputDTO = projects
    return output
  }
}