<script>
    import { Route , Router } from "./svelte-routing-master/src";
    import Countries from "./countries.svelte";
    import Country from "./country.svelte";
    import Home from "./home.svelte"
</script>


<Router>
    <div>
      <Route path="home/" component="{Home}"/>
      <Route path="countries/" component="{Countries}" />
      <Route path="countries/:id" component="{Country}"/>
    </div>
</Router>