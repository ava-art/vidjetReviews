import { defineStore, mapWritableState } from "pinia";
import { ref } from "vue";

const renameDate = (mounth) => {
  switch (mounth) {
    case "января":
      return "01";
    case "февраля":
      return "02";
    case "марта":
      return "03";
    case "апреля":
      return "04";
    case "мая":
      return "05";
    case "июня":
      return "06";
    case "июля":
      return "07";
    case "августа":
      return "08";
    case "сентября":
      return "09";
    case "октября":
      return "10";
    case "ноября":
      return "11";
    case "декабря":
      return "12";

      break;

    default:
      break;
  }
};

const url = `https://ava-site.ru/reviews/test.php?item=`;


export const useReviewStore = defineStore("reviewStore", () => {
  const reviews = ref([]);
  const rating = ref(0);
  const middleRating = ref(0);
  const mediaCutArMedia = ref([]);
  const sort = ref("new");
  const ratingCount = ref([
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ]);
  let sortItem = ref('new');

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
    let reviewContent = [];

    if (reviewContentOzon === null) reviewContentOzon = [];
    if (reviewContentYandex === null) reviewContentYandex = [];
    if (reviewContentOzon && reviewContentYandex)
      reviewContent = [...reviewContentOzon, ...reviewContentYandex];

    reviewContent = reviewContent.filter((el) => {
      if (el.name !== null) {
        if (
          (el.comment !== "" || el.plus !== "" || el.minus !== "") &&
          el.rating > 3
        ) {
          let sliceArr = el.date.split(" ");
          if (sliceArr[0].length === 1) sliceArr[0] = `0${sliceArr[0]}`;
          sliceArr = Date.parse(
            `${sliceArr[2]}-${renameDate(sliceArr[1])}-${sliceArr[0]}`
          );
          el.dateNum = sliceArr;

          return el;
        }
      }
    });
    reviewContent.forEach((el, id) => {
      rat++;
      el.id = id
      midRating += Number(el.rating);
      el.marketplace ? "" : (el.marketplace = "Ozon");
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

      JSON.parse(el.photos).forEach((link) => {
        photo.push([link, el.comment, el.name, el.marketplace]);
        cutArMedia.push(link);
      });
      if (el.videos) {
        JSON.parse(el.videos).forEach((link) => {
          video.push([link, el.comment, el.name]);
          cutArMedia.push([
            cutArMedia.length,
            "video",
            link,
            el.comment,
            el.name,
          ]);
        });
      }
    });
    let arMedia = cutArMedia.filter((el) => el[1] === "video");
    arMedia.forEach(
      (el, id) => (arMedia[id] = [id, "video", el[2], el[3], el[4]])
    );

    photo.forEach((el) => {
      if (arMedia.length) {
        arMedia.push([
          arMedia.length,
          "photo",
          el[0].replace(".jpeg", ""),
          el[1],
          el[2],
          el[3],
        ]);
      }
    });

    reviewContent.sort((a, b) => a.dateNum < b.dateNum);

    mediaCutArMedia.value = [arMedia, cutArMedia.length - 8];
    reviews.value = reviewContent;
  };

  const changeSortReviews = (sort) => {
    console.log(sort);
     
    sortItem.value = sort;
    
  };

  return {
    reviews,
    rating,
    sort,
    mediaCutArMedia,
    sortItem,
    middleRating,
    changeSortReviews,
    ratingCount,
    getReviews,
  };
});
