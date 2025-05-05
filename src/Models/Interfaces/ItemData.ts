export interface ItemData {
    id: string;
    description: string;
    name: string;
    imageURL: string;
    buyNowLink: string;
    variations: ItemData[];
}