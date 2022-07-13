<script>
    export let appName;
    export let imageName;
    export let textPrimaryClass;
    export let textPrimaryDarkClass;
    export let textSecondaryClass;
    export let contactEmail;
    export let userDataPolicies;
</script>

<main>
    <div class="container md:p-24 p-6">
        <div class="flex justify-center">
            <img class="w-72 h-72" alt="Privacy Policy" src={imageName} />
        </div>
        <h1 class="text-3xl mb-8">
            <span class="font-semibold {textPrimaryClass}">{appName}</span> Privacy
            Policy
        </h1>

        <p class="mb-4">
            At <span class={textPrimaryClass}>{appName}</span>, one of our main
            priorities is the privacy of our users. This Privacy Policy document
            contains types of information that is collected and recorded by
            <span class={textPrimaryClass}>{appName}</span> and how we use it.
        </p>

        <p class="mb-4">
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to <a
                class={textSecondaryClass}
                href="mailto:{contactEmail}">contact us</a
            >.
        </p>

        <h2 class="text-xl mt-4 mb-4 {textPrimaryDarkClass}">
            Privacy Policies
        </h2>

        <p class="mb-2">
            <span class={textPrimaryClass}>{appName}</span> uses Google Analytics
            and Crashlytics to make sure that users have the best possible experience
            out of our application. They automatically receive your IP address and
            basic information about your device (device model, Android version, etc.).
            These technologies are used to captures any bug/crash occurring in the
            application.
        </p>

        <p class="mb-2">
            Our Privacy Policy was created with the help of the
            <a
                class={textSecondaryClass}
                href="https://www.privacypolicyonline.com/privacy-policy-generator/"
                >Privacy Policy Generator</a
            >.
        </p>

        <h2 class="text-xl mt-4 mb-4 {textPrimaryDarkClass}">
            User Data Policies
        </h2>

        {@html userDataPolicies}

        <h2 class="text-xl mt-4 mb-4 {textPrimaryDarkClass}">
            Third Party Privacy Policies
        </h2>

        <p class="mb-2">
            <span class={textPrimaryClass}>{appName}</span>'s does not use any
            third-party advertising services besides Google Analytics and
            Crashlytics for application's quality maintenance.
        </p>

        <h2 class="text-xl mt-4 mb-4 {textPrimaryDarkClass}">
            Children's Information
        </h2>

        <p class="mb-2">
            <span class={textPrimaryClass}>{appName}</span> does not knowingly collect
            any Personal Identifiable Information from children under the age of
            18. If you think that your child provided this kind of information on
            our application, we strongly encourage you to contact us immediately
            and we will do our best efforts to promptly remove such information from
            our records.
        </p>

        <h2 class="text-xl mt-4 mb-4 {textPrimaryDarkClass}">
            Online Privacy Policy Only
        </h2>

        <p class="mb-2">
            This Privacy Policy applies only to our online activities and is
            valid for uses to our application with regards to the information
            that they shared and/or collect in <span class={textPrimaryClass}
                >{appName}</span
            >. This policy is not applicable to any information collected
            offline or via channels other than this application.
        </p>

        <h2 class="text-xl mt-4 mb-4 {textPrimaryDarkClass}">Consent</h2>

        <p class="mb-2">
            By using our application, you hereby consent to our Privacy Policy
            and agree to its Terms and Conditions.
        </p>
    </div>
</main>
