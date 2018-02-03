import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Index'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong/Index'
import EditSong from '@/components/EditSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'songs'
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      // redirected from register
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs/create',
      name: 'song-create',
      component: CreateSong
    },
    {
      // redirected from login
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      // directed from SongPanel.vue when view button pressed, params: {songId: song.id}
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      // directed from SongMetadata.vue when edit button pressed, params: {songId: song.id}
      path: '/songs/:songId/edit',
      name: 'song-edit',
      component: EditSong
    }
  ]
})
