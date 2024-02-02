<script setup lang="ts">
// import { useReviewStore } from "./stores/ReviewStore";

import Review from "./components/Review.vue";
import Media from "./components/Media.vue";

import "./style.css";
import { computed, getCurrentInstance, ref } from "vue";
import NewReview from "./components/NewReview.vue";


// const reviewStore = useReviewStore();

export interface Review {
  rating: number;
  plus: string;
  minus: string;
  comment: string;
  name: string;
  date: string;
  photos: string;
  videos: string;
  dateNum: number;
  id: number;
  marketplace: string;
}

const parseDateStringToTimestamp = (
  dateString: string | null
): number | null => {
  if (dateString) {
    try {
      const [day, month, year] = dateString.split(" ");

      const months = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
      ];

      const monthIndex = months.indexOf(month);

      const dateObject = new Date(Number(year), monthIndex, Number(day));

      return dateObject.getTime();
    } catch (error) {
      console.error("Ошибка при парсинге даты:", error);

      return null;
    }
  }

  return null;
};

const url = `https://ava-site.ru/reviews/test.php?item=`;

const title = document.getElementById("title").innerHTML;
const clientBuyThis = Number(
  document.getElementById("client-buy-this").innerHTML
);

// reviewStore.getReviews(title);

const reviews = ref<Review[]>([]);
const rating = ref(0);
const middleRating = ref(0);
const countReviews = ref(15);
const viewSwiper = ref(false);
const mediaCutArMedia = ref([]);
const sort = ref<"new" | "old" | "top" | "bottom">("new");
const ratingCount = ref([
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
]);

const reviewsComputed = computed(() => {
  const arr = [...reviews.value];

  return arr.sort(function (a, b) {
    switch (sort.value) {
      case "new":
        return b.dateNum - a.dateNum; // Убывание по дате
      case "old":
        return a.dateNum - b.dateNum; // Возрастание по дате
      case "top":
        return b.rating - a.rating; // Убывание по рейтингу
      case "bottom":
        return a.rating - b.rating; // Возрастание по рейтингу
    }
  });
});

const changeS = (e) => {
  sort.value = e.target.value;

  const instance = getCurrentInstance();
  instance?.proxy?.$forceUpdate();
};

