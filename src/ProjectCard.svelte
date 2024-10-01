<script>
  export let name;
  export let description;
  export let src;
  export let href;
</script>

<div class="bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 hover:transform hover:scale-105">
  <div class="p-6">
    <h3 class="text-2xl font-semibold text-green-400 text-center mb-4">
      {@html name}
    </h3>
  </div>
  <div class="flex justify-center items-center bg-gray-900 p-4">
    <img class="rounded-md object-cover w-full h-64" {src} alt={name} />
  </div>
  <div class="p-6">
    <p class="text-gray-300 mb-4">
      {@html description}
    </p>
    {#if href != null}
      <div class="flex justify-end">
        <a
          {href}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          <img src="/googleplay.svg" alt="PlayStore icon" class="w-5 h-5 mr-2" />
          <span class="text-sm font-medium">Download</span>
        </a>
      </div>
    {/if}
  </div>
</div>