import { DonateButton } from "../components/DonateButton";

export default () => (
	<>
		<article id="donate-to-long-lane-pasture">
			<figure className="hero">
				<img
					src="/assets/banners/banner-2024-10-05-at-17.44.28.jpg"
					alt="Volunteering in the pasture"
				/>
				<figcaption>
					<h2>Help Us Protect Nature and Our Community!</h2>
				</figcaption>
			</figure>
		</article>
		<article id="donate">
			<p>
				Long Lane Pasture is more than just a green space—it's a thriving haven
				for wildlife and a peaceful retreat for the local community. We are
				raising funds to support the Long Lane Pasture Trust, and we need your
				help to keep this special place flourishing.
			</p>

			<p>
				Managed entirely by passionate volunteers, Long Lane Pasture offers a
				safe environment for countless species of plants and animals, while
				providing a place for people of all ages to connect with nature.
				However, our equipment is ageing and in urgent need of replacement. Our
				ride-on mower and brush cutters, essential for maintaining the pasture
				and keeping it accessible to everyone, are wearing out. Without these
				tools, it becomes much harder to manage the space and care for the
				wildlife that depends on it.
			</p>

			<p>
				By donating, you're not just supporting a green space—you're helping us
				continue to protect biodiversity, maintain safe access, and sustain a
				valuable community resource. Every contribution, no matter how small,
				will make a real difference in maintaining this precious pasture for
				future generations.
			</p>

			<p>
				Thank you for being part of something that truly matters to both
				wildlife and our community!
			</p>
			<p className="center">
				<DonateButton />
			</p>
		</article>
	</>
);
