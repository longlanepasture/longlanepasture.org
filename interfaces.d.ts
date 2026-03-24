declare type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

// CSS module declarations
declare module "*.css" {
	const content: Record<string, string>;
	export default content;
}
