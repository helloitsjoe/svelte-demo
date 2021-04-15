<script>
  import { onMount, onDestroy } from 'svelte';
  import { fly, fade } from 'svelte/transition';
  import { cubicOut, cubicIn } from 'svelte/easing';
  import { sleep } from '../utils';

  let photos = [];
  let batchNum = 0;
  let ready = true;
  let duration = 200;
  let delay = 40;

  $: handleBatchPhotos = () => photos.slice(8 * batchNum, 8 * batchNum + 8);
  $: currentBatch = handleBatchPhotos(batchNum);
  $: isFirstBatch = currentBatch.find(({ id }) => id === photos[0]?.id);
  $: isLastBatch = currentBatch.find(
    ({ id }) => id === photos[photos.length - 1]?.id
  );

  onMount(async () => {
    await sleep(500);
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/photos?_limit=20'
    );
    photos = await res.json();
  });

  onDestroy(() => {
    duration = 0;
    delay = 0;
    console.log('leaving');
  });

  let next = async () => {
    ready = false;
    await sleep(500);
    ready = true;
    batchNum += 1;
  };

  let prev = async () => {
    ready = false;
    await sleep(500);
    ready = true;
    batchNum -= 1;
  };
</script>

<!-- Bit of a hack to avoid transition when navigating away. Is there a better way? -->
<div out:fade={{ duration: 0 }}>
  <div class="buttons">
    <button on:click={prev} disabled={isFirstBatch}>Prev batch</button>
    <button on:click={next} disabled={isLastBatch}>Next batch</button>
  </div>
  {#if ready}
    <div class="photo-grid">
      {#each currentBatch as photo, i (photo.id)}
        <div
          class="photo"
          in:fly={{ duration, y: 20, delay: i * delay, easing: cubicOut }}
          out:fly={{ duration, y: -20, delay: i * delay, easing: cubicIn }}
        >
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title.slice(0, 20) + '...'}</p>
        </div>
      {:else}
        <h2>Loading...</h2>
      {/each}
    </div>
  {/if}
</div>

<style>
  .photo-grid {
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    margin: auto;
  }

  .photo {
    flex: 1;
    margin: 0.5em;
  }

  h2,
  .buttons {
    margin: auto;
  }

  p {
    font-weight: normal;
  }
</style>
