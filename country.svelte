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

{#each country as t}
    <div class="target">
        <div class="row">
            <img class="inf-flag"  src="{t.flags.png}" alt="{t.name.common}" height="400px"/>
            <div class="inf-data">
                <h4><strong>Common Name:</strong> {t.name.common}</h4>
                <h4><strong>Official Name:</strong> {t.name.official}</h4>
                <h5>Capital:  {t.capital[0]}</h5>
                <p><strong>Flag Descriptions:</strong>{t.flags.alt}</p>
                <div class="timezones">
                    <h4>Time Zones:</h4>
                    <ul>
                        {#each t.timezones as tz}
                           <li>{tz}</li> 
                        {/each}
                    </ul>
                </div>
                <div class="continents">
                    <h4>Continents</h4>
                    <ul>
                        {#each t.continents as continent }
                            <li>{continent}</li>
                        {/each}
                    </ul>
                </div>
                <h4>Coat of Arms</h4>
                <img class="coat-img" src="{t.coatOfArms.png}" alt="{t.name.common}"/>
            </div>
        </div>
    </div>
{/each}

<style>
    .target{
        margin: auto;
        width: 50%;
        border: 1px solid grey;
        border-radius: 10px;
        box-shadow: 10px 10px 40px grey;
        height: 96vh;
    }
    img {
        display: inline;
        
        margin: auto;
        border-radius: 5px;
    }
    .inf-data{
        float: left;
        width: 45%;
        text-align:justify;
        margin: auto;
        margin-left: 1cap;
        
    }
    .inf-flag{
        float: left;
        width: 30%;
        height: 20%;
        padding: 2%;
    }
    .row:after{
        content: "";
        display: table;
        clear: both;
    }
    .coat-img{
        height: 200px;
        margin: auto;
        display: block;
    }
</style>