import create from 'zustand'

export const useMapStore = create((set) => ({
  position: [46.1639, 16.8335],
  zoom: 13,
  setPosition: (position) => set({ position }),
  setZoom: (zoom) => set({ zoom }),
}))
