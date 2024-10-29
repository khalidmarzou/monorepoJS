import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function CountryCityDropdown() {
  const [selectedCountryId, setSelectedCountryId] = useState(null);

  // Fetch countries :
  const {
    data: countries,
    isLoading: isLoadingCountries,
    error: countriesError,
  } = useQuery({
    queryKey: ["fetchCountries"],
    queryFn: fetchCountries,
  });

  // Fetch cities :
  const {
    data: cities,
    isLoading: isLoadingCities,
    error: citiesError,
  } = useQuery({
    queryKey: ["fetchCities", selectedCountryId],
    queryFn: () => fetchCities(selectedCountryId),
    enabled: !!selectedCountryId,
  });

  async function fetchCountries() {
    const response = await axios.get("http://localhost:3000/countries");
    return response.data;
  }

  async function fetchCities(countryId) {
    const response = await axios.get(`http://localhost:3000/countries/${countryId}/cities`);
    return response.data;
  }

  return (
    <div className="flex flex-col space-y-4 p-4 max-w-md mx-auto">
      <label className="font-medium text-lg">
        Country:
        <select
          onChange={(e) => setSelectedCountryId(e.target.value)}
          disabled={isLoadingCountries}
          className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        >
          {isLoadingCountries && <option>Loading countries...</option>}
          {countriesError && <option>Error loading countries</option>}
          <option value="">Select Country</option>
          {countries &&
            countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
        </select>
      </label>

      <label className="font-medium text-lg">
        City:
        <select
          disabled={isLoadingCities || !cities}
          className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        >
          {!selectedCountryId && <option value="">Select Country First</option>}
          {isLoadingCities && <option className="">Loading cities...</option>}
          {citiesError && <option>Error loading cities</option>}
          {cities &&
            cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
}

export default CountryCityDropdown;
