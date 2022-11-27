<script lang="ts">
    import Header from "../components/header/header.svelte";
    import Home from "../components/home/home.svelte";
    import { Styles } from "sveltestrap";
    import { Client, Environment, ApiError } from 'square'
  import { onMount } from "svelte";
    // import * as dotenv from 'dotenv' 
    // dotenv.config()

    const client = new Client({
        //REPLACE IN PROD
    accessToken: 'EAAAEAzeABaIXk8gWUNwe7sA0aLaFG7z_daPnMpI2MSufyUKgEEHu5HqaRVbEEvj',
    environment: Environment.Sandbox,
    });

    const { locationsApi } = client;

    async function getLocations() {
    try {
        let listLocationsResponse = await locationsApi.listLocations();

        let locations = listLocationsResponse.result.locations;

        locations.forEach(function (location) {
        console.log(
            location.id + ": " +
            location.name +", " +
            location.address.addressLine1 + ", " +
            location.address.locality
        );
        });
    } catch (error) {
        if (error instanceof ApiError) {
        error.result.errors.forEach(function (e) {
            console.log(e.category);
            console.log(e.code);
            console.log(e.detail);
        });
        } else {
        console.log("Unexpected error occurred: ", error);
        }
    }
    };

    onMount(() => {
        getLocations();
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
