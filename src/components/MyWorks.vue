<template>
    <div class="my-works">
        <div class="container">
            <h2>Works</h2>

            <p>
                私が腕によりをかけて制作した、制作物をご覧ください。
            </p>

            <div class="works-item row g-2">
                <div class="works-content">
                    <button @click="openModal('MyClosetModal')" class="btn-original">
                        <img src="../../public/assets/my_closet/1.png" alt="MY CLOSET" class="works-img">
                    </button>

                    <Transition name="fade">
                        <component :is="currentModal" :show="showModal" @close="closeModal" />
                    </Transition>

                    <p class="text-center mt-2">
                        <small>「MY CLOSET」</small>
                    </p>
                </div>

                <div class="works-content">
                    <button @click="openModal('RealIntentionModal')" class="btn-original">
                        <img src="../../public/assets/Real_intentioN/1.png" alt="MY CLOSET" class="works-img">
                    </button>

                    <Transition name="fade">
                        <component :is="currentModal" :show="showModal" @close="closeModal" />
                    </Transition>

                    <p class="text-center mt-2">
                        <small>「Real intentioN」</small>
                    </p>
                </div>

                <div class="works-content">
                    <button @click="openModal('TypingModal')" class="btn-original">
                        <img src="../../public/assets/typing/1.png" alt="MY CLOSET" class="works-img">
                    </button>

                    <Transition name="fade">
                        <component :is="currentModal" :show="showModal" @close="closeModal" />
                    </Transition>

                    <p class="text-center mt-2">
                        <small>「キーボードスプリント」</small>
                    </p>
                </div>

                <div class="works-content">
                    <button @click="openModal('PortfolioModal')" class="btn-original">
                        <!-- <img src="../../public/assets/typing/1.png" alt="MY CLOSET" class="works-img"> -->
                        coming soon...
                    </button>

                    <Transition name="fade">
                        <component :is="currentModal" :show="showModal" @close="closeModal" />
                    </Transition>

                    <p class="text-center mt-2">
                        <small>「Haya Lab!」</small>
                    </p>
                </div>

                <div class="works-content">
                    <button @click="openModal('QuizModal')" class="btn-original">
                        <img src="../../public/assets/quiz/1.png" alt="MY CLOSET" class="works-img">
                    </button>

                    <Transition name="fade">
                        <component :is="currentModal" :show="showModal" @close="closeModal" />
                    </Transition>

                    <p class="text-center mt-2">
                        <small>「ポケモン Quiz」</small>
                    </p>
                </div>

                <div class="works-content">
                    <button @click="openModal('AwordModal')" class="btn-original">
                        <img src="../../public/assets/a_word/1.png" alt="MY CLOSET" class="works-img">
                    </button>

                    <Transition name="fade">
                        <component :is="currentModal" :show="showModal" @close="closeModal" />
                    </Transition>

                    <p class="text-center mt-2">
                        <small>「A-word」</small>
                    </p>
                </div>

                <div class="works-content">
                    <button @click="openModal('NewsModal')" class="btn-original">
                        <img src="../../public/assets/news/1.png" alt="MY CLOSET" class="works-img">
                    </button>

                    <Transition name="fade">
                        <component :is="currentModal" :show="showModal" @close="closeModal" />
                    </Transition>

                    <p class="text-center mt-2">
                        <small>「Simple newS」</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import AwordModal from './productions/AwordModal.vue';
import MyClosetModal from './productions/MyClosetModal.vue';
import NewsModal from './productions/NewsModal.vue';
import PortfolioModal from './productions/PortfolioModal.vue';
import QuizModal from './productions/QuizModal.vue';
import RealIntentionModal from './productions/RealIntentionModal.vue';
import TypingModal from './productions/TypingModal.vue';

export default {
    name: 'MyWorks',
    components: {
        MyClosetModal,
        RealIntentionModal,
        TypingModal,
        PortfolioModal,
        QuizModal,
        AwordModal,
        NewsModal,
    },
    data() {
        return {
            showModal: false,
            currentModal: null,
        };
    },
    methods: {
        openModal(modalType) {
            this.showModal = true;
            this.currentModal = modalType;
        },
        closeModal() {
            this.showModal = false;
        }
    },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.my-works {
    padding: 40px 0;
    background-color: #e6e6e6;
}

.my-works h2 {
    font-size: 28px;
    margin-bottom: 15px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    text-align: center;
}

.my-works p {
    font-size: 16px;
    text-align: center;
}

.works-item {
    margin-top: 30px;
}

.works-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
}

.btn-original {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
}

/* タブレット */
@media (min-width: 768px) and (max-width: 991px) {
    .my-works {
        padding: 60px 0;
        background-color: #e6e6e6;
    }

    .my-works h2 {
        font-size: 50px;
    }


    .works-item {
        display: flex;
    }

    .works-content {
        width: 50%;
    }
}

/* デスクトップ */
@media (min-width: 992px) {
    .my-works {
        padding: 80px 0;
        background-color: #e6e6e6;
    }

    .my-works h2 {
        font-size: 50px;
    }

    .works-item {
        display: flex;
        width: 930px;
        margin: 0 auto;
    }

    .works-content {
        width: 33.3%;
    }
}
</style>