<script>
  export let selected ;
  const elements = ['Asia','Africa','North America','South America','Europe','Oceania']
</script>



<ul>
    {#each elements as element}
    <li on:click={()=>selected = element} on:keydown={()=>true}>{element}</li>
    {/each}
</ul> 


<style>
  ul {
  list-style-type: none;
  margin: 0;
  padding: 2px;
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 10px , 2px, 2px,2px;
}

li {
  float:left;
  padding-left: 20px;
  cursor: pointer;
}

li{
  display: block;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: large;
  border-radius: 10px;
}

/* Change the link color to #111 (black) on hover */
li:hover {
  background-color: #f2f7f8;
}
</style>