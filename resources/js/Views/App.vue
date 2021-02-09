<template>
    <div class="main">
        <div class="col-xs-6 col-md-4 col-xl-3 d-inline-block" v-for="note in notes">
            <NoteCard :note="note" :key="note.id"></NoteCard>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return { 
                notes: [
                    
                ]
            }
        }    
    }
</script>
