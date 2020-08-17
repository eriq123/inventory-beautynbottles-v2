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

            <v-btn href="#" color="pink accent-1" text>
                <v-icon class="mr-1">mdi-account-circle-outline</v-icon>
                <template v-if="user.is_admin">
                    {{ fullName }} (ADMIN)
                </template>
                <template v-else>
                    {{ fullName }}
                </template>
            </v-btn>

            <v-divider vertical></v-divider>

            <v-btn text href="/logout" class="pink--text text--accent-1">
                logout
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="sidebar" app>
            <template v-if="user.is_admin">
                <v-list-group value="true" color="pink accent-1">
                    <template v-slot:activator>
                        <v-list-item-title>Inventory (ADMIN)</v-list-item-title>
                    </template>
                    <app-sidebar
                        :items="inventories"
                        :route="route"
                    ></app-sidebar>
                </v-list-group>
            </template>

            <template v-else>
                <v-list-group value="true" color="pink accent-1">
                    <template v-slot:activator>
                        <v-list-item-title>Inventory</v-list-item-title>
                    </template>
                    <app-sidebar
                        :items="inventories"
                        :route="route"
                    ></app-sidebar>
                </v-list-group>

                <v-list-group value="true" color="pink accent-1">
                    <template v-slot:activator>
                        <v-list-item-title>Products</v-list-item-title>
                    </template>
                    <app-sidebar :items="products" :route="route"></app-sidebar>
                </v-list-group>
            </template>
        </v-navigation-drawer>

        <app-snackbar
            :color="$store.state.snackbar.color"
            :text="$store.state.snackbar.text"
            :visible="$store.state.snackbar.visible"
        ></app-snackbar>
    </section>
</template>

<script>
export default {
    props: ["route", "user"],
    components: {
        "app-snackbar": () => import("./common/snackbar"),
        "app-sidebar": () => import("./common/sidebar.vue")
    },
    data() {
        return {
            sidebar: true,

            inventories: [
                {
                    icon: "file-document-multiple-outline",
                    title: "Report",
                    link: "/inventory/report"
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
