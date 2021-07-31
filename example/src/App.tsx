import React from 'react'
import { useImagesDidLoad } from 'on-images-did-load'
import { IImage, carsImagesGallery, natureImagesGallery } from './defaultImages'
import { useState } from 'react'
import { useRef } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ClipLoader from 'react-spinners/ClipLoader'

const App = () => {
  const [imagesList, setImagesList] = useState<IImage[]>(natureImagesGallery)
  const [imagesAreLoading, setImagesAreLoading] = useState<boolean>(true)
  const [activeTab, setActiveTab] = useState<number>(0)
  const imagesContainerRef = useRef<HTMLDivElement>(null)

  const handleTabChange = (newValue: number) => {
    setImagesAreLoading(true)
    setActiveTab(newValue)
    const newGallery =
      newValue === 0
        ? getImagesArrayAndPreventBrowserCache(natureImagesGallery)
        : getImagesArrayAndPreventBrowserCache(carsImagesGallery)
    setImagesList(newGallery)
  }
  const getImagesArrayAndPreventBrowserCache = (imagesArray: IImage[]) => {
    return imagesArray.map((img) => {
      return {
        src: img.src + '?v=' + Math.floor(Math.random() * 100),
        alt: img.alt
      }
    })
  }

  useImagesDidLoad(
    imagesContainerRef,
    () => {
      setImagesAreLoading(false)
    },
    [imagesList]
  )

  return (
    <React.Fragment>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>Nice gallery</Typography>
        </Toolbar>
        <Tabs
          value={activeTab}
          onChange={(_, v) => handleTabChange(v)}
          aria-label='simple tabs example'
        >
          <Tab label='Nature gallery' />
          <Tab label='Cars gallery' />
        </Tabs>
      </AppBar>
      <main
        className={
          imagesAreLoading ? 'mainZone spinning centerVerically' : 'mainZone'
        }
      >
        {imagesAreLoading ? (
          <div className='sweet-loading'>
            <ClipLoader
              size={150}
              color={'#123abc'}
              loading={imagesAreLoading}
            />
          </div>
        ) : null}
        <div
          ref={imagesContainerRef}
          className='gallery'
          style={{
            padding: imagesAreLoading ? 0 : 50
          }}
        >
          {imagesList.map((img, index) => (
            <div key={index} className='gallery__img'>
              <img src={img.src} alt={img.alt} className='gallery__img'></img>
            </div>
          ))}
        </div>
      </main>
    </React.Fragment>
  )
}

export default App
