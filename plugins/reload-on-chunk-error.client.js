const RELOAD_KEY = 'kansai09:chunk-error-reload-path'

const chunkLoadErrorMessages = [
  'Failed to fetch dynamically imported module',
  'error loading dynamically imported module',
  'Importing a module script failed',
  'Load failed for module script',
]

const isChunkLoadError = (error) => {
  const message = String(error?.message || error || '')

  return chunkLoadErrorMessages.some((chunkLoadErrorMessage) => (
    message.includes(chunkLoadErrorMessage)
  ))
}

const reloadOnce = (event) => {
  const currentPath = `${window.location.pathname}${window.location.search}`

  if (sessionStorage.getItem(RELOAD_KEY) === currentPath) {
    return
  }

  event?.preventDefault?.()
  sessionStorage.setItem(RELOAD_KEY, currentPath)
  window.location.reload()
}

export default defineNuxtPlugin(() => {
  window.addEventListener('vite:preloadError', (event) => {
    reloadOnce(event)
  })

  window.addEventListener('unhandledrejection', (event) => {
    if (isChunkLoadError(event.reason)) {
      reloadOnce(event)
    }
  })

  onNuxtReady(() => {
    sessionStorage.removeItem(RELOAD_KEY)
  })
})
