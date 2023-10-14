<template>
    <div class="about-me">
        <div class="container">
            <h2>{{ AboutMe }}</h2>

            <div class="text-center">
                <img src="../assets/avatar.png" alt="アバター" class="avatar-img">
            </div>

            <p>
                {{ AboutProfile }}
            </p>

            <div class="profile">
                <router-link to="/my_closet">
                    PROFILE
                </router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'AboutMe',
    data() {
        return {
            AboutMe: "About Me",
            AboutProfile: "鳥取県出身のエンジニア。専門学校でIT技術を学んだのち、20才でIT業界へ。専門学校では、サービスの企画や開発、運用までを手がけ、フロントエンドやバックエンドはもちろん、インフラまで幅広く学習を続けてきました。",
        }
    },
}
</script>

<style scoped>
.about-me {
    background-color: #f6f6f6;
    height: 100vh;
    display: flex;
    align-items: center;
}

.about-me h2 {
    font-size: 28px;
    margin-bottom: 50px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    text-align: center;
}

.avatar-img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
}

.about-me .profile {
    text-align: center;
    margin-top: 50px;
}

.about-me .profile a {
    background-color: #4b709a;
    color: #ffffff;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
}

.about-me p {
    margin-top: 20px;
    font-size: 16px;
}

/* タブレット/デスクトップ */
@media (min-width: 521px) {
    .about-me h2 {
        font-size: 50px;
    }

    .about-me p {
        width: 450px;
        margin: 20px auto 0;
    }
}
</style>