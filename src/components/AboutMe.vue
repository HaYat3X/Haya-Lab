<template>
    <div class="about-me">
        <div class="container">
            <h2>{{ AboutMe }}</h2>

            <div class="text-center">
                <img src="../assets/avatar.png" alt="アバター" class="avatar-img">
            </div>

            <p class="fw-bold mt-3">
                {{ name }}
            </p>

            <p>
                {{ AboutProfile }}
            </p>
        </div>
    </div>
</template>


<script>
export default {
    name: 'AboutMe',
    data() {
        return {
            AboutMe: "About Me",
            name: "竹田 颯（たけだ はやて）",
            AboutProfile: "鳥取県出身のエンジニア。 専門学校でIT技術を学んだのち、20才でIT業界へ。 専門学校で、Webサービスの企画や開発、運用までを手がけ、フロントエンドやバックエンドはもちろん、インフラまで幅広く学習を続けてきました。 将来は、時代に合わせた技術を追いかけつつ、クライアントに寄り添い、クライアント悩みや課題を解決できる。 そんなエンジニアになりたいと考えています。",
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

/* タブレット/デスクトップ */
@media (min-width: 521px) {
    .about-me h2 {
        font-size: 50px;
    }

    .about-me p {
        width: 450px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>