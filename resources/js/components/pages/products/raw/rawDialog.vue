<template>
    <v-card>
        <v-card-title>
            <span class="headline">{{ title }}</span>
        </v-card-title>

        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" class="py-0">
                        <v-text-field
                            disabled
                            label="Category"
                            :value="categoryName"
                        ></v-text-field>
                    </v-col>
                    <slot name="dialogForm"></slot>
                </v-row>
            </v-container>
        </v-card-text>

        <v-card-actions>
            <!-- <v-btn color="red darken-3" text>Delete</v-btn> -->
            <v-spacer></v-spacer>
            <v-btn text @click="$emit('closedialog')">Cancel</v-btn>
            <v-btn color="green darken-3" text @click="saveRaw()">Save</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    components: {},
    props: {
        title: {
            required: true
        },
        categoryName: {
            type: String
        }
    },
    data() {
        return {};
    },
    methods: {
        saveRaw() {
            if (this.title == "Add") {
                this.$emit("processadd");
            }
        }
    }
};
</script>
