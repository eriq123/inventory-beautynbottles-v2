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

            <v-btn href="/account" color="pink accent-1" text>
                <v-icon class="mr-1">mdi-account-circle-outline</v-icon>
                <template v-if="getUserInfo.is_admin">
                    {{ fullName }} (ADMIN)
                </template>
                <template v-else> {{ fullName }} (MODERATOR) </template>
            </v-btn>

            <v-divider vertical></v-divider>

            <v-btn text @click="logout" class="pink--text text--accent-1">
                <v-icon class="mr-1">mdi-logout</v-icon>
                logout
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="sidebar" app>
            <template v-if="getUserInfo.is_admin">
                <app-sidebar :items="admin.home" :route="route"></app-sidebar>
                <v-list-group value="true" color="pink accent-1">
                    <template v-slot:activator>
                        <v-list-item-title>Inventory</v-list-item-title>
                    </template>
                    <app-sidebar
                        :items="admin.inventories"
                        :route="route"
                    ></app-sidebar>
                </v-list-group>

                <v-list-group value="true" color="pink accent-1">
                    <template v-slot:activator>
                        <v-list-item-title>Products</v-list-item-title>
                    </template>
                    <app-sidebar
                        :items="admin.products"
                        :route="route"
                    ></app-sidebar>
                </v-list-group>
            </template>

            <template v-else>
                <app-sidebar :items="users.home" :route="route"></app-sidebar>
                <v-list-group value="true" color="pink accent-1">
                    <template v-slot:activator>
                        <v-list-item-title>Inventory</v-list-item-title>
                    </template>
                    <app-sidebar
                        :items="users.inventories"
                        :route="route"
                    ></app-sidebar>
                </v-list-group>

                <v-list-group value="true" color="pink accent-1">
                    <template v-slot:activator>
                        <v-list-item-title>Products</v-list-item-title>
                    </template>
                    <app-sidebar
                        :items="users.products"
                        :route="route"
                    ></app-sidebar>
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
import { mapGetters } from "vuex";
export default {
    props: ["route", "user"],
    components: {
        "app-snackbar": () => import("./common/snackbar"),
        "app-sidebar": () => import("./common/sidebar.vue")
    },
    data() {
        return {
            sidebar: true,

            users: {
                home: [
                    {
                        icon: "home",
                        title: "Home",
                        link: "/"
                    }
                ],
                inventories: [
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
            },
            admin: {
                home: [
                    {
                        icon: "home",
                        title: "Home",
                        link: "/"
                    }
                ],
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
            },
            getUserInfo: []
        };
    },
    created() {
        this.getUserInfo = this.user;
    },
    methods: {
        logout() {
            window.location.href = "/logout";
        }
    },
    computed: {
        fullName() {
            return (
                this.getUserInfo.first_name + " " + this.getUserInfo.last_name
            );
        }
    }
};
</script>
<style lang="scss" scoped></style>
