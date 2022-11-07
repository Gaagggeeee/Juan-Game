<script lang="ts">
    import Header from "../components/header/header.svelte";
    import Home from "../components/home/home.svelte";
    import { Styles } from "sveltestrap";
</script>

<Styles />

<div class="site-wrapper">

    <div class="site-content">
        <Header />
        <Home />
    </div>

</div>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
@import url('https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap');


    :root {
        --pizza-font: 'Satoshi', sans-serif;
        --font-poiret: 'Poiret One', swap;
        --font-color-white: #EEF1F4;
        --header-link-font-size: 1.25rem;

        height: 100% !important;
    }

    

    .site-wrapper {
        background-color: #070605;
        min-height: 100%;
        padding-top: 1rem;

        .site-content {
            
        }
    }

</style>
