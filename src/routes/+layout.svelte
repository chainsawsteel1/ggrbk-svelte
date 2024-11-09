<script>
	import '../app.css';
	
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { movepg } from '$lib/utils';
	import { page } from '$app/stores';

	let { children } = $props();

	setupViewTransition();
</script>

<div class="header">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <h1 class="logo" onclick={() => movepg($page.url.origin + "/")}><span class="gg">Goog</span><span class="bg">ling</span><span class="go">Go</span><span class="jp">! Japan</span></h1>
</div>

{@render children()}

<style lang="postcss">
	.header {
        @apply
        text-center
    }
    .logo {
        @apply
        text-6xl tracking-tight
        bg-clip-text text-transparent
        pb-2 w-fit m-auto
        mt-10
        mb-10
    }
</style>