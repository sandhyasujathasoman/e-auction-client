export interface Product {
    id?: number;
    productName?: string;
    shortDescription?: string;
    detailedDescription?: string;
    category?: string;
    startingPrice?: string;
    bidEndDate?: string;
    sellerId: number;
}

export interface Bids {
    bidAmount?: string;
    buyer: Buyer;
}

export interface Buyer {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
}

export interface Seller {
    address: string;
    city: string;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    phone: string;
    pin: number;
    state: string;
}


    