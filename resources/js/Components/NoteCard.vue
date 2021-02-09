<template>
  <div class="card p-2 m-2 mt-3 text center">
  <div class="card-body">
    <h5 class="card-title">{{note.title}}</h5>
    <p class="card-text">{{note.text}}</p>
    <button class="btn btn-primary">Edit</button>
    <button class="btn btn-danger">Delete</button>
  </div>
</div>
</template>
<script>
export default {
    data: function() {
        return {
        }
    },
    props: ['note']
}
</script>