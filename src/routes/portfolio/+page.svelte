<script>
    import { Gallery } from 'flowbite-svelte';
    import { Card, Button } from 'flowbite-svelte';
    const images = [
      { alt: 'istorya', src: 'assets/portfolio/3.jpg' },
      { alt: 'soul', src: 'assets/portfolio/1.jpg' },
      { alt: 'buzzer', src: 'assets/portfolio/5.png' },
      { alt: 'ccs', src: 'assets/portfolio/2.jpg' },
      { alt: 'charcounter', src: 'assets/portfolio/4.jpg' },
      { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' },
      { alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg' },
      { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg' },
      { alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg' },
      { alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg' },
      { alt: 'playstation', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg' },
      { alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg' }
    ];
  </script>
  

  <div class="flex flex-col items-center mt-16 space-y-10"> <!-- Added space-y-10 for vertical spacing -->
    <div class="flex flex-col justify-center items-center text-center gap-8 md:gap-10">
        <h2 class="font-semibold text-4xl text-white sm:text-5xl md:text-6xl">
            Welcome to my <span class="poppins text-amber-600">Portfolio!</span> 
        </h2>
        <p class="text-base text-white sm:text-lg md:text-xl mb-10 typing">
            I invite you to explore my portfolio to see how I can bring your ideas to life with innovative design and editing.
        </p>
    </div>
    
    <div class="flex flex-row space-x-4 justify-center mt-16"> <!-- Added mt-16 for more top margin -->
        <Card class="flex-1"> <!-- Flex-1 for flexible widths -->
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <Button class="w-fit">
                Read more
            </Button>
        </Card>
    
        <Card class="flex-1">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <Button class="w-fit">
                Read more
            </Button>
        </Card>
    
        <Card class="flex-1">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <Button class="w-fit">
                Read more
            </Button>
        </Card>
    </div>
    
    
    <div class="w-full"> <!-- Full width for gallery -->
        <Gallery items={images} class="gap-4 grid grid-cols-2 md:grid-cols-3" />
    </div>
</div>

  