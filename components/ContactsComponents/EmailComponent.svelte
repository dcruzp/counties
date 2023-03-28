<script>
    export let contact_information;
    let currentEmail = 0; 
</script>

<div class="form-container">
    <div class="form-container">
        <form>
            <div class="row-form-container">
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" value="{contact_information.emails[currentEmail].email??""}"/>
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