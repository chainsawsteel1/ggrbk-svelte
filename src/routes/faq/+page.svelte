<script lang="ts">
    import { movepg } from "$lib/utils";
    import { setupViewTransition } from "sveltekit-view-transition";
    const { transition } = setupViewTransition();

    import { page } from "$app/stores";
    import { MetaTags } from "svelte-meta-tags";
</script>

<div class="here">
    <h2 use:transition={"faq"}>GGRBK FAQ List</h2>
    <p>ページ未実装</p>
    <button onclick={() => movepg("https://ggrbk.github.io/faq/list.html")}>ここにあります</button>
    <p>頻繁に発生する質問にはこれらのリンクを貼り付けて撃退しましょう！</p>
</div>

<style lang="postcss">
    button  {
        @apply
        bg-blue-500 active:bg-blue-600 text-white
        font-bold
        py-2 px-4
        border-b-4 border-blue-700 active:border-blue-800
        rounded
    }

    .here {
    @apply
    text-center
    mt-10
    }
</style>

<MetaTags
    title="GGRBK FAQ"
    openGraph={{
        type: 'website',
        url: $page.url.href,
        title: 'GGRBK FAQ',
        description: 'どっかのサーバーで頻繁に来る質問一覧',
        images: [
            {
                url: "/favicon.png",
                alt: "ファビコン",
            }
        ],
        siteName: 'GooglingGo! Japan'
    }}
/>