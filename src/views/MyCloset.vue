<template>
    <div style="background-color: #f6f6f6;">
        <div class="header">
            <AppHeader />
        </div>

        <div class="main container" style="">
            <img src="../assets/my_closet/my_closet.png" alt="my-closet-img" class="my-closet-img img-fluid">

            <div class="possible mx-auto" style="width: 930px;">
                <h2>できること</h2>

                <div class="">
                    <div class="possible-item">
                        <div class="possible-content p-4" style="background-color: #ffffff;">
                            <div class="text-center">
                                <img src="../assets/banner.png" alt="MY CLOSET" class="possible-img">
                            </div>

                            <label>コーディネート投稿</label>

                            <p class="mt-2">
                                自分のコーディネートを着用した洋服と共に投稿できます。
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="motive-for-production">
                <h2>制作動機</h2>

                <div class="container">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate exercitationem nesciunt culpa
                        esse
                        non, nemo impedit velit blanditiis magni vel necessitatibus harum placeat officia sint reiciendis
                        odio
                        aut possimus et?
                    </p>
                </div>
            </div>

            <div class="possible">
                <h2>使用技術</h2>

                <div class="container">
                    <div class="row">

                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <AppFooter />
        </div>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';


export default {
    name: 'MyClosetView',
    components: {
        AppFooter,
        AppHeader
    },
    data() {
        return {
            showModal: false,
            modalTitle: 'Modal Title'
        };
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    },
}
</script>

<style scoped>
.main {
    background-color: #f6f6f6;
}

/* .possible {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #e6e6e6;
}

.motive-for-production {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f6f6f6;
}

.motive-for-production h2 {
    font-size: 28px;
    margin-bottom: 15px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    text-align: center;
}

.possible h2 {
    font-size: 28px;
    margin-bottom: 15px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    text-align: center;
}


.possible-img {
    width: 70%;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
}

.possible-content label {
    font-size: 20px;
    color: #4b709a;
    font-weight: bold;
    margin-top: 20px;
} */

/* .my-closet-img{
    width: 100%;
    height: auto;
}

.possible{
    text-align: center;
    width: 230px;
}
.possible .possible-img{
    border-radius: 50%;
    width: 230px;
    height: 230px;
} */
</style>