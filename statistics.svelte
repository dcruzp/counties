<script>
    import Table from "./components/Table.svelte";
</script>

<div>
    <div class="header-table">
        <h2>List of countries and dependencies by population</h2>
    </div>
    <Table />
</div>

<style>
    .header-table {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        text-align: center;
    }
    h2{
        display: flex;
        margin: auto;
        text-align: center;
    }
</style>
