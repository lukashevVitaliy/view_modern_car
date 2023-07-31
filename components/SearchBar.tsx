'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { SearchManufacturer } from './';
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`z-10 -ml-3 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  // производитель
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // если отсутствует марка или модель авто
    if (manufacturer === '' && model === '') {
      return alert('Please fill in the search bar !!!');
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  // если марка и модель выбраны
  const updateSearchParams = (model: string, manufacturer: string) => {
    // сохраняем все данные поиска
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    if (manufacturer) {
      searchParams.set('manufacturer', manufacturer);
    } else {
      searchParams.delete('manufacturer');
    }

    // как только получены новые данные поиска, формируем новый URL
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden " />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute ml-4 h-5 w-5"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden " />
      </div>
      <SearchButton otherClasses="max-sm:hidden " />
    </form>
  );
};

export default SearchBar;
