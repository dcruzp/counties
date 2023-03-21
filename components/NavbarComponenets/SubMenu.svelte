<script>
    export let subMenu;
    export let subDropdownOpen;
</script>

<ul class="sub-menu {subDropdownOpen && 'sub-menu-show'}">
    {#each subMenu.subMenuLinks as  subMenuLink, i (i)}
        <li>
            <a href="/#">{subMenuLink}</a>
        </li>
    {/each}
</ul>


<style>
    a:hover{
        color: #9b9b9b;
    }

    @media screen and (max-width: 800px){
        .sub-menu{
            font-size: 0.9em;
            display: none;
        }
        .sub-menu-show{
            display: block;
        }
    }
</style>