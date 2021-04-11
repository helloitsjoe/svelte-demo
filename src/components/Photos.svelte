<script>
  import { onMount } from 'svelte';
  let photos = [];

  onMount(async () => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/photos?_limit=20'
    );
    photos = await res.json();
  });
</script>

<div class="photo-grid">
  {#each photos as photo}
    <div class="photo">
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <p>{photo.title}</p>
    </div>
  {:else}
    Loading...
  {/each}
</div>

<style>
  .photo-grid {
    display: flex;
    flex-wrap: wrap;
  }

  .photo {
    flex: 1;
    margin: 0.5em;
  }

  p {
    font-weight: normal;
  }
</style>
