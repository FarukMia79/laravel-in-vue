<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 m-auto">
                <div class="card">
                    <div class="card-header">
                        <RouterLink :to="{ name: 'list' }" class="btn btn-primary">List</RouterLink>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="storeData">
                            <div class="form-group mb-3">
                                <label>Product Name</label>
                                <input type="text" class="form-control" v-model="formData.product_name">
                                <span class="text-danger" v-for="(error , index) in formError.product_name" :key="index">{{ error }}</span>
                            </div>
                            <div class="form-group mb-3">
                                <label>Product Price</label>
                                <input type="text" class="form-control" v-model="formData.product_price">
                                <span class="text-danger" v-for="(error , index) in formError.product_price" :key="index">{{ error }}</span>
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
    data(){
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
    methods: {
        storeData(){
            axios.post('/api/product', this.formData)
            .then((success)=>{
                this.$router.push({name:'list'});
            }).catch((error)=>{
                this.formError.product_name = error.response.data.errors.product_name;
                this.formError.product_price = error.response.data.errors.product_price;

            });
        }
    }
};
</script>

<style scoped></style>
