<script>
    import { globals } from 'svelte/internal';
    import Navbar from './components/NavbarComponenets/Navbar.svelte';
    import Countries from './countries.svelte';
    // export let location; 
   
</script>

<Navbar />
<!-- <NavBar1 bind:menuItem/> -->
<!-- <div>
    <p>The location is {location.href}</p>
    <p>The pathName is {pathname}</p>
</div> -->
<svelte:component this={Countries}/>

<style global>
    :global(body){
        /* background: #ccc; */
        font-family: sans-serif;
    }

    :global(*){
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>