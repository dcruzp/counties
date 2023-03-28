<script>
    export let contact_information ; 
</script>

<div class="form-container">
    <form>
        <div class="row-form-container">
            <label for="fname">First Name: </label>
            <input type="text" id="fname" name="fname" value="{contact_information.firstName}"/>
        </div>
        <div class="row-form-container">
            <label for="mname">Middle Name: </label>
            <input type="text" id="mname" name="mname" value="{contact_information.middleName}"/><br />
        </div>
        <div class="row-form-container">
            <label for="lname">Last Name: </label>
            <input type="text" id="lname" name="lname" value="{contact_information.lastName}"/><br />
        </div>
        <div class="row-form-container">
            <label for="dob">DOB:</label>
            <input type="text" id="dob" name="dob" value="{contact_information.dbo??""}"/>
        </div>
    </form>
</div>

<style>
     .form-container {
        margin: 20px;
        height: 600px;
    }
    .row-form-container {
        margin: 15px;
        font-size: 15px;
    }
    input[type=text]{
        border: none;
        float: right;
        margin-left: 10px;
    }
</style>