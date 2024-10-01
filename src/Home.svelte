<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import HeadingText from "./HeadingText.svelte";
  import ProjectCard from "./ProjectCard.svelte";
  import ExpertiseCard from "./ExpertiseCard.svelte";


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

  let expertiseAreas = [
    {
      name: "Web and Mobile",
      src: "/full-stack-green.png",
      description: "Full-stack development for web and mobile platforms, creating seamless user experiences across devices.",
    },
    {
      name: "Blockchain",
      src: "/blockchain-pink-white.png",
      description: "Implementing secure and efficient blockchain solutions for various industries and applications.",
    },
    {
      name: "Data Science, Machine & Deep Learning",
      src: "/green-brain.png",
      description: "Leveraging advanced algorithms and neural networks to extract insights and create intelligent systems.",
    },
  ];

  // Add a new 'projects' array for Notable Projects
  let projects = [
    {
      name: "Founder - Pepur",
      description: "A.I. for Events that works through sms messaging",
      image: "/ecommerce-project.jpg",
      link: "https://www.pepur.xyz"
    },
    {
      name: "Launch Team - Breeze",
      description: "A new an innovative airline. Seriously nice!",
      image: "/blockchain-voting.jpg",
      link: "https://www.flybreeze.com"
    },
    {
      name: "Founding Engineer - Atomic",
      description: "AWS for bitcoin mining.",
      image: "/health-assistant.jpg",
      link: "https://www.atomic.win"
    }
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

  let scrollY;
  let innerHeight;
  let innerWidth;

  $: parallaxY = -scrollY * 0.5;

  onMount(() => {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    const stars = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createStar() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5
      };
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });
      requestAnimationFrame(drawStars);
    }

    resizeCanvas();
    for (let i = 0; i < 150; i++) {
      stars.push(createStar());
    }
    drawStars();

    window.addEventListener('resize', resizeCanvas);
  });
</script>

<svelte:window bind:scrollY bind:innerHeight bind:innerWidth/>

<canvas id="starfield" class="fixed top-0 left-0 w-full h-full opacity-50"></canvas>

<main class="relative text-white min-h-screen overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black opacity-90"></div>
  
  <div class="relative z-10 container mx-auto px-4 py-16">
    <header class="text-center mb-16" in:fade="{{ duration: 1000, delay: 300 }}">
      <div class="mb-8relative">
        <div class="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 rounded-full blur-xl opacity-70 animate-pulse"></div>
        <img class="relative w-48 h-48 rounded-full mx-auto border-4 border-orange-300 shadow-2xl" alt="KomplitAp" src="profile-pic-cropped.jpg" />
      </div>
      <h1 class="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
        Dillon Cortez
      </h1>
      <HeadingText title="Builing Tomorrow With Tech Of Today" />
      <div class="mt-4">
      </div>
    </header>

    <div class="flex justify-center space-x-6 mb-16">
      {#each links as { src, href, name }}
        <a {href} class="group" target="_blank" rel="noopener noreferrer">
          <div class="bg-white bg-opacity-10 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-white hover:bg-opacity-20 backdrop-blur-lg">
            <img class="w-8 h-8" alt="{name} logo" {src} />
          </div>
          <span class="sr-only">{name}</span>
        </a>
      {/each}
    </div>

    <section class="mb-24 relative" in:fly="{{ y: 50, duration: 1000, delay: 600 }}">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-800 to-indigo-900 rounded-2xl transform rotate-1 scale-105 opacity-30 blur-xl"></div>
      <div class="relative bg-white bg-opacity-5 rounded-2xl p-8 backdrop-blur-lg border border-white border-opacity-10">
        <div class="grid md:grid-cols-2 gap-8">
          {#each values as { src, alt, title, description }}
            <div class="flex flex-col items-center text-center group">
              <img
                {src}
                {alt}
                class="w-24 h-24 mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
              />
              <h3 class="text-2xl font-semibold mb-2 text-blue-300 group-hover:text-indigo-300 transition-colors duration-300">
                {@html title}
              </h3>
              <p class="text-gray-300 group-hover:text-white transition-colors duration-300">
                {@html description}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </section>

    <section class="mb-24" in:fly="{{ y: 50, duration: 1000, delay: 900 }}">
      <HeadingText title="Areas of Expertise" />
      <div class="grid md:grid-cols-3 gap-8 mt-8">
        {#each expertiseAreas as area}
          <ExpertiseCard {...area} />
        {/each}
      </div>
    </section>
    
    <section class="mb-24" in:fly="{{ y: 50, duration: 1000, delay: 1200 }}">
      <HeadingText title="Notable Projects" />
      <div class="grid md:grid-cols-3 gap-8 mt-8">
        {#each projects as project}
          <ProjectCard {...project} />
        {/each}
      </div>
    </section>

    <section class="mb-24 relative" in:fly="{{ y: 50, duration: 1000, delay: 1200 }}">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl transform -rotate-1 scale-105 opacity-30 blur-xl"></div>
      <div class="relative bg-white bg-opacity-5 rounded-2xl p-8 backdrop-blur-lg border border-white border-opacity-10 text-center">
        <h2 class="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
          9+ Years of Excellence
        </h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          With a proven track record of transforming complex ideas into elegant solutions, I've been at the forefront of software innovation for over 9 years. From concept to scalable implementation, I'm your partner in digital transformation.
        </p>
      </div>
    </section>

    <section class="mb-24" in:fly="{{ y: 50, duration: 1000, delay: 1500 }}">
      <HeadingText title="Innovation Stack" />
      <div class="grid grid-cols-3 md:grid-cols-6 gap-6 mt-8">
        {#each tools as { name, src }}
          <div class="flex flex-col items-center group">
            <div class="bg-white bg-opacity-5 p-4 rounded-xl mb-2 transition-all duration-300 transform group-hover:scale-110 group-hover:bg-white group-hover:bg-opacity-10 backdrop-blur-lg">
              <img class="w-12 h-12 transition-all duration-300 group-hover:rotate-12" alt={name} {src} />
            </div>
            <span class="text-sm text-gray-400 group-hover:text-blue-300 transition-colors duration-300">{name}</span>
          </div>
        {/each}
      </div>
    </section>

    <footer class="text-center text-gray-400 text-sm">
      <p>
        Powered by cutting-edge icons from <a href="https://streamlineicons.com" target="_blank" class="text-blue-300 hover:text-indigo-300 transition-colors duration-300">Streamline</a>
        and <a href="https://devicon.dev/" target="_blank" class="text-blue-300 hover:text-indigo-300 transition-colors duration-300">Devicon</a>
      </p>
    </footer>
  </div>

  <div 
    class="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent"
    style="transform: translateY({parallaxY}px);"
  ></div>
</main>

<style>
  :global(body) {
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .animate-pulse {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
</style>