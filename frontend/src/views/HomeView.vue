<script>
export default {
  data() {
    return {
      ads: [
        {
          title: "First",
          desc: "First Desc",
          promo: true,
          src: "https://cdn1.ozone.ru/s3/multimedia-r/6342773775.jpg",
          id: "1",
        },
        {
          title: "Second",
          desc: "Second Desc",
          promo: true,
          src: "https://muizre.ru/_dr/89/16185504.jpg",
          id: "2",
        },
        {
          title: "Third",
          desc: "Third Desc",
          promo: true,
          src: "https://parfum-asmodeus.ru/wp-content/uploads/f/0/e/f0e51780e07d58bad8857cd8fa2a7e59.jpeg",
          id: "3",
        },
        {
          title: "Fourth",
          desc: "Fourth Desc",
          promo: true,
          src: "https://get.wallhere.com/photo/tea-chai-cha-puer-set-tray-pot-hot-stilllife-perspective-wood-ceramic-958527.jpg",
          id: "4",
        },
        {
          title: "Fifth",
          desc: "Fifth Desc",
          promo: false,
          src: "https://www.tea.moscow/teaphoto/gallery/gallery3.jpeg",
          id: "5",
        },
      ],
    };
  },
};
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xs="12">
        <v-carousel>
          <v-carousel-item v-for="ad in ads" :key="ad.id" :src="ad.src" cover>
            <div class="ad-link">
              <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
            </div></v-carousel-item
          >
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" xs="12">
        <v-card>
          <v-img height="200px"></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb0">Здесь будет заголовок</h3>
              <div>Здесь будет описание</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text>Открыть</v-btn>
            <v-btn raised color="primary">Купить</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.ad-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgb(0, 0, 0, 0.5);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>