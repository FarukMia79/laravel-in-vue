<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 m-auto">
                <div class="card">
                    <div class="card-header">
                        <RouterLink :to="{ name: 'list' }" class="btn btn-primary">List</RouterLink>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="UpdateData">
                            <div class="form-group mb-3">
                                <label>Product Name</label>
                                <input type="text" class="form-control" v-model="formData.product_name">
                                <span class="text-danger" v-for="(error, index) in formError.product_name"
                                    :key="index">{{ error }}</span>
                            </div>
                            <div class="form-group mb-3">
                                <label>Product Price</label>
                                <input type="text" class="form-control" v-model="formData.product_price">
                                <span class="text-danger" v-for="(error, index) in formError.product_price"
                                    :key="index">{{ error }}</span>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                product_name: '',
                product_price: ''
            },
            formError: {
                product_name: '',
                product_price: ''
            }
        }
    },
    mounted() {
        this.Edit();
    },
    methods: {
        Edit() {
            axios.get('/api/product/' + this.$route.params.id)
                .then((success) => {
                    this.formData = success.data
                }).catch((error) => {
                    console.log(error);
                });
        },
        UpdateData(){
            axios.put('/api/product/'+this.$route.params.id, this.formData)
            .then((success)=>{
                this.$router.push({name:'list'});
            }).catch((error)=>{
                console.log('error');
            });
        },
    }
};
</script>

<style scoped></style>
