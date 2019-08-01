// Global libraries
import 'babel-polyfill'
import 'whatwg-fetch'


// Utils
import { ifExists } from './util'

// Scripts
import { tagImages, countPostMetaBoxEntries } from './js/content'
import { filterCards } from './js/credit-cards-page'
import { collectionPagination } from './js/collections'
import { paginationLatestPosts, paginationDeals } from './js/homepage'
import { persistedUtms } from './js/persisted-utms'
import { analytics } from './js/segment'
import { subscribe, subscribeText } from './js/subscribe'
import { activateMenuToggle } from './js/menu'
import { quickLinksTabs, quickLinksSelect } from './js/footer-quick-links'
import { backToTop } from './js/back-to-top'
import { generateStars } from './js/rating-stars'
import { CardGuideSticky } from 'js/card-guide'
import { RelatedSticky } from 'js/related-posts'
import { identifyUser } from 'js/comments'

// Catching errors
Promise.all([import('@sentry/browser')]).then(([Sentry]) => {
	// only load when not in dev environment
	if (!window.location.protocol) {
		Sentry.init({ dsn: 'https://d1fa66467bad4dcca9bb111695137ffa@sentry.io/1325961' })
	}
})

// Modules available for GTM scripts
import('js-cookie').then(Cookies => (window.Cookies = Cookies.default))
import('query-string').then(queryString => (window.queryString = queryString.default))

// context from wp_localize_script
const {
	pageContext: { home, isCreditCardsIndex, isPost, isSingle },
	userContext: { token }
} = window.PointHacksVuexContext

analytics()
persistedUtms()

if (home) {
	paginationLatestPosts()
	paginationDeals()
}

if (isCreditCardsIndex) {
	filterCards()
}

if (isPost) {
	tagImages()
	identifyUser()
}

if (isSingle) {
	countPostMetaBoxEntries()
}
ifExists('.related-posts-for-single[data-sticky]', RelatedSticky)
ifExists('.single-cardguide [data-sticky]', CardGuideSticky)
ifExists('.single-review [data-sticky]', RelatedSticky)
ifExists('.newsletter', subscribe)
ifExists('.newsletter', subscribeText)
ifExists('.back-to-top', backToTop)
ifExists('.entry-detail.rating', generateStars)
ifExists('.collection-navigation', collectionPagination)

const menus = [
	'#header .icons .icon',
	'#header .root-link-has-children',
	'#header .close-link',
	'#header .header-menu-main-title .icon',
	'#frequent-flyer-quides-view-more',
	'#comments .comments-body-title .icons .icon',
	'#comments .comments-body-title .title .text',
	'#post-bookings-view-more'
]

menus.forEach(el => ifExists(el, activateMenuToggle, el))

// Tabs for desktop
ifExists('#js-quick-links', quickLinksTabs, '#js-quick-links')

// Select for mobile
ifExists('#js-quick-links', quickLinksSelect, '#js-quick-links')

if (module.hot) {
	module.hot.accept()
}
