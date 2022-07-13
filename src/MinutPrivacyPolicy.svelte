<script>
    import PrivacyPolicyPage from "./PrivacyPolicyPage.svelte";

    let appName = "Minut Shop";
    let imageName = "/images/privacy-policy-purple.svg";
    let textPrimaryClass = "text-purple-600";
    let textPrimaryDarkClass = "text-purple-700";
    let textSecondaryClass = "text-indigo-600";
    let contactEmail = "shopsulut@gmail.com";
    let userDataPolicies = `
        <p class="mb-2">
            <span class="${textPrimaryClass}">${appName}</span> collects the users' basic information 
            (full name, address, and phone number). This data is collected to support the functionality
            of the app. If this data is not collected, the users won't be able to order the products
            in this application.
        </p>
    `;
</script>

<main>
    <PrivacyPolicyPage
        {appName}
        {imageName}
        {textPrimaryClass}
        {textPrimaryDarkClass}
        {textSecondaryClass}
        {contactEmail}
        {userDataPolicies}
    />
</main>
