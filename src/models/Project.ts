export interface ProjectDB {
  id: string,
  title: string,
  description: string,
  technologies: string,
  deploy_link: string,
  image_link: string
}

export interface ProjectModel {
  id: string,
  title: string,
  description: string,
  technologies: string,
  deployLink: string,
  imageLink: string
}

export class Project {
  constructor(
    private id: string,
    private title: string,
    private description: string,
    private technologies: string,
    private deployLink: string,
    private imageLink: string
  ){}

  public getId(): string {
    return this.id
  }

  public setId(value: string): void {
    this.id = value
  }

  public getTitle(): string {
    return this.title
  }

  public setTitle(value: string): void {
    this.title = value
  }

  public getDescription(): string {
    return this.description
  }

  public setDescription(value: string): void {
    this.description = value
  }

  public getTechnologies(): string {
    return this.technologies
  }

  public setTechnologies(value: string): void {
    this.technologies = value
  }

  public getDeployLink(): string {
    return this.deployLink
  }

  public setDeployLink(value: string): void {
    this.deployLink = value
  }

  public getImageLink(): string {
    return this.imageLink
  }

  public setImageLink(value: string): void {
    this.imageLink = value
  }

  public toDBModel(): ProjectDB {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      technologies: this.technologies,
      deploy_link: this.deployLink,
      image_link: this.imageLink
    }
  }

  public toBusinessModel(): ProjectModel {
    return{
      id: this.id,
      title: this.title,
      description: this.description,
      technologies: this.technologies,
      deployLink: this.deployLink,
      imageLink: this.imageLink
    }
  }
}