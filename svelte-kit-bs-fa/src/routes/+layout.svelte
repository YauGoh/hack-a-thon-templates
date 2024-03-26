<script lang="ts">
    import "@fortawesome/fontawesome-free/scss/fontawesome.scss"
    import "@fortawesome/fontawesome-free/scss/brands.scss"
    import "@fortawesome/fontawesome-free/scss/regular.scss"
    import "@fortawesome/fontawesome-free/scss/solid.scss"

    import "bootstrap-icons/font/bootstrap-icons.scss";

    import "bootstrap/dist/css/bootstrap.css";

    import { onMount } from "svelte";

    // import bootstrap.js client side
    onMount(async() => await import("bootstrap/dist/js/bootstrap"));
</script>
<slot />