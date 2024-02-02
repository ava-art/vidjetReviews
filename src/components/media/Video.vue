<script setup lang="ts">
import PlusReview from "../svg/PlusReview.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => {},
  },
  media: {
    type: Number,
  },
});
</script>

<template>
  <div v-if="item[1] == 'video'">
    <div
      class="block-media-review"
      v-if="item[1] == 'video' && item[0] < 7"
      :style="{
        background:
          'url(https://ava-site.ru/reviews/videos/webp/' + item[2] + '.webp)',
      }"
    >
      <PlusReview />
    </div>
    <div
      class="block-media-review"
      v-if="item[1] == 'video' && item[0] === 7"
      :style="{
        background:
          'url(https://ava-site.ru/reviews/videos/webp/' + item[2] + '.webp)',
      }"
    >
      <PlusReview />
      <div class="more-media-review">+{{ media }}</div>
    </div>
  </div>
</template>
