<script>
    import CountryCard from "./CountryCard.svelte";
    export let countries;
</script>

<div class="countries-list">
    {#each countries as country}
        <CountryCard country={country}></CountryCard>
    {/each}
</div>

<style>
    .countries-list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px,1fr));
        grid-column-gap: 1rem; 
        grid-row-gap: 2rem;
    }
</style>