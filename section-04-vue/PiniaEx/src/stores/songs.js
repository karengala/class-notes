import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useSongStore = defineStore("songs", () => {
  const mySongs = reactive([]);
  const addSongs = (newSong)=>{
    mySongs.push(newSong);
    
  const emptySongsArray = (() => (mySongs)=[])

  return { mySongs, addSongs};
});

/* anadir 1 fiuncion para "add songs" */
/* anadir 1 fiuncion para limpiar el array o eliminar canciones */

/* componentes
tendremos que loopear las canciones del array. v-for. */
