<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte';
  </script>
  
  <Navbar class="bg-yellow-950 text-white">
    <NavBrand href="/">
      <!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Hi, I'm Jen!</span>
    </NavBrand>
    <div class="flex items-center md:order-2">
      <Avatar id="avatar-menu" src="assets/pictures/jenishe.jpg" />
    </div>
    <Dropdown placement="bottom" triggeredBy="#avatar-menu">
      <DropdownHeader>
        <span class="block text-sm">Jenishe Salem</span>
        <span class="block truncate text-sm font-medium">jenishedufsalem@gmail.com</span>
      </DropdownHeader>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
    <NavUl>
      <NavLi class="text-white" href="/about">About</NavLi>
      <NavLi class="text-white" href="/docs/components/navbar">Navbar</NavLi>
      <NavLi class="text-white" href="/pricing">Pricing</NavLi>
      <NavLi class="text-white" href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>