<script>
  export let title;
  export let isPrimary = false;
</script>

<div class="flex justify-center items-center mb-2">
  <div
    class="w-3 h-3 bg-purple-300 transform rotate-45 hover:-rotate-45 hover:bg-purple-500 transition-all"
  />
  <h2
    class={`text-xl font-extralight text-center ml-2 mr-2 ${
      isPrimary ? "text-white" : ""
    }`}
  >
    {@html title}
  </h2>
  <div
    class="w-3 h-3 bg-purple-300 transform rotate-45 hover:-rotate-45 hover:bg-purple-500 transition-all"
  />
</div>
