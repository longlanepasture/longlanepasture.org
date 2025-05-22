import { mergeMetadata } from "../../lib/helpers";
import { HorizontalLine } from "../components/HorizontalLine";
import { NavigationLink } from "../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Regulations and Guidelines while visiting Long Lane Pasture",
	description:
		"Please respect the wildlife and other visitors by following these regulations and guidelines.",
});

export default () => (
	<article id="regulations">
		<h2>
			Regulations
			<a href="#regulations" aria-label="Anchor link to Regulations"></a>
		</h2>
		<p>
			You are invited to quietly enjoy Long Lane Pasture. Please respect the
			environment and take care to keep any disturbance to a minimum. The
			following Regulations, made under clause 3.20 of the Trust Deed of Long
			Lane Pasture Trust (LLPT), are aimed at protecting the site for the
			benefit of both its visitors and its wildlife residents.
		</p>

		<h3>Opening times</h3>
		<p>
			Opening times vary. We try to keep the pasture open on Saturdays and
			Sundays from 10am to dusk. The Pasture may be closed in winter due to
			adverse weather conditions and flooding. LLPT may close or restrict access
			from time to time. Groups may visit the Pasture by arrangement at other
			times.
		</p>

		<h3>Vehicles and Equipment</h3>
		<p>
			No vehicle or equipment, whether power driven or not, may be brought onto
			the Pasture without the prior permission of LLPT. This general prohibition
			on vehicles and equipment includes, but is not confined to, lorries, cars,
			motorbikes, bicycles, roller skates and skateboards. Wheelchairs or
			similar for people with disabilities are permitted.
		</p>

		<h3>Food and Drink</h3>
		<p>
			Visitors may bring and consume food and drink on the Pasture provided this
			does not involve cooking or result in nuisance or litter. No person under
			the age of 18 years may consume alcohol on the Pasture.
		</p>
		<h3>Animals and Wildlife</h3>
		<p>
			The following are <strong>not permitted</strong>:
		</p>
		<ol>
			<li>Introducing any creature or plant into the pond or elsewhere.</li>
			<li>Planting, removing, pruning or otherwise tending any plant.</li>
			<li>Disturbing the wildlife.</li>
			<li>Dogs and pets must be kept on a lead at all times.</li>
		</ol>

		<h3>Nuisance</h3>
		<p>
			Only activities which do not cause a nuisance to other visitors, Pasture
			neighbours or LLPT, or disturbance to wildlife are permitted.
		</p>
		<p>
			The following are <strong>not permitted</strong>:
		</p>
		<ol>
			<li>
				Depositing rubbish or polluting material, except in the waste bins.
			</li>
			<li>
				Any commercial act such as displaying, selling or hiring goods or
				services.
			</li>
			<li>
				Meetings, including religious, political or sports meetings. But
				meetings for educational purposes are encouraged by prior arrangement.
			</li>
			<li>Erecting any furniture, stand or structure.</li>
			<li>Fixing or displaying any sign.</li>
			<li>Using any radio, music machine, public address system or similar.</li>
			<li>Playing games with balls or frisbee.</li>
			<li>Flying model aeroplanes, kites or similar.</li>
			<li>Lighting fires, stoves, barbecues or fireworks.</li>
			<li>
				Climbing walls, fences or artifacts. Tree climbing is allowed with
				Guardian care.
			</li>
			<li>
				Damaging, dislodging, defacing, moving or interfering with the
				installations, artifacts or soil of the Pasture.
			</li>
			<li>
				Photography if it is for publication or commercial purposes. Such
				photography requires LLPT's permission and a charge will be made. This
				restriction does not apply to private, non-commercial and non-published
				photography.
			</li>
			<li>Any illegal act.</li>
		</ol>

		<h3>Breach of Regulation</h3>
		<p>
			Anyone breaching these regulations may be asked to leave the Pasture
			and/or be banned from entering the Pasture again at the discretion of LLPT
			or its agents. Persons who do not obey the signs on the Pasture or the
			reasonable instructions from LLPT or its agents may be removed by
			reasonable force.
		</p>

		<h3>Amendment to Regulations</h3>

		<p>LLPT or its management may amend these Regulations at any time.</p>
		<HorizontalLine />
		<p>
			Check our <NavigationLink to="visit">visitor information</NavigationLink>{" "}
			and come enjoy the pasture!
		</p>
	</article>
);
