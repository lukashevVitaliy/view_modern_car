'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { ICarDetailsProps } from '@/types';
import { generateCarImageUrl } from '@/utils';

const CarDetails = ({ isOpen, closeModal, car }: ICarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-100"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-100 scale-95"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              {/* Панель модального окна */}
              <Dialog.Panel
                className="relative flex max-h-[90vh] w-full max-w-lg transform flex-col gap-5 overflow-y-auto
							rounded-2xl bg-white p-6 text-left shadow-xl transition-all"
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute right-2 top-2 z-10 w-fit rounded-full bg-primary-blue-100 p-2"
                >
                  <Image
                    src="/close.svg"
                    alt="close icon"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>
                {/* Блок с Изображением */}
                <div className="flex flex-1 flex-col gap-3">
                  {/* Основное изображение */}
                  <div className="relative h-40 w-full rounded-lg bg-pattern bg-cover bg-center">
                    <Image
                      src={generateCarImageUrl(car, 'angle')}
                      alt="car photo"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  {/* Дополнительные изображения */}
                  <div className="flex gap-3">
                    <div className="relative h-24 w-full flex-1 rounded-lg bg-primary-blue-100">
                      <Image
                        src={generateCarImageUrl(car, '29')}
                        alt="car photo"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="relative h-24 w-full flex-1 rounded-lg bg-primary-blue-100">
                      <Image
                        src={generateCarImageUrl(car, '33')}
                        alt="car photo"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="relative h-24 w-full flex-1 rounded-lg bg-primary-blue-100">
                      <Image
                        src={generateCarImageUrl(car, '13')}
                        alt="car photo"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Описание */}
                <div className="flex flex-1 flex-col gap-2">
                  <h2 className="text-xl font-semibold capitalize">
                    {car.make} {car.model}
                  </h2>

                  <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value]) => (
                      <div
                        className="flex w-full justify-between gap-5 text-right"
                        key={key}
                      >
                        <h4 className="capitalize text-gray-500">
                          {key.split('_').join(' ')}
                        </h4>
                        <p className="font-semibold text-black-100">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
