import create from 'zustand'

export const useMapStore = create((set, get) => ({
  position: [46.1639, 16.8335],
  zoom: 13,
  setPosition: (position) => set({ position }),
  setZoom: (zoom) => set({ zoom }),

  routes: {
    south: false,
    north: false,
  },

  setRouteActivity: (route, activity) => {
    const routes = { ...get().routes, [route]: activity }
    set({ routes })
  },
}))
