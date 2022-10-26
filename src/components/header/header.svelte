<script lang="ts">

    import type {Header} from './header.interface';
    //export let links: Header[];
    export let customstyle: string = '';
    export let customclass: string = '';
    export let orientation: string = '';
    export let links: any = [
        {
            title: 'hello'
        },
        {
            title: 'hello'
        }
    ]
    

</script>

<!-- HTML GOES HERE -->

{#if links}

<div class="header-wrapper">
    {#each links as link}
        <p>{link.title}</p>
    {/each}
</div>
    
{/if}

<style lang="scss">
 
</style>
