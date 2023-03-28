<script>
    export let contact_information;
    let current_address=0; 
</script>


<div class="form-container">
    <div class="form-container">
        <form>
            <div class="row-form-container">
                <label for="address">Address</label>
                <input type="text" id="address" name="address" value="{contact_information.addresses[current_address].Address??""}"/>
            </div>

            <div class="row-form-container">
                <label for="zipCode">zipCode</label>
                <input type="text" id="zipCode" name="zipCode" value="{contact_information.addresses[current_address].zipCode??""}"/>
            </div>

            <div class="row-form-container">
                <label for="County">County</label>
                <input type="text" id="County" name="County" value="{contact_information.addresses[current_address].CountyId??""}"/>
            </div>

            <div class="row-form-container">
                <label for="City">City</label>
                <input type="text" id="City" name="City" value="{contact_information.addresses[current_address].CityId??""}"/>
            </div>
            <div class="row-form-container">
                <label for="State">State</label>
                <input type="text" id="State" name="State" value="{contact_information.addresses[current_address].StateId??""}"/>
            </div>
            <div class="row-form-container">
                <label for="Country">Country</label>
                <input type="text" id="Country" name="Country" value="{contact_information.addresses[current_address].CountryId??""}"/>
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
    input[type=text]{
        border: none;
        float: right;
        margin-left: 10px;
    }
</style>
