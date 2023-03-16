<script>
    import Navbar from './Navbar.svelte';
    import Countries from './countries.svelte';
    export let location; 
    let pathname = window.location.pathname;
    import NavBar1 from './testingNavbar.svelte';
    let menuItem;
</script>

<NavBar1 bind:menuItem/>
<div>
    <p>The location is {location.href}</p>
    <p>The pathName is {pathname}</p>
</div>
<svelte:component this={Countries}/>