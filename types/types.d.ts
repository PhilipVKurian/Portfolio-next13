type Project = {
    id: number,
    title: string,
    image: string,
    techimages: string[],
    description: string,
    github: string,
    deployed: string,
    tech: string[],
    usage: string
}

type Projects = Project[]

type Contact = {
    path: string,
    title: string,
    link: string
}

type contacts = Concact[]