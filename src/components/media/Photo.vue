<script setup lang="ts">
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
  <a
    v-if="item[1] == 'photo' && item[5] == 'Ozon'"
    data-fancybox="gallery-media"
    :data-caption="
      '&lt;center&gt;' + item[4] + '&lt;br /&gt;' + item[3] + '&lt;/center&gt;'
    "
    :href="'https://ava-site.ru/reviews/photos/' + item[2] + '.jpeg'"
  >
    <div
      v-if="item[1] == 'photo' && item[0] < 7"
      class="block-media-review"
      :style="{
        background:
          'url(https://ava-site.ru/reviews/photos/webp/' + item[2] + '.webp',
      }"
    ></div>

    <div
      v-if="item[1] == 'photo' && item[0] === 7"
      class="block-media-review"
      :style="{
        background:
          'url(https://ava-site.ru/reviews/photos/webp/' + item[2] + '.webp',
      }"
    >
      <div class="more-media-review">+{{ reviewStore.mediaCutArMedia[1] }}</div>
    </div>
    <div
      v-if="item[1] == 'photo' && item[0] > 7"
      class="block-media-review hidden"
    ></div>
  </a>
  <a
    v-if="item[1] == 'photo' && item[5] == 'Yandex'"
    data-fancybox="gallery-media"
    :data-caption="
      '&lt;center&gt;' + item[4] + '&lt;br /&gt;' + item[3] + '&lt;/center&gt;'
    "
    :href="'https://ava-site.ru/reviews/photos/webp/' + item[2] + '.webp'"
  >
    <div
      v-if="item[1] == 'photo' && item[0] < 7"
      class="block-media-review"
      :style="{
        background:
          'url(https://ava-site.ru/reviews/photos/webp/' + item[2] + '.webp',
      }"
    ></div>

    <div
      v-if="item[1] == 'photo' && item[0] === 7"
      class="block-media-review"
      :style="{
        background:
          'url(https://ava-site.ru/reviews/photos/webp/' + item[2] + '.webp',
      }"
    >
      <div class="more-media-review">+{{ reviewStore.mediaCutArMedia[1] }}</div>
    </div>
    <div
      v-if="item[1] == 'photo' && item[0] > 7"
      class="block-media-review hidden"
    ></div>
  </a>
</template>
