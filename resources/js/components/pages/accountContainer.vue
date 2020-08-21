<template>
    <v-container>
        <v-row>
            <v-col sm="8" offset-sm="2">
                <v-card outlined class="px-5">
                    <v-card-title>
                        My Account

                        <v-tooltip right v-if="tab !== 2">
                            <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    class="ml-3"
                                    color="green darken-4"
                                    v-bind="attrs"
                                    v-on="on"
                                    @click="setFormData"
                                    >mdi-sync</v-icon
                                >
                            </template>
                            <span>Click me to get the updated details.</span>
                        </v-tooltip>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-4" text @click="updateAction">
                            Update
                        </v-btn>
                    </v-card-title>
                    <v-card-text>
                        <v-tabs
                            v-model="tab"
                            background-color="transparent"
                            grow
                        >
                            <v-tab>Personal Information</v-tab>
                            <v-tab>Username</v-tab>
                            <v-tab>Password</v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                            <v-tab-item>
                                <v-row class="py-5">
                                    <v-col sm="12">
                                        <v-text-field
                                            label="First Name"
                                            v-model="formUserData.first_name"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col sm="12">
                                        <v-text-field
                                            label="Last Name"
                                            v-model="formUserData.last_name"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-tab-item>
                            <v-tab-item>
                                <v-row class="py-5">
                                    <v-col sm="12">
                                        <v-text-field
                                            label="Username"
                                            v-model="formUserData.username"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-tab-item>
                            <v-tab-item>
                                <v-row class="py-5">
                                    <v-col sm="12">
                                        <v-text-field
                                            type="password"
                                            label="Old Password"
                                            v-model="
                                                formPasswordData.old_password
                                            "
                                        ></v-text-field>
                                    </v-col>
                                    <v-col sm="12">
                                        <v-text-field
                                            type="password"
                                            label="New Password"
                                            v-model="
                                                formPasswordData.new_password
                                            "
                                        ></v-text-field>
                                    </v-col>

                                    <v-col sm="12">
                                        <v-text-field
                                            type="password"
                                            label="Confirm New Password"
                                            v-model="
                                                formPasswordData.new_password_confirmation
                                            "
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            tab: null,
            formUserData: {
                first_name: null,
                last_name: null,
                username: null
            },
            formPasswordData: {
                old_password: null,
                new_password: null,
                new_password_confirmation: null
            }
        };
    },
    created() {
        this.setFormData();
    },
    methods: {
        setFormData() {
            console.log(this.getUser);
            this.formUserData.first_name = this.getUser.first_name;
            this.formUserData.last_name = this.getUser.last_name;
            this.formUserData.username = this.getUser.username;
        },
        processUpdateAccount() {
            if (this.tab == 0) {
                this.formUserData.isUsername = false;
            } else if (this.tab == 1) {
                this.formUserData.isUsername = true;
            }
            axios
                .post("/account/update", this.formUserData)
                .then(response => {
                    const user = response.data.user;
                    if (this.tab == 0) {
                        this.$store.commit("setUserFirstAndLastName", {
                            first_name: user.first_name,
                            last_name: user.last_name
                        });
                    } else if (this.tab == 1) {
                        this.$store.commit("serUsername", user.username);
                    }
                    this.$store.commit("showSnackbar", {
                        color: true,
                        text: `Record has been updated.`
                    });
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        let customError = false;
                        if (error.response.data.errors) {
                            customError = true;
                            if (error.response.data.errors.first_name) {
                                this.$store.commit("showSnackbar", {
                                    color: false,
                                    text:
                                        error.response.data.errors.first_name[0]
                                });
                            } else if (error.response.data.errors.last_name) {
                                this.$store.commit("showSnackbar", {
                                    color: false,
                                    text:
                                        error.response.data.errors.last_name[0]
                                });
                            } else if (error.response.data.errors.username) {
                                this.$store.commit("showSnackbar", {
                                    color: false,
                                    text: error.response.data.errors.username[0]
                                });
                            }
                        }
                        if (!customError) {
                            this.$store.commit("errorSnackbar");
                        }
                    }
                });
        },
        processPasswordUpdate() {
            axios
                .post("/account/password", this.formPasswordData)
                .then(response => {
                    const user = response.data.status;
                    this.$store.commit("showSnackbar", {
                        color: true,
                        text: `Password has been updated.`
                    });
                    this.formPasswordData.old_password = this.formPasswordData.new_password = this.formPasswordData.new_password_confirmation = null;
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        if (error.response.data.error) {
                            this.$store.commit("showSnackbar", {
                                color: false,
                                text: error.response.data.error
                            });
                        } else {
                            this.$store.commit("errorSnackbar");
                        }
                    }
                });
        },
        updateAction() {
            if (this.tab == 0 || this.tab == 1) {
                this.processUpdateAccount();
            } else if (this.tab == 2) {
                this.processPasswordUpdate();
            }
        }
    },
    computed: {
        ...mapGetters({
            getUser: "getUser"
        })
    },
    watch: {}
};
</script>
