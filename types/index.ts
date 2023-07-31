import React, { MouseEventHandler } from 'react';

export interface ICustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
  textStyles?: string;
  rightIcon?: string;
  isDisable?: boolean;
}

export interface ISearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface ICarCard {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface ICarDetailsProps {
  isOpen: boolean;
  closeModal: (isOpen: boolean) => void;
  car: ICarCard;
}

export interface IFilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface IHomeProps {
  searchParams: IFilterProps;
}

export interface IOptionProps {
  title: string;
  value: string;
}

export interface ICustomFilter {
  title: string;
  options: IOptionProps[];
}

export interface IShowMore {
  pageNumber: number;
  isNext: boolean;
}
