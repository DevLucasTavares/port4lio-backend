import z from 'zod'
import { ProjectModel } from '../../models/Project'

export interface GetProjectsInputDTO {}

export type GetProjectsOutputDTO = ProjectModel[]

export const GetProjectsSchema = z.object ({

}).transform(data => data as GetProjectsInputDTO)