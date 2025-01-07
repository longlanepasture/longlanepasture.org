import "./style.css";

export const ClosureNotice = () => (
	<article className="notice hidden" id="closure-notice">
		Due to weather conditions, the Pasture becomes very waterlogged and{" "}
		<strong>may be closed to the public</strong>.<br />
		Weather permitting, we will be working on Saturday mornings 10am-12noon.
		<button className="close">✖</button>
	</article>
);
