<script lang="ts">
  interface Bookmark {
    url: string;
    tag: string;
    name: string;
  }

  let bookmarks: Bookmark[] = [
    {"url": "", "tag": "youtube", "name": "pop science"},
    {"url": "", "tag": "youtube", "name": "didaskalia"},
    {"url": "", "tag": "youtube", "name": "lex friedman"},
    {"url": "", "tag": "reddit", "name": "polska"},
    {"url": "", "tag": "reddit", "name": "arch"}
  ]

  bookmarks.sort((a,b) => a.tag > b.tag ? 1 : (a.tag < b.tag ? -1 : 0))
</script>

<section class="bookmarks">
</section>

<style>
</style>
