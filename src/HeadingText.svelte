<script>
  export let title;
  export let isPrimary = false;
</script>

<div class="flex justify-center items-center mb-8">
  <div
    class="w-4 h-4 bg-pink-500 transform rotate-45 transition-all duration-300 hover:bg-green-400"
  />
  <h2
    class={`text-2xl font-semibold text-center mx-4 ${
      isPrimary ? "text-white" : "text-gray-200"
    }`}
  >
    {@html title}
  </h2>
  <div
    class="w-4 h-4 bg-pink-500 transform rotate-45 transition-all duration-300 hover:bg-green-400"
  />
</div>