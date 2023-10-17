<template>
    <div class="contact-me">
        <div class="container">
            <h2>{{ ContactMe }}</h2>
            <p>
                {{ explanation }}
            </p>

            <div class="contact">
                <a href="https://forms.gle/9cfzT3K3yGsZMURAA" target="_blank">
                    CONTACT
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactMe',
    data() {
        return {
            ContactMe: "Contact Me",
            explanation: "最後までサイトをご覧いただきありがとうございました。もし、このサイトや私についてご意見やご要望がありましたら、こちらのお問い合わせボタンからお問い合わせください。",
        }
    },
}
</script>

<style scoped>
.contact-me {
    background-color: #e6e6e6;
    height: 100vh;
    display: flex;
    align-items: center;
}

.contact-me h2 {
    font-size: 28px;
    margin-bottom: 50px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    text-align: center;
}

.contact-me p {
    font-size: 16px;
}

.contact-me .contact {
    text-align: center;
    margin-top: 50px;
}

.contact-me .contact a {
    background-color: #4b709a;
    color: #ffffff;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
}

/* タブレット/デスクトップ */
@media (min-width: 521px) {
    .contact-me h2 {
        font-size: 50px;
    }

    .contact-me p {
        width: 450px;
        margin: 0 auto;
    }
}
</style>