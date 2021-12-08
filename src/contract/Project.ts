import { Icon } from "./Icon"

export interface Project {
    uuid: string
    name: string
    url: string
    description: string
    technology: string
    icon: Icon
}
