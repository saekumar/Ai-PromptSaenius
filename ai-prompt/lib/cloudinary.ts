import { v2 as cloudinay } from 'cloudinary'

cloudinay.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export default cloudinay
