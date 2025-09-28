import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/main.css'
import { Listing } from './cmponents/Listing.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Listing />
  </StrictMode>,
)
