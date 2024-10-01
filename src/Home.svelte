<script>
  import HeadingText from "./HeadingText.svelte";
  import ProjectCard from "./ProjectCard.svelte";

  let values = [
    {
      src: "/dating-smartphone-man.svg",
      alt: "Smarphone man icon",
      title: 'Full Stack Development',
      description: `Most developers are only able to do frontend or backend. I can do both, saving you the trouble of finding multiple devs for your project`,
    },
    {
      src: "/laptop-smiley-1.svg",
      alt: "Laptop smiley icon",
      title: 'All types of software',
      description: `I've worked on many different projects. From full stack web and mobile applications to deep learning and blockchain. If you need something done, I'm your guy. And if not, I can point you in the right direction.`,
    },
  ];

  let projects = [
    {
      name: "Web and Mobile",
      src: "/full-stack-green.png",
      description: ``,
    },
    {
      name: "Blockchain",
      src: "/blockchain-pink-white.png",
      description: ``,
    },
    {
      name: "Data Science, Machine & Deep Learning",
      src: "/green-brain.png",
      description: ``,
    },
  ];
  let otherProjectsCount = 4;

  let tools = [
    {
      name: "Ruby",
      src: "/ruby.svg",
    },
    {
      name: "Rails",
      src: "/rails.svg",
    },
    {
      name: "python",
      src: "/python.svg",
    },
    {
      name: "ionic",
      src: "/ionic.svg",
    },
    {

      name: "Angular",
      src: "/angular.svg",
    },
    {
      name: "Firebase",
      src: "/icon-firebase.svg",
    },
    {
      name: "Express.JS",
      src: "/icon-express.svg",
    },
    {
      name: "PostgreSQL",
      src: "/postgresql.svg",
    },
    {
      name: "MySQL",
      src: "/icon-mysql.svg",
    },
    {
      name: "Pytorch",
      src: "/pytorch.svg",
    },
    {
      name: "Docker",
      src: "/icon-docker.svg",
    },
    {
      name: "Digital Ocean",
      src: "/icon-digitalocean.svg",
    },
    {
      name: "Rust",
      src: "/rust.svg",
    },
    {
      name: "Solidity",
      src: "/solidity.svg",
    },
    {
      name: "Heroku",
      src: "/heroku.svg",
    },
    {
      name: "Redis",
      src: "/redis.svg",
    },
    {
      name: "Svelte",
      src: "/svelte.svg",
    },
    {
      name: "Typescript",
      src: "/typescript.svg",
    }

  ];
  let tools1 = [...tools].splice(0, 6);
  let tools2 = [...tools].splice(6, 6);
  let tools3 = [...tools].splice(12, 8);

  let links = [
    {
      src: "/linkedin.svg",
      href: "https://linkedin.com/in/dilloncortez",
      name: "Linkedin"
    },
    {
      src: "/github.svg",
      href: "https://github.com/dillon-co",
      name: "Github"
    },
  ]
