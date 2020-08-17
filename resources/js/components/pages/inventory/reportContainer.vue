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
            </v-col>
        </v-row>
        <app-report-datatable
            :toggleState="toggle.state"
            @toggleChange="toggleChange"
        ></app-report-datatable>
    </v-container>
</template>
<script>
export default {
    components: {
        "app-report-datatable": () => import("./report/datatable.vue")
    },
    data() {
        return {
            toggle: {
                state: false,
                loading: false,
                disabled: false
            }
        };
    },
    methods: {
        toggleChange(value) {
            this.toggle.disabled = this.toggle.loading = value;
        }
    },
    computed: {
        switchLabel() {
            return this.toggle.state == true ? "Products" : "Raw Items";
        }
    }
};
</script>