const getReviews = async (search: string) => {
  const res = await fetch(`${url}${search}`);
  const data = await res.json();

  let reviewContentOzon = JSON.parse(data[0].content);
  let reviewContentYandex = JSON.parse(data[1].content);
  let midRating = 0;
  let rat = 0;
  let video = [];
  let photo = [];
  let cutArMedia = [];
  let reviewContent: Review[] = [];

  if (reviewContentOzon === null) reviewContentOzon = [];
  if (reviewContentYandex === null) reviewContentYandex = [];
  if (reviewContentOzon && reviewContentYandex)
    reviewContent = [...reviewContentOzon, ...reviewContentYandex];

  reviewContent = reviewContent
    .filter(
      (el) =>
        (el.name !== null && el.comment !== "") ||
        el.plus !== "" ||
        el.minus !== ""
    )
    .map((el) => ({
      ...el,
      rating: Number(el.rating),
      dateNum: parseDateStringToTimestamp(el.date) ?? 0,
    }))
    .filter((el) => el.rating > 3 && el.dateNum > 0);

  reviewContent.forEach((el, id) => {
    rat++;
    el.id = id;
    midRating += el.rating;

    if (!el.marketplace) {
      el.marketplace = "Ozon";
    }
  });

  const onePercent = 100 / rat;
  middleRating.value = Number((midRating / rat).toFixed(2));
  rating.value = rat;

  reviewContent.forEach((el) => {
    if (el.rating == 5) {
      ratingCount.value[0][0]++;
      ratingCount.value[0][1] += onePercent;
    }
    if (el.rating == 4) {
      ratingCount.value[1][0]++;
      ratingCount.value[1][1] += onePercent;
    }
    if (el.rating == 3) {
      ratingCount.value[2][0]++;
      ratingCount.value[2][1] += onePercent;
    }
    if (el.rating == 2) {
      ratingCount.value[3][0]++;
      ratingCount.value[3][1] += onePercent;
    }
    if (el.rating == 1) {
      ratingCount.value[4][0]++;
      ratingCount.value[4][1] += onePercent;
    }

    if (el.videos) {
      JSON.parse(el.videos).forEach((link) => {
        video.push([link, el.comment, el.name]);

        cutArMedia.push([
          cutArMedia.length,
          "video",
          link,
          el.comment,
          el.name,
          el.rating,
        ]);
      });
    }
    JSON.parse(el.photos).forEach((link) => {
      photo.push([link, el.comment, el.name, el.marketplace, el.rating]);
      cutArMedia.push(link);
    });
  });
  let arMedia = cutArMedia.filter((el) => el[1] === "video");

  arMedia.forEach((el, id) => {
    arMedia[id] = [id, "video", el[2], el[3], el[4], el[5]];
  });

  photo.forEach((el, id) => {
    if (arMedia.length) {
      arMedia.push([
        arMedia.length,
        "photo",
        el[0].replace(".jpeg", ""),
        el[1],
        el[2],
        el[3],
        el[4],
      ]);
    }
  });

  reviewContent.sort((a, b) => a.dateNum - b.dateNum);
  let newAr = [];
  let countAr = 0;
  arMedia.forEach((el, id) => {
    if (
      (el[1] == "photo" && el[6] == 5 && id < 50) 
      //(el[1] == "video" && el[5] == 5 && id < 7)
    ) {
      el[0] = countAr;
      newAr.push(el);
      countAr++;
    }
  });


  mediaCutArMedia.value = [newAr, newAr.length - 8];
  reviews.value = reviewContent;
};

const onNewReview = () =>{
  viewSwiper.value = !viewSwiper.value
}

getReviews(title);
const onViewMore = () =>{
  countReviews.value = countReviews.value + 20
}
</script>

