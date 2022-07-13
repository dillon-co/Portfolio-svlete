<script>
    import PrivacyPolicyPage from "./PrivacyPolicyPage.svelte";

    let appName = "Bitung Shop";
    let imageName = "/images/privacy-policy-yellow.svg";
    let textPrimaryClass = "text-yellow-500";
    let textPrimaryDarkClass = "text-yellow-700";
    let textSecondaryClass = "text-blue-600";
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
