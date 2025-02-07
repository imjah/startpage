<script lang="ts">
  let { message } = $props()
</script>

<p class="message">
  {message}
</p>

<style>
  .message {
    display: grid;
    align-content: center;
    justify-content: center;
    height: 100%;
    color: var(--color-fg-inactive);
    user-select: none;
  }
</style>
