import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  // console.log(countries);
  const [selectedCountry, setSelectedCountry] = useState('USA');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
    console.log(countries.countries);
  return (
    <div >
      <h2>Currently Showing {selectedCountry}</h2>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {
          countries.countries.map(country => (
            <option
              key={country.name}
              value={country.iso3}
              selected={country.iso3 === selectedCountry }
            >
              {country.iso3}
            </option>
          ))
        }
      </select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  )
}