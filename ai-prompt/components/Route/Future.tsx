import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { styles } from '@/utils/styles'
type Props = {}

const Future = (props: Props) => {
  return (
    <div className="w-full relative p-4 md:p-[unset] grid md:grid-cols-2 py-8">
      <div className="col-span-1">
        <Image
          src={'https://pixner.net/aikeu/assets/images/tools-thumb.png'}
          alt=""
          className="md:w-[90%] md:ml--50px 2xl:ml-[-90px]"
          width={800}
          height={500}
        />
      </div>
      <div className="col-span-1 w-full flex justify-center items-center">
        <div className="2xl:w-[60%]">
          <Button
            className={`${styles.button} mb-[30px] h-[37px] bg-[#12211f]`}
          >
            Future
          </Button>
          <h5 className={`${styles.heading}mb-5 !heading-[50px]`}>
            Unveiling The Remarkable Capabilities Inherent in AI Generated
            Images
          </h5>
          <p className={`${styles.paragraph} pb-5`}>
            One of the foremost methodologies in AI generation involves the
            utilization of Generative Adversarial Networks
          </p>
        </div>
      </div>
    </div>
  )
}

export default Future
