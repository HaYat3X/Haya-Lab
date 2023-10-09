<template>
    <div class="modal" v-if="show">
        <div class="modal-dialog-origin">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">MY CLOSET</h4>
                    <button type="button" class="close" @click="closeModal">&times;</button>
                </div>

                <div class="modal-body-test">
                    <div class="right--area">
                        <div class="どんなサービス、制作動機">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad perspiciatis, illum suscipit
                                nostrum id voluptatem quisquam delectus enim corrupti, dignissimos adipisci unde magni hic!
                                A veniam obcaecati numquam nobis enim!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusantium ad culpa
                                tempora non illum quo dolor ullam natus, incidunt quae repudiandae et vel cumque ipsa,
                                dolores, consequuntur eveniet officia!
                            </p>

                            <p>
                                詳細はnoteの記事に飛ばす
                                github
                                applink
                            </p>
                        </div>

                        <div class="使用技術">
                            <h5 for="" class="text-center">使用技術</h5>

                            <p>
                                html/css
                            </p>
                        </div>
                    </div>

                    <div class="right--area">
                        <div class="スライドショーでスクショ添付">
                            <img src="../../assets/my_closet/my_closet.png" alt="" style="width: 100%;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: Boolean
    },
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
};
</script>

<style scoped>
/* Add your modal styles here */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-dialog-origin {
    background: #fff;

    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    width: 90%;
    height: 90vh;
}

.modal-header {
    padding: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-body-test {
    padding: 15px;
    overflow-y: auto;
    max-height: 80vh;
}
</style>
