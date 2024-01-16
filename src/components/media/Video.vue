<script setup lang="ts">
import PlusReview from '../svg/PlusReview.vue'
import { useReviewStore } from "../../stores/ReviewStore";

const reviewStore = useReviewStore();

const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => {},
  },
});

</script>

<template>
<a v-if="item[1] == 'video'"
    
    :href="'https://ava-site.ru/reviews/videos/' + item[2] + '.mp4'"
    data-fancybox="gallery-media"
    :data-caption="'&lt;center&gt;'+ item[4] + '&lt;br /&gt;' + item[3] + '&lt;/center&gt;' "
  >
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
      <div class="more-media-review">+{{ reviewStore.mediaCutArMedia[1] }}</div>
    </div>
  </a>

</template>