<script setup lang="ts">
import Video from "/src/components/media/Video.vue";
import Photo from "/src/components/media/Photo.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => {},
  },
  media: {
    type: Number
  }
});

</script>

<template>
  <Video :item="item" :key="item[0]" :media="media" />
  <Photo :item="item" :key="item[0]" :media="media" />
  
</template>
