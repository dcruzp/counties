<script>
    import SubMenu from './SubMenu.svelte';
    export let subMenu;
    let subDropdownOpen = false; 
</script>

<li class="sub-dropdown">
    <div on:click="{()=> subDropdownOpen = !subDropdownOpen}" on:keydown={() => false
    }>
        <span>{subMenu.SubDropdown}</span>
        <span class="material-symbols-outlined {subDropdownOpen && 'icon-rotated'}">
            chevron_right
        </span>
    </div>
    <SubMenu {subMenu} {subDropdownOpen}/> 
</li> 

<style>
    .sub-dropdown > div{
        cursor: pointer;
    }

    .sub-dropdown > div span :first-child{
        font-weight: bold;
    }

    .sub-dropdown > div{
        display: flex;
        justify-content:  space-between;
        align-items: center;
        gap: 0.5em;
    }

    .sub-dropdown > div{
        cursor: pointer;
        padding: 0.5em;
    }

    @media screen and (min-width: 800px){
        .sub-dropdown > div span:last-child{
            display: none;
        }

        .sub-dropdown > div{
            display: none;
        }
    }

    @media screen and (max-width: 800px){
        .sub-dropdown:hover > div{
            background: #dbdbdb;
        }

        .sub-dropdown > div {
            display: flex;
            justify-content: space-between;
            align-items:  center;
            gap: 0.5em;
        }
    }
</style>