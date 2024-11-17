interface Film {
    title : string,
    director : string,
    duration : number,
    image_url ?: string,
    description ?: string,
    budget ?: number
}
interface Movie {
    title: string;
    director: string,
    description : string;
}

export type {Film, Movie}