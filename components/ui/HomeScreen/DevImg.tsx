import Image from 'next/image';

interface IDevImgProps {
  containerStyles?: string;
  imgSrc: string;
  imageStyle?: string;
}

const DevImg = ({ containerStyles, imgSrc, imageStyle }: IDevImgProps) => {
  return (
    <div className={`${containerStyles}`}>
      <Image className={`${imageStyle}`} src={imgSrc} fill priority alt='' />
    </div>
  );
};

export default DevImg;
