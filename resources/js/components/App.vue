<template>
    <section>
        <v-app-bar color="pink lighten-5 pink--text text--accent-1" flat app>
            <v-app-bar-nav-icon
                @click="sidebar = !sidebar"
            ></v-app-bar-nav-icon>
            <v-toolbar-title @click="home" style="cursor: pointer;">
                <v-icon small color="pink accent-1">mdi-basket</v-icon>
                ESHOP BEAUTY & BOTTLES
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
                href="/account"
                class="d-none d-md-flex align-center"
                color="pink accent-1"
                text
            >
                <v-icon class="mr-1">mdi-account-circle-outline</v-icon>
                <template v-if="getUserInfo.is_admin">
                    {{ fullName }} (ADMIN)
                </template>
                <template v-else> {{ fullName }} (MODERATOR) </template>
            </v-btn>
            <v-btn href="/account" class="d-md-none" color="pink accent-1" text>
                <v-icon class="mr-1">mdi-account-circle-outline</v-icon>
                {{ firstName }}
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="sidebar" app>
            <template v-if="getUserInfo.is_admin">
                <app-sidebar :items="admin.home" :route="route"></app-sidebar>

                <v-divider></v-divider>

                <v-list-group value="true" color="pink accent-1">
                    <template v-slot:activator>
                        <v-list-item-title>Inventory</v-list-item-title>
                    </template>
                    <app-sidebar
                        :items="admin.inventories"
                        :route="route"
                    ></app-sidebar>
                </v-list-group>

                <v-divider></v-divider>

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

                <v-divider></v-divider>

                <v-list-group value="true" color="pink accent-1">
                    <template v-slot:activator>
                        <v-list-item-title>Inventory</v-list-item-title>
                    </template>
                    <app-sidebar
                        :items="users.inventories"
                        :route="route"
                    ></app-sidebar>
                </v-list-group>

                <v-divider></v-divider>

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

            <v-divider></v-divider>

            <app-sidebar :items="logoutRoute" :route="route"></app-sidebar>
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

            logoutRoute: [
                {
                    icon: "logout",
                    title: "Logout",
                    link: "/logout"
                }
            ],
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
        home() {
            window.location.href = "/";
        }
    },
    computed: {
        fullName() {
            return (
                this.getUserInfo.first_name + " " + this.getUserInfo.last_name
            );
        },
        firstName() {
            return this.getUserInfo.first_name;
        }
    }
};
</script>
