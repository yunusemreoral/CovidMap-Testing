import { createAsyncThunk } from "@reduxjs/toolkit";
import { countryApi, detailApi } from "../utils/api";

export const getDetails = createAsyncThunk("covid/getDetails", async (country) => {
    // ülke covid verilerini alıcak api isteğini at
const resq1 = detailApi.get("/statistics", {params: {country} });

    // ülke diğer detay verilerini alıcak api isteğini at
const resq2 = countryApi.get(`/name/${country}`);

// iki api isteğinide paralel olarak at
const [res1, res2] = await Promise.all([resq1,resq2]);

// ihtiyacımız olan verileri al
const covid = res1.data.response[0];
const countryData = res2.data[0];

const data = {
    continent: covid.continent,
    country: covid.country,
    capital: countryData.capital[0],
    currency: Object.values(countryData.currencies)[0].name,
    date: covid.day,
    cases: covid.cases.total,
    deaths: covid.deaths.total,
    tests: covid.tests.total,
    population: countryData.population,
    flag: countryData.flags,
};

    // payload'ı return et
    return data;
});