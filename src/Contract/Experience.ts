export interface Experience {
  title: string,
  description: string,
  icon: ExperienceIcon
}

export interface ExperienceIcon {
  ref: string,
  paths: Array<string>
}
