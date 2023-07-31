'use client';

import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';
import { updateSearchParams } from '@/utils';
import { IShowMore } from '@/types';

const ShowMore = ({ pageNumber, isNext }: IShowMore) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    const newPathName = updateSearchParams('limit', `${newLimit}`);

    router.push(newPathName);
  };

  return (
    <div className="flex-center mt-10 w-full gap-5">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
