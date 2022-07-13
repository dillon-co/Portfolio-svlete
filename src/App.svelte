<script>
  import router from "page";
  import BitungPrivacyPolicy from "./BitungPrivacyPolicy.svelte";
  import Home from "./Home.svelte";
  import KocekPrivacyPolicy from "./KocekPrivacyPolicy.svelte";
  import MinutPrivacyPolicy from "./MinutPrivacyPolicy.svelte";
  import NotFound from "./NotFound.svelte";

  let page;

  router("/", () => (page = Home));
  router("/kocek/privacy-policy", () => (page = KocekPrivacyPolicy));
  router("/bitung-shop/privacy-policy", () => (page = BitungPrivacyPolicy));
  router("/minut-shop/privacy-policy", () => (page = MinutPrivacyPolicy));
  router("*", () => (page = NotFound));

  router.start();
</script>

<svelte:component this={page} />
