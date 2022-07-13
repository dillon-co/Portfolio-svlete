<script>
    import PrivacyPolicyPage from "./PrivacyPolicyPage.svelte";

    let appName = "Kocek";
    let imageName = "/images/privacy-policy-green.svg";
    let textPrimaryClass = "text-green-600";
    let textPrimaryDarkClass = "text-green-700";
    let textSecondaryClass = "text-pink-600";
    let contactEmail = "shopsulut@gmail.com";
    let userDataPolicies = `
        <p class="mb-2">
            <span class="${textPrimaryClass}">${appName}</span> collects the users' voluntary
            deposit withdraws. This data is collected to support the functionality
            of the app. If this data is not collected, the users won't be able to
            see their withdraws.
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
