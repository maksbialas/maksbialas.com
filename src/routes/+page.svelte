<script lang="ts">
	import profilePhoto from '$lib/profile.jpeg';
	import Main from '$lib/Main.svelte';

	const nameText = 'Maks\n  Białas';
</script>

<Main>
	<h1>{nameText}</h1>

	<img id="profile-photo" src={profilePhoto} />


	<p>
		A fan of Typescript's expressiveness, Rust's thoughtfulness and performance, Scala's purity and
		elegance and the strength in simplicity of C.
	</p>

	<p>Kubernetes certified.</p>

	<p>
		I have experience in both backend and frontend development, real-time systems & applications and
		data-engineering, with a solid background in machine learning.
	</p>

	<p>If you would like to work with me, feel free to reach out!</p>

</Main>

<footer>
	<a href=".">LinkedIn</a>
	<a href=".">Signal</a>
</footer>

<style>
	#profile-photo {
		width: calc(100% - 2rem);
			margin-left:  2rem;
	}

	h1 {
		white-space: pre-wrap;
			margin: 1rem 2rem;
	}

  p {
      margin: 1.5rem 2rem;
  }

  footer {
      margin: 3rem 2rem 2rem;
      a {
          padding-left: .5rem;
          margin-right: 1rem;
          border-bottom: 2px solid var(--primary-font-color);
          text-decoration: none;
          color: inherit;
      }
  }
</style>
