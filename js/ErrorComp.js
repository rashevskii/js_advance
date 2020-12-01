Vue.component("error", {
    data() {
        return {
            showError: false,
        }
    },
    template: `
        <div class="error-overlay" v-show="showError">
            <div class="error-inner">
                <span class="error-close" @click="showError = !showError">X</span>
                <p>Failed to load data!</p>
            </div>
        </div>
    `
});