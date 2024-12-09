export interface InfoOrder {
    key: number;
    id: string;
    name: string;
}

export const SENDING_METHOD: InfoOrder[] = [
    {
        key: 1,
        id: 'withdrawal',
        name: 'Retirada',
    },
    {
        key: 2,
        id: 'delivery',
        name: 'Entrega',
    },
]

export const PAYMENT_METHOD: InfoOrder[] = [
    {
        key: 1,
        id: 'credit',
        name: 'Cartão de crédito',
    },
    {
        key: 2,
        id: 'debit',
        name: 'Cartão de débito',
    },
    {
        key: 3,
        id: 'pix',
        name: 'Pix',
    },
    {
        key: 4,
        id: 'money',
        name: 'Dinheiro',
    },
]

export const MONEY_CHANGE_ITEMS: InfoOrder[] = [
	{ key: 1, id: "yes", name: "Sim" },
	{ key: 2, id: "no", name: "Não" },
];
