<template>
    <v-list-item-group active-class="pink--text text--accent-1">
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :href="item.link"
            link
        >
            <v-list-item-icon>
                <v-icon
                    :class="
                        item.link === route ? 'pink--text text--accent-1' : ''
                    "
                    >mdi-{{ item.icon }}
                </v-icon>
            </v-list-item-icon>
            <v-list-item-title
                :class="item.link === route ? 'pink--text text--accent-1' : ''"
                >{{ item.title }}
            </v-list-item-title>
        </v-list-item>
    </v-list-item-group>
</template>
<script>
export default {
    props: {
        items: {
            required: true
        },
        route: {
            required: true
        }
    },
    data() {
        return {};
    },
    created() {}
};
</script>
