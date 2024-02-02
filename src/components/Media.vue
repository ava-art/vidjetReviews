<script setup lang="ts">
import Video from "./media/Video.vue";
import Photo from "./media/Photo.vue";

import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => {},
  },
  media: {
    type: Number,
    required: true
  }
});
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
</script>

<template>
  <Video :item="item" :key="item[0]" :media="media" />
  <Photo :item="item" :key="item[0]" :media="media" />
</template>
