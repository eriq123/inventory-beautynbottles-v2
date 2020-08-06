<template>
    <v-card>
        <v-card-title>
            <span class="headline">{{ dialogOperation }}</span>
        </v-card-title>

        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field
                            disabled
                            label="Category"
                            :value="dialogCategory"
                        ></v-text-field>
                    </v-col>
                    <slot name="dialogForm"></slot>
                </v-row>
            </v-container>
        </v-card-text>

        <v-card-actions>
            <v-btn
                color="red darken-3"
                text
                v-if="dialogOperation == 'Edit'"
                @click="$emit('deleteRaw')"
                >Delete</v-btn
            >
            <v-spacer></v-spacer>
            <v-btn text @click="$emit('close')">Cancel</v-btn>
            <v-btn color="green darken-3" text @click="$emit('saveUpdateRaw')"
                >Save</v-btn
            >
            <!-- <slot name="buttons"></slot> -->
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    props: {
        dialogCategory: {
            required: true
        },
        dialogOperation: {
            required: true
        }
    }
};
</script>
