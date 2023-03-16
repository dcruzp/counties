<script >
    import CountryList from './components/CountryList.svelte';
    import Navbar from './Navbar.svelte'

    let  countries =[];
    async function load_countries () {
        const req = await fetch(`https://restcountries.com/v3.1/all`); 
        countries = await req.json();
    }
    load_countries(); 
</script>



<section>
    <CountryList countries={countries}/>
</section>