<script lang="ts">
    import Header from "../components/header/header.svelte";
    import Home from "../components/home/home.svelte";
    import { Styles } from "sveltestrap";
    import { onMount } from "svelte";
    import { DISPATCHER } from '../stores/dispatcher.store'

    let data: any = null
    
    onMount(() => {
        DISPATCHER('GET_LOCATION')
    })

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
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');


    :root {
        --pizza-font: 'Satoshi', sans-serif;
        --font-poiret: 'Poiret One', swap;
        --font-poppins: 'Poppins', sans-serif;
        --font-color-white: #EEF1F4;
        --header-link-font-size: 1.25rem;

        height: 100% !important;
    }

    

    .site-wrapper {
        min-height: 100%;
        padding-top: 1rem;

        background: rgb(26,31,43);
        background: radial-gradient(circle, rgba(26,31,43,1) 20%, rgba(36,50,70,1) 80%);

        .site-content {
            
        }
    }

</style>
