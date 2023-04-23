export default {
    state: {
      ads: [
          {
            title: "Кофе Lavazza",
            desc: "Lavazza - это качественный напиток, созданный из стопроцентной арабики. Вкус яркий и насыщенный.",
            promo: true,
            src: "https://cdn1.ozone.ru/s3/multimedia-r/6342773775.jpg",
            id: "1",
          },
          {
            title: "Кофе Jardin",
            desc: "«Жардин» на 100% состоит из арабики, выращиваемой в Кении и Колумбии. В составе отсутствуют какие-либо ароматизаторы и красители, благодаря чему у напитка наивысшее качество. Кофе Jardin на 100 процентов состоит из зерен арабики. Оригинальный и насыщенный вкус «Жардин» складывается из множества факторов, важнейшим из которых является место, в котором произрастают кофейные зерна, а также способ обжарки.",
            promo: true,
            src: "https://muizre.ru/_dr/89/16185504.jpg",
            id: "2",
          },
          {
            title: "Чай Тигуанинь",
            desc: "Легендарный улун. Ласковый, благородный вкус и весенний душистый аромат этого чая заворожат Вас с первой встречи и навсегда. Очень популярен в Китае и за его пределами.",
            promo: true,
            src: "https://parfum-asmodeus.ru/wp-content/uploads/f/0/e/f0e51780e07d58bad8857cd8fa2a7e59.jpeg",
            id: "3",
          },
          {
            title: "Чай Пуэр",
            desc: "В первую очередь эффект чая пуэр проявляется в эмоциональном плане. Замечено, что он хорошо снимает стресс и напряженность. Если человек загружен проблемами, ему становится легче их решить. Улучшается настроение. Многие отмечают радость, которая появляется спонтанно. Это и есть тот самый эффект опьянения.",
            promo: true,
            src: "https://get.wallhere.com/photo/tea-chai-cha-puer-set-tray-pot-hot-stilllife-perspective-wood-ceramic-958527.jpg",
            id: "4",
          },
          {
            title: "Чай Ahmad Tea",
            desc: "Черный Ахмад представляет собой смесь элитных сортов Китайского, Индийского и Цейлонского чаёв. Его настой обладает идеальным сочетанием аромата, вкуса и цвета.",
            promo: false,
            src: "https://www.tea.moscow/teaphoto/gallery/gallery3.jpeg",
            id: "5",
        },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter((ad) => {
        return ad.promo;
      });
    },
    myAds(state) {
      return state.ads;
    },
  },
};
