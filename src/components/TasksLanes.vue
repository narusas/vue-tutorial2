<template>

  <div class="rounded bg-blue-200 w-64 p-2">
    <div class="flex justify-between py-1">
      <h3 class="text-sm">New landing page</h3>
      <more></more>
    </div>
    <div class="text-sm mt-2">
      <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
        <input type="checkbox" class="rounded"/> Do a mobile first layout
      </div>

      <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
        <input type="checkbox" class="rounded" checked/> Check the meta tags
      </div>

      <div class="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-grey-lighter">
        <input type="checkbox" class="rounded"/> Check the responsive layout on all devices

      </div>
      <p class="mt-3 text-grey-dark">Add a card...</p>
    </div>
  </div>

</template>
<script setup>

</script>
