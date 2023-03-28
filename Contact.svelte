<script>
    import GeneralComponent from "./components/ContactsComponents/GeneralComponent.svelte";
    import EmailComponent from "./components/ContactsComponents/EmailComponent.svelte";
    import PhoneComponent from "./components/ContactsComponents/PhoneComponent.svelte";
    import AddressComponent from "./components/ContactsComponents/AddressComponent.svelte";
    import Navbar from "./Navbar.svelte";
    import PhotoComponent from "./components/ContactsComponents/PhotoComponent.svelte";

    let contact_information = {
        id: "c6977320-0e33-48ce-995e-f3ca9be044ba",
        createdDate: "2023-01-10T11:03:01.6444147",
        createdBy: "system",
        entityMetadataId: null,
        updatedDate: "2023-01-10T11:03:01.64",
        addresses: [
            {
                ContactAddressId: "5B37A5C2-5450-4672-9B73-0009A002B65E",
                ContactId: "c6977320-0e33-48ce-995e-f3ca9be044ba",
                Address: "FL",
                ZipCode: "33175",
                CountyId: null,
                CityId: "13D4A25C-72AB-4070-8ED1-1E1E8A7149F1",
                StateId: "17395FCC-2D09-469F-88D8-6C6AD4C7B8D4",
                CountryId: "4D24A898-79BA-4660-BFBC-D4FC69AB654D",
                CreatedDate: "2022-07-26 08:08:31.303",
                CreatedBy: "system",
                StartDate: "0001-01-01 00:00:00.000",
                EndDate: null
            },
        ],
        phones: [
            {
                id: "c28d3513-5318-471e-b3e8-6fe654c31728",
                contactId: "c6977320-0e33-48ce-995e-f3ca9be044ba",
                phone: "305-496-3554",
                createdDate: "2023-01-10T11:03:01.6445061",
                createdBy: "system",
                startDate: "0001-01-01T00:00:00",
                endDate: null,
                purposes: [],
            },
        ],
        emails: [
            {
                id: "0ac4663a-f693-4b27-ad91-183b6e18fc4e",
                contactId: "c6977320-0e33-48ce-995e-f3ca9be044ba",
                email: "rdprieto@dls-ins.com",
                createdDate: "2023-01-10T11:03:01.6444734",
                createdBy: "system",
                startDate: "0001-01-01T00:00:00",
                endDate: null,
                purposes: [],
            },
        ],
        firstName: "Ruben",
        middleName: "Dario",
        lastName: "Prieto Medina",
        name: "Ruben Dario Prieto Medina",
    };

    let selected = "General";
    let elements = ["General", "Emails", "Addresses", "Phones"];
</script>

<h2>All information about Contacts</h2>

<div class="nav-content">
    <Navbar bind:selected {elements} />
    <div class="container">
        {#if selected == "General"}
            <GeneralComponent bind:contact_information={contact_information} />
        {:else if selected == "Emails"}
            <EmailComponent  bind:contact_information={contact_information}/>
        {:else if selected == "Phones"}
            <PhoneComponent bind:contact_information={contact_information}/>
        {:else if selected == "Addresses"}
            <AddressComponent bind:contact_information={contact_information}/>
        {/if}
        <PhotoComponent />
    </div>
</div>

<style>
    .nav-content {
        width: 60%;
        margin: auto;
    }
    .container {
        justify-content: space-between;
        display: flex;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-right: 2px solid #f2f7f8;
        border-left: 2px solid #f2f7f8;
        border-bottom: 2px solid #f2f7f8;
    }
</style>
