import { ProjectDB } from "../models/Project";
import { BaseDatabase } from "./BaseDatabase";

export class ProjectDatabase extends BaseDatabase {
  public static TABLE_PROJECTS = "projects"

  public getProjects = async (): Promise<ProjectDB[]> => {
    const result = await BaseDatabase
    .connection(ProjectDatabase.TABLE_PROJECTS)
    .select()

    return result as ProjectDB[]
  }
}