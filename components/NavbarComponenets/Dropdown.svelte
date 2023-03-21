<script>
    import Menu from "./Menu.svelte";
    export let link;
    let dropdownOpen = false;
</script>

<li class="dropdown">
    <div on:click="{() => dropdownOpen = ! dropdownOpen}" on:keyup={()=> true}>
        <span>{link.dropdown}</span>
        <span class="material-symbols-outlined {dropdownOpen && 'icon-rotated'}">
            chevron_right
        </span>
    </div>
    <Menu {link} {dropdownOpen}/>
</li>

<style>
    .dropdown > div{
        cursor: pointer;
    }

    @media screen and (min-width: 800px){
        .dropdown > div{
            padding: 1.5em 1em;
        }
        .dropdown > div {
            border-bottom: 3px #fff solid;
            transition: 0.3s;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 0.5em;
        }
        .dropdown:hover > div{
            border-color: #000;
        }
        .dropdown :global(li){
            margin-bottom: 1em;
        }
        .dropdown > div span:last-child{
            display: none;
        }
        .dropdown:hover :global(.menu){
            height: 20vh;
            padding: 2em;
        }
    }

    @media screen and (max-width: 800px){
        .dropdown > div{
            cursor: pointer;
            padding: 0.5em;
        }
        .dropdown:hover > div {
            background: #dbdbdb;
        }

        .dropdown > div{
            display: flex;
            justify-content:  space-between;
            align-items: center;
            gap: 0.5em;
        }
    }
</style>