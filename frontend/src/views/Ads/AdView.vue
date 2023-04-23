<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mt-5">
          <v-img
            height="300px"
            src="https://cdn1.ozone.ru/s3/multimedia-r/6342773775.jpg"
          ></v-img>

          <v-card-text>
            <h1 class="text--primary mb-3">Lavazza</h1>
            <p>
              Lavazza - это качественный напиток, созданный из стопроцентной арабики. Вкус яркий и насыщенный.
            </p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              prepend-icon="mdi-file-edit"
              variant="outlined"
              color="warning"
              >Изменить</v-btn
            >
            <v-btn
              append-icon="mdi-cart-arrow-down"
              variant="outlined"
              color="success"
              >Купить</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>