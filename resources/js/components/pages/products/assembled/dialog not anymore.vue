<template> </template>
<script>
export default {
    components: {
        "app-autocomplete": () => import("@/components/common/autocomplete.vue")
    },
    props: {
        selectedID: {
            type: Number
        },
        selectedName: {
            type: String
        }
    },
    data() {
        return {
            // autocomplete
            raw_collection: [],
            loading: false,
            selectedRaw: null,
            raw_name: null
        };
    },
    methods: {
        rawSearch() {
            axios
                .post("/products/raw/search", {
                    name: this.raw_name
                })
                .then(response => {
                    if (response.data.raw.length > 0) {
                        this.raw_collection = response.data.raw;
                    } else {
                        this.raw_collection = [];
                    }
                    this.loading = false;
                })
                .catch(error => {
                    if (error.response) {
                        // this.$emit(
                        //     "showSnackbar",
                        //     "Something went wrong.",
                        //     "red darken-1"
                        // );
                        console.log(error.response);
                    }
                    this.loading = false;
                });
        },
        nameChange(value) {
            this.raw_name = value;
        },
        saveAssemble() {
            console.log(this.formData);
            console.log(this.raw_name);
            console.log(this.selectedRaw);

            // if (this.formData.quantity) {
            //     axios
            //         .post("/products/assembled/attach", this.formData)
            //         .then(response => {
            //             const raw = {
            //                 id: this.formData.raw_id,
            //                 name: this.raw_name,
            //                 units_needed: this.formData.quantity
            //             };
            //             this.assembledItems.push(raw);
            //             // this.showSnackbar(`${this.raw_name} added.`);
            //             this.showForm = false;
            //         })
            //         .catch(error => {
            //             if (error.response) {
            //                 console.log(error.response);
            //                 // this.$emit(
            //                 //     "showSnackbar",
            //                 //     "Units needed field is required.",
            //                 //     "red darken-1"
            //                 // );
            //             }
            //         });
            // } else {
            //     // this.$emit(
            //     //     "showSnackbar",
            //     //     "Units needed field is required.",
            //     //     "red darken-1"
            //     // );
            // }
        },
        selectedChange(value) {
            this.selectedRaw = value;
            if (value) {
                this.formData.raw_id = value.id;
            } else {
                this.formData.raw_id = null;
            }
        }
        // deleteDialog(item) {
        //     const assembledIndex = this.assembledItems.indexOf(item);
        //     this.formData.product_id = this.selected.id;
        //     this.formData.raw_id = item.id;
        //     this.loading = true;
        //     axios
        //         .post("/products/assembled/detach", this.formData)
        //         .then(response => {
        //             console.log(response.data);
        //             // this.showSnackbar(`${item.name} removed.`);
        //             this.assembledItems.splice(assembledIndex, 1);
        //             this.loading = false;
        //         })
        //         .catch(error => {
        //             if (error.response) {
        //                 console.log(error.response);
        //                 // this.$emit(
        //                 //     "showSnackbar",
        //                 //     "Units needed field is required.",
        //                 //     "red darken-1"
        //                 // );
        //             }
        //         });
        // }
    },
    watch: {}
};
</script>
