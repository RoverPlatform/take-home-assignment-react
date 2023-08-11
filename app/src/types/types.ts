export type Product = {
    title: string;
    description: string;
    price: number;
    
}
export type ProductProps = {
    Product: Product; 
}


export type ProductListProps = {
    Products: Product[]; 
}
