<script lang="ts">
	import profilePhoto from '$lib/profile.jpeg';
	import Main from '$lib/Main.svelte';

	const nameText = 'Maks\n  Białas';
</script>

<Main>
	<div id="about">
		<h1>{nameText}</h1>

		<div id="profile-photo-container">
			<div id="profile-photo" style:background-image="url('{profilePhoto}')"></div>
		</div>

		<article>
			<p>Hi, I'm Maks!</p>

			<p>
				A fan of Typescript's expressiveness, Rust's thoughtfulness and performance, Scala's purity
				and elegance and the strength in simplicity of C.
			</p>

			<p>
				<a
					href="https://www.credly.com/badges/081cb8d8-4786-4666-8e08-a51e858f9a26/public_url"
					target="_blank"
				>
					Kubernetes certified.
				</a>
			</p>

			<p>
				I have experience in both backend and frontend development, real-time systems & applications
				and data-engineering, with a solid background in machine learning.
			</p>

			<p>If you would like to work with me, feel free to reach out!</p>
		</article>
	</div>
</Main>

<style>
	#about {
		height: 100%;
		display: grid;
		grid:
			'heading'
			'photo' 15rem
			'text';
		gap: 1rem 5rem;
		@media (min-width: 768px) {
			grid:
				'heading  photo'
				'text     photo' 1fr
				/ 2fr 1fr;
		}
	}

	h1 {
		white-space: pre-wrap;
	}

	#profile-photo-container {
		grid-area: photo;
		@media (min-width: 768px) {
			margin-top: 2rem;
		}
	}

	#profile-photo {
		height: 100%;
		background-size: cover;
		background-position: center;
		margin-right: calc(-1 * var(--side-margin));

		@media (min-width: 768px) {
			margin-right: 0;
			aspect-ratio: 2 / 3;
			width: auto;
			height: auto;
		}
	}

	article {
		grid-area: text;
		@media (min-width: 768px) {
			margin-left: 5rem;
		}
	}
</style>