</script>
<main class="bg-gray-900 text-white min-h-screen">
  <div class="container mx-auto px-4 py-16">
    <header class="text-center mb-16">
      <div class="mb-8">
        <img class="w-48 h-48 rounded-full mx-auto border-4 border-green-400 shadow-lg" alt="KomplitApp" src="profile-pic-cropped.jpg" />
      </div>
      <h1 class="text-5xl font-bold mb-4 text-pink-500">
        Dillon Cortez
      </h1>
      <HeadingText title="Software Engineer" />
      <div class="mt-4">
        <p class="text-gray-300">dilloncortez@gmail.com</p>
        <!-- <h5 class="text-gray-300"></h5> -->
      </div>
    </header>

    <div class="flex justify-center space-x-6 mb-16">
      {#each links as { src, href, name }}
        <a {href} class="group" target="_blank" rel="noopener noreferrer">
          <div class="bg-gray-800 p-3 rounded-full transition-all duration-300 transform group-hover:scale-110 group-hover:bg-indigo-600">
            <img class="w-8 h-8" alt="{name} logo" {src} />
          </div>
          <span class="sr-only">{name}</span>
        </a>
      {/each}
    </div>

    <section class="bg-indigo-900 rounded-lg p-8 mb-16">
      <div class="grid md:grid-cols-2 gap-8">
        {#each values as { src, alt, title, description }}
          <div class="flex flex-col items-center text-center">
            <img
              {src}
              {alt}
              class="w-24 h-24 mb-4 transform transition-transform hover:rotate-12"
            />
            <h3 class="text-xl font-semibold mb-2 text-green-400">
              {@html title}
            </h3>
            <p class="text-gray-300">
              {@html description}
            </p>
          </div>
        {/each}
      </div>
    </section>

    <section class="mb-16">
      <HeadingText title="Things I do" />
      <div class="grid md:grid-cols-3 gap-8 mt-8">
        {#each projects as { name, src, description, href }}
          <ProjectCard {name} {src} {description} {href} />
        {/each}
      </div>
    </section>

    <section class="bg-indigo-900 rounded-lg p-8 mb-16 text-center">
      <h2 class="text-4xl font-bold mb-4 text-green-400">
        8+ Years Experience
      </h2>
      <p class="text-gray-300 max-w-2xl mx-auto">
        I've been coding for a while. I've helped a lot of projects get off the ground. If you need to take a project to completion, and make sure it can scale, I can help.
      </p>
    </section>

    <section class="mb-16">
      <HeadingText title="Tools I Use" />
      <div class="grid grid-cols-3 md:grid-cols-6 gap-6 mt-8">
        {#each tools as { name, src }}
          <div class="flex flex-col items-center group">
            <div class="bg-gray-800 p-4 rounded-full mb-2 transition-all duration-300 transform group-hover:scale-110 group-hover:bg-green-400">
              <img class="w-12 h-12" alt={name} {src} />
            </div>
            <span class="text-sm text-gray-400 group-hover:text-white">{name}</span>
          </div>
        {/each}
      </div>
    </section>

    <footer class="text-center text-gray-500 text-sm">
      <p>
        Wonderful icons by <a href="https://streamlineicons.com" target="_blank" class="text-green-400 hover:underline">Streamline</a>
        and <a href="https://devicon.dev/" target="_blank" class="text-green-400 hover:underline">Devicon</a>
      </p>
    </footer>
  </div>
</main>

      <div />
      <div />
      {#each tools3 as { name, src }}
        <div class="flex flex-col items-center has-tooltip icon">
          <img class="w-16 h-16" alt={`${name}`} {src} />
          <span
            class="tooltip rounded shadow-lg p-1  purp text-white text-xs -mt-8"
            >{name}</span
          >
        </div>
      {/each}
    </div>

    <div class="pr-12">
      <p class="text-xs text-right">
        Wonderful icons by <a href="https://streamlineicons.com" target="_blank"
          >Streamline</a
        >
        and <a href="https://devicon.dev/" target="_blank">Devicon</a>
      </p>
    </div>
  </div>
</main>

<style>
  .tooltip {
    visibility: hidden;
    position: absolute;
  }
  .has-tooltip:hover .tooltip {
    visibility: visible;
    z-index: 100;
  }

  ::-moz-selection {
    /* Code for Firefox */
    /* purple-800 */
    color: #5c21b6;
    /* purple-200 */
    background: #ddd6fe;
  }

  ::selection {
    color: #5c21b6;
    background: #ddd6fe;
  }

  .purp{
    background-color: #3A0CA3;
  }

  .red-text{
    color: #F72585;
  }

  .green-text{
    color: #15F493;
  }

  main {
    background-color: #1f1f1f;
    color: white;
  }
  .icon{
    border: 2px solid #15F493;
    border-radius: 100px;
    margin: auto;
    padding: auto;
  }
  .profile {
    border: 6px solid #15F493;
  }
</style>
