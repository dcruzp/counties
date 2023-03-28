<script>
    import { Route , Router } from "./svelte-routing-master/src";
    import Countries from "./countries.svelte";
    import Country from "./country.svelte";
    import Home from "./home.svelte"; 
    import Statistics from "./statistics.svelte";
    import Contact from "./Contact.svelte";
</script>


<Router>
    <div>

      <Route path="home/" component="{Home}"/>
      <Route path="countries/" component="{Countries}" />
      <Route path="countries/:id" component="{Country}"/>
      <Route path="statistics/" component="{Statistics}"/>
      <Route path="contacts/" component={Contact}/>
    </div>
</Router>