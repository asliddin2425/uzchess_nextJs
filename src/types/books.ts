export interface Books {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    newPrice: number;
    author:author;
    authorId: number;
    categoryId: number;
    languageId: number;
    difficultyId: number;
    rating: number;
}

interface author{
    fullName:string
}