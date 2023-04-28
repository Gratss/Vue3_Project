<template>
    <v-dialog
    v-model="modal"
    width="400px">
    <template v-slot:activator="{ props }">
        <v-btn
        v-bind="props"
        color="warning">
        Купить</v-btn>
    </template>
    <v-card class="pa-3">
    <v-row justify="center">
    <v-col cols="12">
    <v-card-title>
    <h1 class="text--primary">Вы хотите купить?</h1>
    </v-card-title>
    </v-col>
    </v-row>
    
    <v-row justify="center">
    <v-col cols="12">
        <v-card-text>
        <v-text-field
        name="name"
        label="Ваше Имя"
        type="text"
        v-model="name"
        >
        </v-text-field>
        <v-text-field
        name="phone"
        label="Ваш номер телефона"
        type="text"
        v-model="phone"
        >
        </v-text-field>
        </v-card-text>

    </v-col>
    </v-row>
    
    <v-row justify="center">
    <v-col cols="12">
    <v-card-actions>
    <v-spacer></v-spacer>
    <v-btn>Закрыть</v-btn>
    <v-btn color="success">Купить это!</v-btn>
    </v-card-actions>
    </v-col>
    </v-row>
    </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['ad'],
    data() {
        return {
        modal: false,
        name: '',
        phone: ''
        }
    },
    methods: {
        onClose (){
        this.name = ""
        this.phone = ""
        this.modal = false
        },
        onSave (){
            if (this.name !== '' && this.phone !== '') {
                this.$store.dispatch('createOrder', {
                                name: this.name,
                                phone: this.phone,
                                adId: this.ad.id,
                                userId: this.ad.userId
                            })
                            .finally(() => {
                                this.name = ""
                                this.phone = ""
                                this.modal = false
                            })
                            
                }
            },
}
}
</script>