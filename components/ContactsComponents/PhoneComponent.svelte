<script>
    export let contact_information;
    let current_phone = 0; 
</script>

<div class="form-container">
    <div class="form-container">
        <form>
            <div class="row-form-container">
                <label for="Phone">Phone</label>
                <input type="text" id="Phone" name="Phone" value="{contact_information.phones[current_phone].phone??""}" />
            </div>
        </form>
    </div>
</div>

<style>
    .form-container {
        margin: 20px;
        height: 600px;
    }
    .row-form-container {
        margin: 10px;
    }
    input {
        border: none;
        float: right;
        margin-left: 10px;
    }
</style>
