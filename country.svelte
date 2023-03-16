<script >
    import Navbar from "./Navbar.svelte";

    export let id ; 

    let country = [] ;
    async function load_country(){
        const req = await fetch (`https://restcountries.com/v3.1/name/${id}?fullText=true`);
        country = await req.json();
    }
    load_country();
</script>

<Navbar/>
{#each country as t}
    <img src="{t.flags.png}" alt="{t.name.common}" height="400px"/>
    <h3>The Capital is:  {t.capital[0]}</h3>
    <p>Flag Descriptions: {t.flags.alt}</p>
{/each}