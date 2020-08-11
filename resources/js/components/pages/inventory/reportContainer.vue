<template>
    <v-container>
        <v-row>
            <v-col>
                <v-switch
                    class="ml-3"
                    v-model="toggle.state"
                    inset
                    ripple
                    :disabled="toggle.disabled"
                    :loading="toggle.disabled"
                    :label="`Filtered by: ${switchLabel}`"
                >
                </v-switch>
                <!-- <app-report-info
                    class="right"
                    :message="
                        'Hover on remark to see the quantity and reorder point.'
                    "
                ></app-report-info> -->
            </v-col>
        </v-row>
        <app-report-datatable
            :toggleState="toggle.state"
            @toggleChange="toggleChange"
        ></app-report-datatable>
        <app-snackbar
            :color="snackbar.color"
            :text="snackbar.text"
            :timeout="snackbar.timeout"
            :visible="snackbar.visible"
            @hideSnackbar="snackbar.visible = false"
        ></app-snackbar>
    </v-container>
</template>
<script>
export default {
    components: {
        "app-report-datatable": () => import("./report/datatable.vue"),
        "app-report-info": () => import("@/components/common/infoTooltip")
    },
    data() {
        return {
            toggle: {
                state: false,
                loading: false,
                disabled: false
            },
            // snackbar
            snackbar: {
                color: "success",
                text: null,
                timeout: 2000,
                visible: false
            }
        };
    },
    methods: {
        toggleChange(value) {
            this.toggle.disabled = this.toggle.loading = value;
        },
        showSnackbar(message, color = "success") {
            this.snackbar.text = message;
            this.snackbar.color = color;
            this.snackbar.visible = true;
        }
    },
    computed: {
        switchLabel() {
            return this.toggle.state == true ? "Products" : "Raw Items";
        }
    }
};
</script>
