<script>
	import { ArrowRight } from 'lucide-svelte';
	let { buttonText = 'Try Demo', buttonLink = '/scan' } = $props();
</script>

<nav
	class="fixed top-0 isolate z-20 flex w-full justify-center bg-linear-to-t from-white/5 to-black/30 backdrop-blur-md"
>
	<div
		class="flex w-full max-w-sm items-center justify-between px-3 py-5 text-white md:max-w-6xl md:px-0 md:py-4"
	>
		<a href="/" class="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80">
			<img src="/logo.svg" alt="Lekana logo" class="h-6 w-6" />
			<span class="font-semibold">Lekana</span>
		</a>

		<div class="flex items-center gap-8 text-sm text-gray-300">
			<div class="hidden items-center gap-8 md:flex">
				<a href="/#about" class="transition-colors duration-300 hover:text-green-500">About</a>
				<a href="/#faq" class="transition-colors duration-300 hover:text-green-500">FAQ</a>
			</div>

			<div
				class="glow-btn flex rounded-full p-0.5 shadow-lg transition-shadow duration-500 hover:shadow-green-500/50"
			>
				<a
					href={buttonLink}
					class="flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs transition-colors duration-300 hover:text-white md:px-6 md:py-3 md:text-sm"
				>
					{buttonText}
					<ArrowRight class="h-4 w-4" />
				</a>
			</div>
		</div>
	</div>
</nav>

<style>
	.glow-btn {
		background: linear-gradient(var(--gradient-angle), #05df72, rgba(167, 243, 208, 0), #05df72);
		animation: rotation 8s linear infinite;
	}

	@keyframes rotation {
		0% {
			--gradient-angle: 0deg;
		}
		100% {
			--gradient-angle: 360deg;
		}
	}

	@property --gradient-angle {
		syntax: '<angle>';
		initial-value: 0deg;
		inherits: false;
	}
</style>
