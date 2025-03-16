<script lang="ts">
	import profilePhoto from '$lib/profile.jpeg';
	import Main from '$lib/Main.svelte';

	const nameText = 'Maks\n  Białas';
</script>

<Main>
	<h1>{nameText}</h1>

	<div id="profile-photo">
		<img src={profilePhoto} alt="My face" />
	</div>

	<p>Hi, I'm Maks!</p>

	<p>
		A fan of Typescript's expressiveness, Rust's thoughtfulness and performance, Scala's purity and
		elegance and the strength in simplicity of C.
	</p>

	<p>
		<a class="k8s-link" href="https://www.credly.com/badges/081cb8d8-4786-4666-8e08-a51e858f9a26/public_url" target="_blank">
			Kubernetes certified.
		</a>
	</p>

	<p>
		I have experience in both backend and frontend development, real-time systems & applications and
		data-engineering, with a solid background in machine learning.
	</p>

	<p>If you would like to work with me, feel free to reach out!</p>

	<footer>
		<a href="https://www.linkedin.com/in/maksbialas/">LinkedIn</a>
		<a href="https://github.com/maksbialas">GitHub</a>
	</footer>
</Main>

<style>
    #profile-photo {
        width: calc(100% - var(--side-margin));
        margin-bottom: 1rem;
        margin-left: var(--side-margin);

				img {
						width: 100%;
            max-height: 256px;
            object-fit: cover;
				}
    }

    @media (min-width: 768px) {
				p {
					margin-left: calc(6rem + (var(--side-margin)));
						max-width: 35%;
				}

        #profile-photo img {
						max-height: none;
            position: absolute;
						right: var(--side-margin);
						top: 8rem;
            width: 40%;
						max-width: 400px;
						height: 70vh;
        }
    }

    h1 {
        white-space: pre-wrap;
    }

		.k8s-link {
				color: inherit;
		}

    footer {
        margin: 2rem var(--side-margin);

        a {
            padding-left: .5rem;
            padding-bottom: .2rem;
            margin-right: 1rem;
            border-bottom: 2px solid var(--primary-font-color);
            text-decoration: none;
            color: inherit;
        }
    }

		@media (min-height: 920px) {
        footer {
            position: absolute;
            bottom: 0;
        }
		}
</style>
