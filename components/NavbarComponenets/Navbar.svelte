<script>
    import Dropdown from "./Dropdown.svelte";

    const links =[
        {
            dropdown: "Home",
            subMenus: [
                {
                    id: 1,
                    subDropdown: "Feature",
                    subMenuLinks: [
                        "New Feature", 
                        "Tutorial",
                        "About us"  
                    ] 
                }
            ],
        },
        {
            dropdown: "Regions",
            subMenus: [
                {
                    id: 1,
                    subDropdown: "Africa",
                    subMenuLinks: [
                        'North Africa',
                        'Central Africa',
                        'East Africa',
                        'West Africa',
                        'Southern Africa'
                    ]
                },
                {
                    id:2,
                    subDropdown: "America", 
                    subMenuLinks: [
                        'Nort America',
                        'Central America',
                        'Caribbean Islands',
                        'South America'
                    ]
                },
                {
                    id:3,
                    subDropdown: "Asia", 
                    subMenuLinks: [
                        'Central Asian',
                        'West Asian',
                        'Southeast Asian',
                        'South Asian',
                        'East Asian',
                    ]
                },
                {
                    id:4,
                    subDropdown: "Asia", 
                    subMenuLinks: [
                        'Eastern Europe',
                        'Northern Europe',
                        'South Europe',
                        'Western Europe',
                    ]
                }

            ],
        },
    ]


    let menuOpen = false ; 
</script>


<nav class="navbar">
    <a href="/#" class="brand">Countries</a>
    <div class="menu-container {menuOpen && 'mega-menu-show'}">
        <ul class="mega-menu">
            {#each links as link, i (i)}
                <Dropdown {link}/>                
            {/each}
        </ul>
    </div>
    <div class="buttons">
        <button class="btn">Settings</button>
        <button
            class="menu-btn"
            on:click="{() => menuOpen =! menuOpen}"
        >
            {#if menuOpen}
                <span class="material-symbols-outlined">
                    close
                </span>
            {/if}
            {#if !menuOpen}
                <span class="material-symbols-outlined">
                    menu
                </span>
            {/if}
        </button>
    </div>
</nav>

<style>
    :global(ul){
        list-style: none;
    }

    :global(a){
        text-decoration: none;
        color: #000;
    }
    :global(.material-simbols-outlined){
        transition: 0.3s;
    }
    .navbar,
    .buttons{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1em;
    }

    .brand{
        font-weight: bold;
        font-size: 1.3em;
    }

    button{
        border: none;
        transition: 0.3s;
        cursor: pointer;
        margin: 0; 
    }
    .btn{
        font-size: 1.1em;
        background: #ffffff;
        padding: 0.5em 1.3em;
        border-radius: 4px;
        color: #050303;
    }

    .btn:hover{
        background: #75cbd1;
    }

    .menu-btn{
        margin-left: 1em;
        background: none;
        display: inline-block;
    }

    .menu-btn span{
        font-size: 2em;
    }

    :global(.icon-rotated){
        transform: rotate(90deg);
    }

    @media screen and (min-width: 800px){
        .navbar{
            padding: 0 1.5em;
        }
        .mega-menu{
            display: flex;
            justify-content: center;
        }
        .menu-btn{
            display: none;
        }
    }

    @media screen and (max-width: 800px){
        .navbar{
            padding: 1em 1.5em;
        }
        .menu-container{
            background: #fff;
            position: absolute;
            top: 5em;
            left: 0;
            width: 100%;
            overflow-y: hidden;
            transition: 0.3s ease-in-out;
        }
        /* widht */
        .mega-menu::-webkit-scrollbar{
            width: 8px;
        }
        /* Track */
        .mega-menu::-webkit-scrollbar-track{
            background: #f1f1f1;
        }

        /* Handle */
        .mega-menu::-webkit-scrollbar-thumb{
            background: #888;
        }
        /* Handle on hover*/
        .mega-menu::-webkit-scrollbar-thumb:hover{
            background: #555;
        }
        .mega-menu{
            padding: 0 1em 1em 1 em; 
            height: 100%;
            overflow-y: scroll;
        }
        .mega-menu :global(li){
            font-weight: bold;
            font-size: 1.1em;
        }

        /*Hide menu*/
        .menu-container{
            height: 0;
        }

        .mega-menu-show{
            height: 50vh;
        }
    }
</style>