export interface QuantityItem {
    value: number;
    price: number;
    text: string;
}

export interface FlavorsType {
    key: number;
    id: string;
    flavorName: string;
}

export const QUANTITY_SELECT: QuantityItem[] = [
	{ value: 10, price: 12, text: "10 - R$12,00" },
	{ value: 20, price: 18, text: "20 - R$18,00" },
	{ value: 30, price: 22, text: "30 - R$22,00" },
	{ value: 40, price: 27, text: "40 - R$27,00" },
	{ value: 50, price: 33, text: "50 - R$33,00" },
	{ value: 60, price: 38, text: "60 - R$38,00" },
	{ value: 70, price: 42, text: "70 - R$42,00" },
	{ value: 80, price: 49, text: "80 - R$49,00" },
	{ value: 90, price: 54, text: "90 - R$54,00" },
	{ value: 100, price: 58, text: "100 - R$58,00" },
];

export const FLAVORS_ITEMS: FlavorsType[] = [
    {
        key: 1,
        id: 'bolinha-de-queijo',
        flavorName: 'Bolinha de queijo',
    },
    {
        key: 2,
        id: 'coxinha-de-frango',
        flavorName: 'Coxinha de frango',
    },
    {
        key: 3,
        id: 'croquete-de-queijo-e-presunto',
        flavorName: 'Croquete de queijo e presunto',
    },
    {
        key: 4,
        id: 'enroladinho-de-salsicha',
        flavorName: 'Enroladinho de salsicha',
    },
    {
        key: 5,
        id: 'quibe-de-carne',
        flavorName: 'Quibe de carne',
    },
    {
        key: 6,
        id: 'risoles-de-carne',
        flavorName: 'Risóles de carne',
    },
]