import Vue from 'vue'
import Router from 'vue-router'

const _7563e4e8 = () => import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */).then(m => m.default || m)
const _373e0f7c = () => import('..\\pages\\pr.vue' /* webpackChunkName: "pages_pr" */).then(m => m.default || m)
const _364e7feb = () => import('..\\pages\\pa.vue' /* webpackChunkName: "pages_pa" */).then(m => m.default || m)
const _c3ee5000 = () => import('..\\pages\\params.vue' /* webpackChunkName: "pages_params" */).then(m => m.default || m)
const _86908a20 = () => import('..\\pages\\tens.vue' /* webpackChunkName: "pages_tens" */).then(m => m.default || m)
const _056d4170 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/test",
			component: _7563e4e8,
			name: "test"
		},
		{
			path: "/pr",
			component: _373e0f7c,
			name: "pr"
		},
		{
			path: "/pa",
			component: _364e7feb,
			name: "pa"
		},
		{
			path: "/params",
			component: _c3ee5000,
			name: "params"
		},
		{
			path: "/tens",
			component: _86908a20,
			name: "tens"
		},
		{
			path: "/",
			component: _056d4170,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
