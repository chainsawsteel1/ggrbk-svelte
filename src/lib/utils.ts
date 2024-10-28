import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { get } from 'svelte/store';
import Swal from 'sweetalert2';

export const movepg = (url: string) => {
    const $page = get(page);
    if ($page.url.origin != new URL(url).origin) {
        window.open(url, '_blank');
    } else if (url == $page.url.href) {
        Swal.fire({
            title: "すでにそのページに居ます",
            icon: "error"
        });
    } else {
        goto(url);
    } 
};
