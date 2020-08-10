<template>
    <v-dialog v-model="showDialog" max-width="500px">
        <v-card>
            <v-card-title>
                <span class="headline">{{ this.title }}</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <!-- this is for product raw items -->
                    <!-- <v-card outlined v-if="dialog.raws">
                        <v-chip-group column class="mx-3">
                            <v-chip
                                v-for="(raw, index) in dialog.raws"
                                :key="index"
                            >
                                {{ raw.quantity }}x
                                {{ raw.name }}
                            </v-chip>
                        </v-chip-group>
                    </v-card> -->
                    <!-- this is for the form -->
                    <v-row>
                        <v-col sm="4">
                            <v-switch
                                v-model="toggleDialog"
                                inset
                                ripple
                                :color="action == 'add' ? 'success' : 'error'"
                                :label="toggleLabel"
                            >
                            </v-switch>
                        </v-col>
                        <v-col sm="8">
                            <v-text-field
                                autofocus
                                type="number"
                                label="Quantity"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text @click="$emit('dialogshowchange')">Cancel</v-btn>
                <v-btn text color="green darken-3">Save</v-btn>
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
            },
            status: null
        };
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
    watch: {
        switchState: function() {
            this.status = this.toggleLabel;
            console.log(`status is ${this.status}`);
        }
    }
};
</script>
