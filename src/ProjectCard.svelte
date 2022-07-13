<script>
  export let name;
  export let description;
  export let src;
  export let href;
</script>

<div
  class="rounded-xl flex flex-col hover:shadow-lg shadow-none border-opacity-0 hover:border-opacity-100 border-purple-500 border-2"
>
<div class="p-6 ">
  <p class="text-xl text-center">
    {@html name}
  </p>
</div>
  <div class="flex justify-center items-center">
    <img class=" rounded-md" {src} alt="Header" />
  </div>
  <div class="p-6">
    <p class="text-sm">
      {@html description}
    </p>
    {#if href != null}
      <div class="flex flex-row-reverse">
        <div class="inline-block mt-2">
          <a
            {href}
            target="_blank"
            class="flex rounded-lg items-center p-2 border-2 border-purple-200 hover:border-purple-400 hover:no-underline transition-all"
          >
            <img src="/googleplay.svg" alt="PlayStore icon" class="w-4 h-4" />
            <span class="ml-2 text-sm mr-2 text-gray-800">Unduh</span>
          </a>
        </div>
      </div>
    {/if}
  </div>
</div>
<style>
  img {
    height: 300px;
    width: 300px;
  }
</style>
