export interface Header {
    heading: string,
    headingText: string,
    buttonText: string,
    buttonLink: string
}

export interface Intro {
    icon: string,
    title: string,
    description: string
}

export interface Post {
    id: number,
    title: string,
    author: string,
    image: string,
    publishdate: string,
    excert: string
}