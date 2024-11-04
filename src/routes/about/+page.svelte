<script>
    import { Timeline, TimelineItem } from 'flowbite-svelte';
    import { CalendarWeekSolid } from 'flowbite-svelte-icons';

  </script>
  
  <main>

    <div class="absolute min-h-screen top-0 left-0 w-full z-[-1] opacity-70">
    <div class="absolute inset-0" id="particles-js"></div>
    </div>

<script>
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
</script>

<div class="flex flex-col items-center mt-16 space-y-10"> 
  <div class="flex flex-col justify-center items-center text-center gap-8 md:gap-10">
    <h2 class="font-semibold text-4xl text-white sm:text-5xl md:text-6xl">
      About my <span class="poppins text-amber-600">Journey</span> 
    </h2>
    <p class="text-base text-white sm:text-lg md:text-xl mb-10 text-center">
      My journey as a student developer has been a mix of learning and <br>hands-on experience. From building my first projects to exploring new technologies, <br>I've gained skills in web design, video editing, and graphic design. Each step <br> has fueled my passion for creating and problem-solving, preparing me for the challenges ahead.
    </p>
  </div>
</div>

<div class="flex flex-col items-center mt-16 space-y-10">
    <div class="flex flex-col justify-center items-center text-center gap-8 md:gap-10 bg-amber-50 rounded-lg p-8">
        <Timeline order="horizontal">
            <TimelineItem title="1st Year in PRMSU" date="Year 2021 - 2022">
              <svelte:fragment slot="icon">
                <div class="flex items-center">
                  <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-yellow-950 dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div class="hidden sm:flex w-full bg-yellow-600 h-0.5 dark:bg-gray-700" ></div>
                </div>
              </svelte:fragment>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Learned about the fundamentals <br>of Programming
                <br>Started with C++ and HTML</p>
            </TimelineItem>
            <TimelineItem title="1st Year in Gordon College" date="Year 2022-2023">
              <svelte:fragment slot="icon">
                <div class="flex items-center">
                  <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-yellow-950 dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div class="hidden sm:flex w-full bg-yellow-600 h-0.5 dark:bg-gray-700"></div>
                </div>
              </svelte:fragment>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Developed my skills in PHP <br> and JavaScript</p>
            </TimelineItem>
            <TimelineItem title="My 2nd in GC" date="2023 - 2024">
              <svelte:fragment slot="icon">
                <div class="flex items-center">
                  <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-yellow-950 dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div class="hidden sm:flex w-full bg-yellow-600 h-0.5 dark:bg-gray-700"></div>
                </div>
              </svelte:fragment>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Studied Angular and Python</p>
            </TimelineItem>
            <TimelineItem title="And 3rd Year in GC" date="2024 - 2025">
                <svelte:fragment slot="icon">
                  <div class="flex items-center">
                    <div class="flex z-10 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-0 ring-yellow-950 dark:bg-primary-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                      <CalendarWeekSolid class="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div class="hidden sm:flex w-full bg-yellow-600 h-0.5 dark:bg-gray-700"></div>
                  </div>
                </svelte:fragment>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Currently developing more <br>skills in the field of computer science.
                    <br>Learning about Svelte</p>
              </TimelineItem>
          </Timeline>
    </div>
</div>

<div class="flex flex-col items-center mt-16 space-y-10">
    <div class="flex flex-col justify-center items-center text-center gap-8 md:gap-10 p-8">
        </div>
        </div>


</main>