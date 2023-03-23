<script>
    import data from '../population';
    let columns_names = data[0].header;
    
    $: pageNumber = 1; // always greather or equal 
    let pageSize = 10;  // always 10

    $: rows_data = update_rows_data(pageNumber,pageSize);

    function update_rows_data(pageNumber , pageSize){
        var first_element = (pageNumber -1 ) * pageSize;
        var last_element = first_element + pageSize;
        return data[0].rows.slice(first_element,last_element);
    }

    function next(){
        let length = data[0].rows.length;
        if((pageNumber) * pageSize < length)
        {
            pageNumber = pageNumber += 1;
            update_rows_data(); 
        }
    }

    function previous (){
        if(pageNumber > 1 ) {
            pageNumber -=1; 
            update_rows_data();
        }
    }

</script>

<div class="container">
    <table>
        <tr>
            {#each columns_names as column}
                <th>{column}</th>
            {/each}
        </tr>
        {#each rows_data as  row}
            <tr>
                {#each row as column}
                    <td>{column}</td>
                {/each}
            </tr>
        {/each}
    </table>
    <div class="bottom-border">
        <div class="bottom-menu-element">
            <p>Page Number:  {pageNumber} </p>
        </div>
        <div class="bottom-menu-element">
            <button on:click={previous}> Previous </button>
        </div>
        <div class="bottom-menu-element">
            <button on:click={next}> Next </button>
        </div>
    </div>
</div>

<style>
    table,
    th,
    td {
        border-collapse: collapse;
        font-size: 14px;
    }

    th {
        text-align: left;
    }

    th,
    td {
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
    }

    tr:nth-child(even) {
        background-color: #d6eeee;
    }
    tr {
        border-bottom: 1px solid #ddd;
        overflow-y: hidden;
        height: 20px;
    }
    .container {
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        width: 90%;
        border: 2px solid #ddd;
        display: block;
    }
    .bottom-border {
        height: 30px;
        float: right;
        display: flex;
        margin: auto;
    }
    button {
        transition-duration: 0.4s;
        height: 100%;
        width: 50px;
        background-color: transparent;
        border: transparent;
    }
    button:hover {
        font-size:15px;
    }

    .bottom-menu-element{
        margin: auto;
    }
    p{
        font-size: 15;
    }
</style>
