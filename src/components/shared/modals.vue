<template>
    <modal name="my-first-modal">
        This is my first modal
    </modal>
</template>

<script>
import VModal from 'vue-js-modal'

export default {
    name: 'MyComponent',
    
    methods: {
        show () {
            this.$modal.show('my-first-modal');
        },
        hide () {
            this.$modal.hide('my-first-modal');
        }
    },
    // mount () {
    //     this.show()
    // }
}
</script>