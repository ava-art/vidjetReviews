<script setup lang="ts">
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
  <a
    v-if="(item[1] == 'photo' && item[5] == 'Ozon') ||
    (item[1] == 'photo' && item[5] == 'Site')"
    data-fancybox="gallery-media"
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
      
      <div class="more-media-review">+{{ media }}</div>
    </div>
  </a>
  <a
    v-if="item[1] == 'photo' && item[5] == 'Yandex'"
    data-fancybox="gallery-media"
    
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
    <div class="more-media-review">+{{ media }}</div>
    </div>
    
  </a>
</template>
