import { useEffect } from 'react'

export const useImagesDidLoad = (
  imagesContainerRef: React.MutableRefObject<HTMLElement | null>,
  onImagesLoaded: () => void,
  deps: any[]
) => {
  useEffect(() => {
    // do your job
    const imagesPromises = makePromisesArray(imagesContainerRef)
    if (imagesPromises) {
      resolveAllPromises(imagesPromises, onImagesLoaded)
    }
  }, deps)
}

const makePromisesArray = (
  imagesContainerRef: React.MutableRefObject<HTMLElement | null>
): Promise<boolean>[] | null => {
  if (imagesContainerRef.current) {
    const result: Promise<boolean>[] = []
    const imagesNodes = imagesContainerRef.current.getElementsByTagName('img')
    Array.from(imagesNodes).map((img) => {
      result.push(
        new Promise((resolve) => {
          if (img.complete) resolve(true)
          img.onload = () => {
            resolve(true)
          }
          img.onerror = () => {
            resolve(false)
          }
        })
      )
    })
    return result
  } else {
    return null
  }
}

const resolveAllPromises = (
  promises: Promise<boolean>[],
  onImagesLoaded: () => void
) => {
  Promise.all(promises).then((_) => {
    onImagesLoaded()
  })
}
