<template>
    <v-dialog v-model="showDialog" max-width="500px">
        <v-card>
            <v-card-title>
                <span class="headline">{{ this.title }}</span>
            </v-card-title>
            <v-card-text>
                <v-row no-gutters>
                    <v-col sm="4">
                        <v-switch
                            v-model="toggleDialog"
                            inset
                            ripple
                            :color="action == 'add' ? 'success' : 'error'"
                            :label="toggleLabel"
                            :disabled="toggleState"
                        >
                        </v-switch>
                    </v-col>
                    <slot name="quantity"></slot>
                </v-row>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="$emit('dialogshowchange')">Cancel</v-btn>
                <v-btn text color="green darken-3" @click="saveProductRaw()"
                    >Save</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    props: {
        dialogShow: {
            type: Boolean,
            default: false
        },
        action: {
            type: String
        },
        title: {
            type: String
        },
        switchState: {
            type: Boolean
        },
        id: {
            type: Number,
            required: true
        },
        toggleState: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            add: {
                true: "Purchase",
                false: "RTS"
            },
            minus: {
                true: "Sold",
                false: "Loss"
            }
        };
    },
    methods: {
        saveProductRaw() {
            this.$emit("saveproductraw", {
                action: this.action,
                status: this.toggleLabel,
                id: this.id
            });
        }
    },
    computed: {
        showDialog: {
            get: function() {
                return this.dialogShow;
            },
            set: function() {
                this.$emit("dialogshowchange");
            }
        },
        toggleDialog: {
            get: function() {
                return this.switchState;
            },
            set: function() {
                this.$emit("togglechangestate");
            }
        },
        toggleLabel: function() {
            if (this.action == "add") {
                return this.switchState == true
                    ? this.add.true
                    : this.add.false;
            } else {
                return this.switchState == true
                    ? this.minus.true
                    : this.minus.false;
            }
        }
    },
    watch: {}
};
</script>
