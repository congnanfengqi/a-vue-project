import HYRequest from "@/network/service"
export function getCategory() {
  return HYRequest.request({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return HYRequest.request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return HYRequest.request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
