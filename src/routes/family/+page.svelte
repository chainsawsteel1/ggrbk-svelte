<script lang="ts">
    import { movepg } from "$lib/utils";
</script>

<div class="here">
    <h2>GGRBK Family</h2>
    <p>ページ未実装</p>
    <button onclick={() => movepg("https://ggrbk.github.io/family.html")}>ここにあります</button>
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