<template>
  <div id="sp-product-reviews-widget">
    <div class="sp-heading">Отзывы для {{ title }}</div>
    <div class="wrap-block-media-reviews" >
      <Media
        v-for="item of mediaCutArMedia[0]"
        :key="item[0]"
        :item="item"
        :media="mediaCutArMedia[1]"
      />
    
    </div>
    <div class="wrap-review-modal " v-if="viewSwiper" >
      <div class="btn-close-modal-review" @click="onNewReview">
        <i class="line-close one"></i>
        <i class="line-close two"></i>
      </div>
      <NewReview :title="title" />
    </div>
    <div class="sp-widget-content">
      <!-- Summary -->
      <div class="sp-summary">
        <!-- Photos -->

        <!-- Actions -->
        <div class="sp-summary-actions">
          <div class="sp-summary-filters">
            <!-- Sort order -->
            <div class="sp-summary-sort-selector">
              <div class="sp-summary-sort-selector-select">
                <select
                  class="sp-summary-sort-selector-real-select"
                  @change="changeS"
                >
                  <option value="new" selected>Сначала новые</option>
                  <option value="old">Сначала старые</option>
                  <option value="top">Сначала с высокой оценкой</option>
                  <option value="bottom">Сначала с низкой оценкой</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Review form button -->
          <div class="sp-summary-actions" v-if="clientBuyThis === 1">
            <button
              class="sp-summary-actions-primary-button"
              type="button"
              data-sp-surveybox=""
              @click="onNewReview"
            >
              Оставить отзыв
            </button>
          </div>
          <div
            class="sp-summary-actions not-buy-this"
            v-if="clientBuyThis === 0"
          >
            Мы не нашли данный товар среди ваших покупок. Вы можете оставлять
            отзыв только к товарам, которые приобретали на nordfrost.ru.
          </div>
        </div>
      </div>

      <!-- Reviews -->
      <div class="sp-content" v-if="reviewsComputed.length">
        <div class="sp-reviews">
          <div class="sp-review-list">
            <Review
              v-for="(review, index) in reviewsComputed"
              :key="`test-${index}`"
              :review="review"
              :countReviews="countReviews"
              :index="index"
            />
          </div>
          <div class="review-view-more" @click="onViewMore" v-if="rating > countReviews">Показать ещё</div>
        </div>

        <div class="sp-content-summary">
          <!-- Rating -->
          <div
            class="sp-content-rating"
            itemprop="aggregateRating"
            itemscope=""
            itemtype="http://schema.org/AggregateRating"
          >
            <div class="sp-content-rating-stars">
              <div class="sp-star-on"></div>
              <div class="sp-star-on"></div>
              <div class="sp-star-on"></div>
              <div class="sp-star-on"></div>
              <div class="sp-star-on"></div>
            </div>
            <span class="sp-content-rating-value" itemprop="ratingValue">{{
              middleRating
            }}</span>
            <span class="sp-content-rating-disclaimer">
              /&nbsp;
              <span itemprop="reviewCount"></span>
              {{ rating }}
            </span>
          </div>

          <!-- Rating distribution-->
          <div class="sp-content-rating-distribution">
            <div class="sp-content-rating-distribution-item">
              <div class="sp-content-rating-distribution-item-label">
                5 звезд
              </div>

              <div class="sp-content-rating-distribution-item-bar">
                <div
                  class="sp-content-rating-distribution-item-bar-progress"
                  :style="{ width: ratingCount[0][1] + '%' }"
                ></div>
              </div>

              <div class="sp-content-rating-distribution-item-value">
                {{ ratingCount[0][0] }}
              </div>
            </div>

            <div class="sp-content-rating-distribution-item">
              <div class="sp-content-rating-distribution-item-label">
                4 звезды
              </div>

              <div class="sp-content-rating-distribution-item-bar">
                <div
                  class="sp-content-rating-distribution-item-bar-progress"
                  :style="{ width: ratingCount[1][1] + '%' }"
                ></div>
              </div>

              <div class="sp-content-rating-distribution-item-value">
                {{ ratingCount[1][0] }}
              </div>
            </div>

            <div class="sp-content-rating-distribution-item">
              <div class="sp-content-rating-distribution-item-label">
                3 звезды
              </div>

              <div class="sp-content-rating-distribution-item-bar">
                <div
                  class="sp-content-rating-distribution-item-bar-progress"
                  :style="{ width: ratingCount[2][1] + '%' }"
                ></div>
              </div>

              <div class="sp-content-rating-distribution-item-value">
                {{ ratingCount[2][0] }}
              </div>
            </div>

            <div class="sp-content-rating-distribution-item">
              <div class="sp-content-rating-distribution-item-label">
                2 звезды
              </div>

              <div class="sp-content-rating-distribution-item-bar">
                <div
                  class="sp-content-rating-distribution-item-bar-progress"
                  :style="{ width: ratingCount[3][1] + '%' }"
                ></div>
              </div>

              <div class="sp-content-rating-distribution-item-value">
                {{ ratingCount[3][0] }}
              </div>
            </div>

            <div class="sp-content-rating-distribution-item">
              <div class="sp-content-rating-distribution-item-label">
                1 звезда
              </div>

              <div class="sp-content-rating-distribution-item-bar">
                <div
                  class="sp-content-rating-distribution-item-bar-progress"
                  :style="{ width: ratingCount[4][1] + '%' }"
                ></div>
              </div>

              <div class="sp-content-rating-distribution-item-value">
                {{ ratingCount[4][0] }}
              </div>
            </div>
          </div>

          <!-- Dimensions-->

          <!-- Photos -->
        </div>
      </div>
      <div v-else class="sp-content">Отзывов пока нет.</div>
    </div>
  </div>
</template>
