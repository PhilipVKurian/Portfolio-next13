type Project = {
    id: number,
    title: string,
    image: string,
    description: string,
    github: string,
    deployed: string,
    tech: string[],
    usage: string
}

type Projects = Project[]