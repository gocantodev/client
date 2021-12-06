export interface Project {
  name: string,
  url: string,
  description: string,
  technology: string,
  icon: ProjectIcon
}

export interface ProjectIcon {
  paths: Array<string>
}
