<template>
    <section>
        <v-app-bar color="pink lighten-5 pink--text text--accent-1" flat app>
            <v-app-bar-nav-icon
                @click="sidebar = !sidebar"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>
                <v-icon small color="pink accent-1">mdi-basket</v-icon>
                ESHOP BEAUTY & BOTTLES
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn text href="/logout" class="pink--text text--accent-1"
                >logout</v-btn
            >
        </v-app-bar>

        <v-navigation-drawer v-model="sidebar" app>
            <v-list nav dense>
                <v-list-item class="outlined pink lighten-5">
                    <v-list-item-title
                        class="title pink--text text--accent-1 mt-5 px-3"
                    >
                        {{ fullName }}
                        <p class="caption">@{{ this.user.username }}</p>
                    </v-list-item-title>
                </v-list-item>

                <!-- <v-divider></v-divider> -->

                <v-subheader>Inventory</v-subheader>
                <app-sidebar :items="inventories" :route="route"></app-sidebar>
                <v-subheader>Products</v-subheader>
                <app-sidebar :items="products" :route="route"></app-sidebar>
            </v-list>
        </v-navigation-drawer>
    </section>
</template>

<script>
export default {
    props: ["route", "user"],
    data() {
        return {
            sidebar: true,

            inventories: [
                {
                    icon: "file-document-multiple-outline",
                    title: "Report",
                    link: "/inventory/reports"
                },
                {
                    icon: "all-inclusive",
                    title: "Flow",
                    link: "/inventory/flow"
                }
            ],
            products: [
                {
                    icon: "format-line-style",
                    title: "Raw",
                    link: "/products/raw"
                },
                {
                    icon: "format-line-weight",
                    title: "Assembled",
                    link: "/products/assembled"
                }
            ]
        };
    },
    computed: {
        fullName() {
            return this.user.first_name + " " + this.user.last_name;
        }
    }
};
</script>
<style lang="scss" scoped></style>
