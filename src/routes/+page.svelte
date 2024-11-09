<script lang="ts">
    import { page } from "$app/stores";
    import { movepg } from "$lib/utils";
    import Swal from "sweetalert2";
    import { MetaTags } from "svelte-meta-tags";
    import { fade, blur } from "svelte/transition";
    import { setupViewTransition } from "sveltekit-view-transition";
    const { transition } = setupViewTransition();

    import { browser } from "$app/environment";

    let enable: boolean;
    let eng: string;

    if (browser) {
        const shsts = localStorage.getItem("shsts");
        if (shsts == undefined) {
            enable = false;
            localStorage.setItem("shsts", "false");
        } else if (shsts == "false") {
            enable = false;
        } else if (shsts == "true") {
            enable = true;
        } else {
            localStorage.setItem("shsts", "false");
            enable = false;
        }
        const ser = localStorage.getItem("ser");
        if (shsts == undefined) {
            eng = "g";
            localStorage.setItem("ser", "g");
        } else {
            eng = ser ?? "g";
        }
    }

    export const ggrks = () => {
        Swal.fire({
            title: "ググれカス",
            icon: "info",
        });
    };
    export const ggrbk = () => {
        Swal.fire({
            title: "ググれボケ(またはバカ)",
            icon: "info",
        });
    };

    let sharp = $page.url.search;
    let search: string = sharp.substr(sharp.indexOf("?") + 1);

    let data: string;

    export const genogp = () => {
        if (search == "") {
            data =
                "人に聞くのは最終手段です。一通り調べてから聞くようにしましょう。";
        } else {
            data = search;
        }
        return data;
    };

    export const change = () => {
        if (enable == true) {
            enable = false;
            localStorage.setItem("shsts", "false");
        } else {
            enable = true;
            localStorage.setItem("shsts", "true");
        }
    };

    export const chsv = (item: string) => {
        localStorage.setItem("ser", item);
    };

    export const go = (event: KeyboardEvent) => {
        if (event.ctrlKey && event.key === "Enter") {
            if (browser) {
                window.open(gosearch(eng, search), "_self");
            }
        }
    };

    export const gosearch = (engin: string, str: string) => {
        let url: string = "";
        switch (engin) {
            case "g":
                url = "https://www.google.com/search?q=";
                break;
            case "b":
                url = "https://www.bing.com/search?q=";
                break;
            case "d":
                url = "https://duckduckgo.com/?q=";
                break;
            case "y":
                url = "https://search.yahoo.com/search?q=";
                break;
            case "br":
                url = "https://search.brave.com/search?q=";
                break;
            case "e":
                url = "https://www.ecosia.org/search?q=";
                break;
            case "k":
                url = "https://karmasearch.org/search?q=";
                break;
        }
        console.log(url + str);
        return url + str
    };
</script>

<div class="engine">
    <div class="search">
        {#if search}
            <h2 transition:blur={{ duration: 300 }}>🔍 {search}</h2>
        {/if}
    </div>
    <input
        placeholder="search..."
        class={`rounded-full dark:bg-black dark:border-white dark:text-white w-80`}
        type="search"
        onkeydown={go}
        bind:value={search}
    />
    <br />
    <br />
    <p>お好みの検索エンジンを選んでください</p>
    <div class="btns">
        <button
            onclick={() => movepg("https://www.google.com/search?q=" + search)}
            >Google</button
        >
        <button
            onclick={() => movepg("https://www.bing.com/search?q=" + search)}
            >Bing</button
        >
        <button onclick={() => movepg("https://duckduckgo.com/?q=" + search)}
            >DuckDuckGo</button
        >
        <button
            onclick={() =>
                movepg("https://search.yahoo.com/search?q=" + search)}
            >Yahoo!</button
        >
        <button
            onclick={() =>
                movepg("https://search.brave.com/search?q=" + search)}
            >Brave</button
        >
        <button
            onclick={() => movepg("https://www.ecosia.org/search?q=" + search)}
            >Ecosia</button
        >
        <button
            onclick={() => movepg("https://karmasearch.org/search?q=" + search)}
            >KARMA</button
        >
    </div>
</div>

<div class="ggrbk">
    <div class="btns">
        <button onclick={ggrks}>GGRKSとは</button>
        <button onclick={ggrbk}>GGRBKとは</button>
        <button
            onclick={() => movepg($page.url.origin + "/family")}
            use:transition={"family"}>GGRBK Family</button
        >
        <button
            onclick={() => movepg($page.url.origin + "/faq")}
            use:transition={"faq"}>GGRBK FAQ</button
        >
    </div>
    <div class="tips">
        {#if !search}
            <p transition:blur={{ duration: 300 }}>
                Tips:
                ?以降にワードを指定することで、各検索エンジンへのリンクから直接検索できるようになります。<a
                    href="?GGRKS"
                    target="_blank">例</a
                >
            </p>
        {/if}
    </div>
</div>

<div class="direct">
    <p>Ctrl+Returnで検索(未実装)</p>
    <button onclick={change}>{enable}</button>
    {#if enable}
        <select
            bind:value={eng}
            onchange={() => chsv(eng)}
            transition:blur={{ duration: 300 }}
        >
            <option value="g">Google</option>
            <option value="b">Bing</option>
            <option value="d">DuckDuckGo</option>
            <option value="y">Yahoo!</option>
            <option value="br">Brave</option>
            <option value="e">Ecosia</option>
            <option value="k">KARMA</option>
        </select>
        <p>{eng}</p>
    {/if}
</div>

<MetaTags
    title="GooglingGo! Japan"
    openGraph={{
        type: "website",
        url: $page.url.href,
        title: "GGRKS",
        description: "🔍 " + genogp(),
        images: [
            {
                url: "/favicon.png",
                alt: "ファビコン",
            },
        ],
        siteName: "GooglingGo! Japan",
    }}
/>

<style lang="postcss">
    .search {
        @apply h-14;
    }

    .tips {
        @apply h-14;
    }

    .engine {
        @apply text-center;
    }

    .ggrbk {
        @apply text-center
        mt-10;
    }

    button {
        @apply bg-blue-500 active:bg-blue-600 text-white
        font-bold
        py-2 px-4
        border-b-4 border-blue-700 active:border-blue-800
        rounded;
    }

    select {
        @apply bg-blue-500 active:bg-blue-600 text-white
        font-bold
        py-2 px-4
        border-b-4 border-blue-700 active:border-blue-800
        rounded;
    }

    a {
        @apply text-blue-400;
    }

    .direct {
        @apply text-center;
    }
</style>
