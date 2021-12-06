export interface OpenSource {
  name: string,
  url: string,
  description: string,
  technology: string,
  icon: OpenSourceIcon
}

export interface OpenSourceIcon {
  paths: Array<string>
}
