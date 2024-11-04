<script lang="ts">
   
  </script>
  
  <main class="flex flex-col flex-1 p-4 z-1">
      <div class="absolute min-h-screen top-0 left-0 w-full z-[-1] opacity-70">
          <div id="particles-js" class="absolute inset-0"></div>
          <div class="waveWrapper waveAnimation">
              <div class="waveWrapperInner bgTop">
                  <div class="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>
              </div>
              <div class="waveWrapperInner bgMiddle">
                  <div class="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div>
              </div>
              <div class="waveWrapperInner bgBottom">
                  <div class="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"></div>
              </div>
          </div>
      </div>
  
      <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-x-0 py-sm:py-0">
          <div class="flex flex-col lg:justify-center text-center lg:text-left lg:pl-10 gap-8 md:gap-10 lg:gap-8">
              <h2 class="font-semibold text-4xl text-white sm:text-5xl md:text-6xl">
                  Hi! I'm <span class="poppins text-amber-600">Jenishe</span> Salem
                  <br />Junior Full Stack
                  <span class="poppins text-amber-600">Developer</span>
              </h2>
              <p class="text-base text-white sm:text-lg md:text-xl">
                  Besides web design, I also <span class="text-amber-600">create</span> video presentations with voiceovers, video editing, poster design, and various other editing-related projects.
              </p>
              <a href="/portfolio" class="block">
                <button class="mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-amber-600">
                  <div class="absolute top-0 right-full w-full h-full bg-amber-600 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                  <h4 class="relative z-9">Meet me better! &rarr;</h4>
                </button>
              </a>
          </div>
          <div class="relative place-items-center">
              <div class="relative max-h-[70vh]">
                  <img src="assets/images/jenDP.png" alt="Jenishe Salem" class="object-cover z-[1] max-h-[70vh]" />
                  <img src="assets/images/butterfly.png" alt="Jenishe Salem" class="object-cover z-[2] max-h-[70vh] absolute top-0 left-0 animate-wiggle" />
              </div>            
          </div>
      </section>
  </main>
  