<script>
  export let name;
  export let description;
  // export let image;
  export let link;
</script>

<a href={link} target="_blank" rel="noopener noreferrer" class="group">
  <div class="relative bg-white bg-opacity-5 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 backdrop-blur-lg border border-white border-opacity-10">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
    <div class="relative p-6">
      <h3 class="text-2xl font-semibold text-blue-300 text-center mb-4 group-hover:text-indigo-300 transition-colors duration-300">
        {name}
      </h3>
    </div>
    <!-- <div class="relative bg-black bg-opacity-40 p-4">
      <img class="rounded-lg object-cover w-full h-48 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3" src={image} alt={name} />
    </div> -->
    <div class="relative p-6">
      <p class="text-gray-300 mb-4 text-center group-hover:text-white transition-colors duration-300">
        {description}
      </p>
      <div class="flex justify-end">
        <!-- <span class="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg group-hover:bg-indigo-500 transition-all duration-300">
          View Project
        </span> -->
      </div>
    </div>
  </div>
</a>