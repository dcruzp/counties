<script>
	import MovieCard from "./MovieCard.svelte";

    export let movie; 
</script>

<h3>Poplar Movies</h3>

<div class="popular-movies">
    {#each movie as item }
        <MovieCard movie={item}/>
    {/each}
</div>

<style>
    h3{
        padding: 0 1rem;
    }
    .popular-movies{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
        grid-column-gap: 1rem; 
        grid-row-gap: 2rem;
    }
</style>