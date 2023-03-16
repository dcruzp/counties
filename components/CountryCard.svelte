<script>
    export let country; 
</script>

<div class= "country-card">
   
    <a href={'/countries/' + country.name.common}>
        <img src={country.flags.svg} alt={country.name}/>
        <div class="description">
            <h2>{country.name.common}</h2>
            <p>{country.capital}</p>
        </div>
    </a>
</div>


<style>
    img{
        width: 100%;
        height: 50px;
        object-fit: cover;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
    }

    h2{
        font-size: 0.9rem;
    }
    .description{
        height: 4vh;
    }
    p{
        font-size: 0.7rem;
    }
    .country-card{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1rem;
        transition: all 150ms;
        cursor: pointer;
        outline: 2px solid transparent;
        border-radius:12px;
        box-shadow: 5px 5px 20px grey;
        background-color: rgb(234, 237, 238);
    }
    .country-card:hover{
        /* outline: 2px solid rgb(127, 127, 179); */
        transform: scale(1.05);
    }
</style>