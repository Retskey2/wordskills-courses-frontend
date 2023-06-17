type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>;

type NumberRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

export interface IInterviewItem {
	score: NumberRange<1, 6>;
	description: string;
	image: string;
	label: string;
	client: {
		age: number;
		name: string;
	};
}
