<script>
    import SubDropdown from './SubDropdown.svelte';
    import SubDrowdown from './SubDropdown.svelte';
    export let link; 
    export let dropdownOpen;
</script>

<ul class="menu {dropdownOpen && 'menu-show'}">
    <li>
        <a href="/{link.dropdown.toLowerCase()}">{link.dropdown}</a>
    </li>
    {#each link.subMenus as subMenu (subMenu.id)}
        <SubDropdown {subMenu}/>
    {/each}
</ul>

<style>
    @media screen and (min-width: 800px){
        .menu{
            background:  #fff;
            position: absolute;
            top: 4.3em;
            left: 0;
            width: 100%;
            padding: 0 2em;
            overflow-y: scroll;
            transition: 0.4s ease-in-out;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 2em;

        }

        .menu > li:first-child{
            font-size: 1.1em;
            font-weight: bold;
            margin: 0;
        }

        .menu::-webkit-scrollbar-track{
            background: #f1f1f1;
        }

        .menu::-webkit-scrollbar-thumb{
            background: #888;
        }

        .menu::-webkit-scrollbar-thumb:hover{
            background: #555;
        }

        .menu{
            height: 0;
        }
    }

    @media screen and (max-width: 800px){
        .menu{
            display: none;
        }

        .menu-show{
            display: block;
        }

        .menu :global(li){
            padding: 0 1em;
            font-size: 1em;
            font-weight: 400;
        }
        .menu :global(a){
            display: block;
            margin: 0.8em 0;
        }
    }
</style>