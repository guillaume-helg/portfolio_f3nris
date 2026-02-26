export interface Experience {
    title: string;
    name: string;
    lieu: string;
    date: string;
    resume: string;
    point: string[];
    technologie: string[];
    logo: string;
    lien: string;
}

export interface Project {
    id: number;
    image: string;
    logo: string;
    title: string;
    date: string;
    tech: string[];
    description: string;
    github: string;
}

export interface Skill {
    num: number;
    img: string;
    title: string;
    category: string;
}

export interface Education {
    title: string;
    name: string;
    lieu: string;
    date: string;
    description?: string;
}
