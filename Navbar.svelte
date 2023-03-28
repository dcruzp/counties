<script>
  export let selected;
  export let elements;
</script>

<ul>
    {#each elements as element}
    <li on:click={()=>selected = element} on:keydown={()=>true}  style=
      "border-left: {selected === element ? "3px solid #f2f7f5" : "none"}; 
       border-top: {selected === element ? "3px solid #f2f7f5" : "none"};
       border-right: {selected === element ? "3px solid #f2f7f5" : "none"};
       border-bottom: {selected === element ? "none" : "3px solid #f2f7f5"}
      ">{element}</li>
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

li{
  float:left;
  padding-left: 20px;
  cursor: pointer;
  display: block;
  color: rgb(0, 0, 0);
  text-align: left;
  padding: 14px 16px;
  text-decoration: none;
  font-size:large;
  border-radius: 15px 15px 0 0 ;
  border-bottom: 1px solid blue;  
}

/* Change the link color to #111 (black) on hover */
li:hover {
  background-color: #f2f7f8;
}
</style>