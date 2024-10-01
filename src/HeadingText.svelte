<script>
  export let title;
  export let isPrimary = false;
</script>

<div class="flex justify-center items-center mb-12">
  <div
    class="w-8 h-1 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full transform transition-all duration-300 group-hover:scale-x-150"
  ></div>
  <h2
    class={`text-3xl font-bold text-center mx-6 ${
      isPrimary ? "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" : "text-white"
    }`}
  >
    {@html title}
  </h2>
  <div
    class="w-8 h-1 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-full transform transition-all duration-300 group-hover:scale-x-150"
  ></div>
</div>