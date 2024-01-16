<script setup lang="ts">

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Video from '/src/components/media/Video.vue'
import Photo from '/src/components/media/Photo.vue'


const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => {},
  },
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
</script>

<template>
  <Video :item="item" :key="item[0]" />
  <Photo :item="item" :key="item[0]" />

</template>
