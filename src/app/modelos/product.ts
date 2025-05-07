export interface Product {
    id: string,
    title: string,
    description: string,
    category: string,
    price: number,
    rating: number,
    images: string[],
    stock: number,
    availabilityStatus: string,
    thumbnail: string
}
