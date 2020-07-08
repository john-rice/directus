import { Meta } from './meta';

export type Query = {
	fields?: string[];
	sort?: Sort[];
	filter?: Filter[];
	limit?: number;
	offset?: number;
	page?: number;
	single?: boolean;
	meta?: Meta[];
	search?: string;
};

export type Sort = {
	column: string;
	order: 'asc' | 'desc';
};

export type Filter = {
	column: string;
	operator: FilterOperator;
	value: null | string | number | (string | number)[];
};

export type FilterOperator = 'eq' | 'neq' | 'in' | 'nin' | 'null' | 'nnull';
