<script>
  export let name;
</script>

<h1>Hello {name}!</h1>
<slot />

<style>
  h1 {
    color: tomato;
    font-size: 4em;
    font-weight: 100;
  }
</style>
