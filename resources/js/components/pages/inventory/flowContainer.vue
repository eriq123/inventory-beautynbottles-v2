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
                <app-flow-datatable
                    :toggleState="toggle.state"
                    @toggleChange="toggleChange"
                    @addaction="addaction"
                    @minusaction="minusaction"
                >
                </app-flow-datatable>
                <app-flow-dialog
                    :title="dialog.title"
                    :action="action"
                    :dialogShow="dialog.show"
                    @dialogshowchange="dialog.show = false"
                    :switchState="dialog.toggle"
                    @togglechangestate="dialog.toggle = !dialog.toggle"
                >
                </app-flow-dialog>
            </v-col>
        </v-row>
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
        "app-flow-datatable": () => import("./flow/datatable.vue"),
        "app-flow-dialog": () => import("./flow/dialog.vue")
    },
    data() {
        return {
            action: null,
            toggle: {
                state: false,
                loading: false,
                disabled: false
            },

            dialog: {
                show: false,
                toggle: true,

                title: null,
                raws: [],
                action: null
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
        addaction(item) {
            // i now have the toggle state and the action
            // action is add

            this.action = "add";
            this.actionProcess(item);
        },
        minusaction(item) {
            // i now have the toggle state and the action
            // action is minus
            this.action = "minus";
            this.actionProcess(item);
        },
        actionProcess(item) {
            if (this.toggle.state) {
                this.dialog.title = item.name;
            } else {
                this.dialog.title = `${item.category.name} - ${item.name}`;
            }
            this.dialog.toggle = this.dialog.show = true;
        },
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
