export interface Experience {
    title: string;
    titleEn?: string;
    name: string;
    lieu: string;
    lieuEn?: string;
    date: string;
    dateEn?: string;
    resume: string;
    resumeEn?: string;
    point: string[];
    pointEn?: string[];
    technologie: string[];
    logo: string;
    lien: string;
}

export interface Project {
    id: number;
    image: string;
    logo: string;
    title: string;
    titleEn?: string;
    date: string;
    dateEn?: string;
    tech: string[];
    description: string;
    descriptionEn?: string;
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
    titleEn?: string;
    name: string;
    nameEn?: string;
    lieu: string;
    lieuEn?: string;
    date: string;
    description?: string;
    descriptionEn?: string;
}
