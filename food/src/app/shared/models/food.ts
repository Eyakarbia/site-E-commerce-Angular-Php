export class foods {
    id!: number;
    price!: number;
    name!: string;
    favorite: boolean = false;
    satr!: number;
    tags?: string[];
    imageUrl!: string;
    disponible!: string;
    origins!: string[];
}

export interface Food {
    id: number;
    price: number;
    name: string;
    favorite: boolean;
    satr: number;
    tags?: string[];
    imageUrl: string;
    disponible: string;
    origins: string[];
}