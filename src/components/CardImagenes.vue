<template>
<div class="p-3  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <!--Card 1-->
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" :src='UrlImagen' alt="Mountain">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{TituloCard}}</div>
        <p class="text-gray-700 text-base">  {{DescriptionCard}}  </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 props: {
  UrlImagen:[],
  TituloCard:[],
  DescriptionCard:[],
  },
}

</script>

<style>
.w-full{
    width: 40%;
    height: 40%;
}

</style>