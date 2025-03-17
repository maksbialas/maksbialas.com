<script lang="ts">
	import Main from '$lib/Main.svelte';
	import linkedInIcon from '$lib/icons/linkedIn.svg';
	import signalIcon from '$lib/icons/signal.svg';
	import mailIcon from '$lib/icons/mail.svg';

	function email(event: Event) {
		event.preventDefault();
		const email = String.fromCharCode(
			109,
			97,
			107,
			115,
			46,
			98,
			105,
			97,
			108,
			97,
			115,
			64,
			103,
			109,
			97,
			105,
			108,
			46,
			99,
			111,
			109
		);
		window.location.href = 'mailto:' + email;
	}
</script>

<Main>
	<div id="contact">
		<h1>Contact</h1>
		<p>If you'd like to get in touch, feel free to reach out via any of the platforms below:</p>
		<div id="icons">
			<a href="." onclick={email}>
				<img src={mailIcon} alt="Mail icon" />
			</a>
			<a href="https://www.linkedin.com/in/maksbialas/" target="_blank">
				<img src={linkedInIcon} alt="LinkedIn icon" />
			</a>
			<a
				href="https://signal.me/#eu/zs5wkNWwdIxZqKADV30pimc19UVypK2WX7V9S2Hr7ePwmAzYOzJJhY88uaHz7d8n"
				target="_blank"
			>
				<img src={signalIcon} alt="Signal icon" />
			</a>
		</div>
	</div>
</Main>

<style>
	#contact {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	#icons {
		display: flex;
		justify-content: center;
		gap: 1.5rem;
		margin-top: 1rem;

		img {
			height: 2rem;
		}
	}
</style>
