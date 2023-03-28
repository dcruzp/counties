<script >
    import CountryList from './components/CountryList.svelte';
    import Navbar from './Navbar.svelte'

    let  countries =[];
    async function load_countries () {
        const req = await fetch(`https://restcountries.com/v3.1/all`); 
        countries = await req.json();
    }

    async function load_countries_by_region (region){
        const req = await fetch(`https://restcountries.com/v3.1/region/${region}`); 
        countries = await req.json();
        return countries;
    }

    let selected = "europe"; 
    let elements = ['Asia','Africa','North America','South America','Europe','Oceania'];

    $: load_countries_by_region(selected); 
</script>



<div class="countries-list">
    <Navbar bind:selected={selected} bind:elements={elements}></Navbar>
    <section class="countries-list-scrolling">
        <CountryList countries={countries}/>
    </section>
</div>

<style>
    .countries-list{
        width: 60%;
        display: block;
        margin: auto;
       margin-top: 20px;
        
        
    }
    .countries-list-scrolling{
        overflow-y: auto;
        padding: 1%;
        height:80vh;
        /* border-left: 1px solid gray; */
    }
</style>