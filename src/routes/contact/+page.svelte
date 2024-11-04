<script>
    import { DeviceMockup } from 'flowbite-svelte';
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
    <div class="flex flex-col items-center mt-10 space-y-10"> 
        
          <div class="flex items-center justify-between w-full max-w-[800px]"> <!-- Flex container for device and text/button -->
            <div class="relative animate-wiggle"> 
              <DeviceMockup device="ios">
                <img src="assets/pictures/facebook2.png" class="dark:hidden w-[272px] h-[572px]" alt="ios example 1" />
              </DeviceMockup>
            </div>
            <div class="flex flex-col items-start ml-4"> <!-- Wrap text and button in their own div -->
              <h2 class="font-semibold text-4xl text-white sm:text-5xl md:text-6xl">
                Get in the <span class="poppins text-amber-600">Loop!</span> 
              </h2>
              <p class="text-base text-white sm:text-lg md:text-xl mb-10 text-left">
                Stay connected and keep in touch—Get in the Loop with me!
              </p>
              <a href="https://www.facebook.com/jenishe.salem" class="block">
              <button class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-amber-600 mb-4"> <!-- Add mb-4 for spacing -->
                <div class="absolute top-0 right-full w-full h-full bg-amber-600 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                <h4 class="relative z-9">Facebook &rarr;</h4>
              </button>
            </a>
                
            <a href="https://github.com/jenishe-X" class="block">
              <button class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-amber-600 mb-4"> <!-- Add mb-4 for spacing -->
                <div class="absolute top-0 right-full w-full h-full bg-amber-600 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                <h4 class="relative z-9">Github &rarr;</h4>
              </button>
            </a>
              
            
              <button class="text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-amber-600"> <!-- No mb-4 on the last button -->
                <div class="absolute top-0 right-full w-full h-full bg-amber-600 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                <h4 class="relative z-9">jenishedufsalem@gmail.com</h4>
              </button>
            
            
            </div>
          </div>
        </div>
     
      
      
</main>