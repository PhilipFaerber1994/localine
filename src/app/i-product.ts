export interface IProduct {
    id: number,
    productName: string,
    productDescription: string,
    category: string,
    price: number,
    inventory: number,
    availableAt: {
        1: string,
        2: string,
        3: string,
        4: string,
        5: string
    },
    imageUrl: string
}
