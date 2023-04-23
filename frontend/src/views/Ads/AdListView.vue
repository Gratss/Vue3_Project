<script>
export default {
  data() {
    return {
      ads: [
        {
          title: "Кофе Lavazza",
          desc: "Lavazza - это качественный напиток, созданный из стопроцентной арабики. Вкус яркий и насыщенный.",
          promo: true,
          src: "https://cdn1.ozone.ru/s3/multimedia-r/6342773775.jpg",
          id: "1",
        },
        {
          title: "Чай Пуэр",
          desc: "В первую очередь эффект чая пуэр проявляется в эмоциональном плане. Замечено, что он хорошо снимает стресс и напряженность. Если человек загружен проблемами, ему становится легче их решить. Улучшается настроение. Многие отмечают радость, которая появляется спонтанно. Это и есть тот самый эффект опьянения.",
          promo: true,
          src: "https://get.wallhere.com/photo/tea-chai-cha-puer-set-tray-pot-hot-stilllife-perspective-wood-ceramic-958527.jpg",
          id: "4",
        }
      ],
    };
  },
};
</script>

<template>
  <v-container>
    <h1 class="text--secondary mb-3 mt-3">В корзине</h1>
    <v-card v-for="ad in ads" :key="ad.id" class="mb-3" max-width="1000">
      <v-row>
        <v-col xs="4">
          <v-img :src="ad.src" height="175px" cover></v-img>
          <v-spacer></v-spacer>
        </v-col>
        <v-col xs="8">
          <h2 class="text--primary">{{ ad.title }}</h2>
          <p style="height: 85px; overflow: hidden; text-overflow: ellipsis">
            {{ ad.desc }}
          </p>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="text" :to="'/ad/' + ad.id">
              Открыть
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>