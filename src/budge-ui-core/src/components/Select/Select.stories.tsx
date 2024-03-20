import React, { useState } from "react";

import { action } from "@storybook/addon-actions";
import Select from "./Select";
import { Stack } from "../Stack";
import { WorldIcon } from "../Icons";
import { Text } from "../Text";
import { TSelectOptionValue, TSelectProps } from "./Select.types";
import { Meta, StoryFn } from "@storybook/react";

const randomUsers = [
  {
    gender: "male",
    name: { title: "Mr", first: "Elliot", last: "Wong" },
    location: {
      street: { number: 6999, name: "22nd Ave" },
      city: "Springfield",
      state: "Ontario",
      country: "Canada",
      postcode: "Z9V 2V3",
      coordinates: { latitude: "-72.6429", longitude: "-139.2280" },
      timezone: { offset: "+7:00", description: "Bangkok, Hanoi, Jakarta" },
    },
    email: "elliot.wong@example.com",
    login: {
      uuid: "4fcb0c90-4c2c-4cf0-b22b-2c9a3d794f37",
      username: "blackpanda242",
      password: "bonjour",
      salt: "rVkUW9bR",
      md5: "e2070a3b07bb5c6302e9202ba2feae0b",
      sha1: "f384644b17ab8286b1265f3a667655d4f5df9fcc",
      sha256: "bdbfde50039539c9d4f1047d294e7cc026981af59b640f2af2ad13ded6484c5c",
    },
    dob: { date: "1989-11-28T04:12:23.310Z", age: 33 },
    registered: { date: "2014-06-14T00:55:35.473Z", age: 8 },
    phone: "F84 P29-2412",
    cell: "K87 F34-0566",
    id: { name: "SIN", value: "934886508" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/63.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/63.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/63.jpg",
    },
    nat: "CA",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "محمدطاها", last: "موسوی" },
    location: {
      street: { number: 1304, name: "شهید باهنر" },
      city: "کرج",
      state: "کهگیلویه و بویراحمد",
      country: "Iran",
      postcode: 34208,
      coordinates: { latitude: "-55.0829", longitude: "-80.0950" },
      timezone: { offset: "+5:00", description: "Ekaterinburg, Islamabad, Karachi, Tashkent" },
    },
    email: "mhmdth.mwswy@example.com",
    login: {
      uuid: "6dc35719-b9d1-497e-9e56-1089f3439516",
      username: "heavyleopard854",
      password: "uptown",
      salt: "TgNnZCl0",
      md5: "10fb59f93d2fc50391eb400e20a7a3eb",
      sha1: "ec9b4dcc30cc073becdd34c55af57633f31cd27f",
      sha256: "0c8767c27cbe1c91d206468667044361796715a81690c33fafb039521030a89a",
    },
    dob: { date: "1975-02-25T17:05:08.630Z", age: 48 },
    registered: { date: "2016-09-03T00:04:40.982Z", age: 6 },
    phone: "024-85169676",
    cell: "0921-492-0597",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/80.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/80.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/80.jpg",
    },
    nat: "IR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Oscar", last: "Charles" },
    location: {
      street: { number: 472, name: "Rue Gasparin" },
      city: "Montreuil",
      state: "Territoire De Belfort",
      country: "France",
      postcode: 17991,
      coordinates: { latitude: "-41.5100", longitude: "-108.1310" },
      timezone: { offset: "+11:00", description: "Magadan, Solomon Islands, New Caledonia" },
    },
    email: "oscar.charles@example.com",
    login: {
      uuid: "6416b10e-eb87-4672-bd0e-9395a9ba9f41",
      username: "organicgorilla242",
      password: "phantom",
      salt: "pZ35egsr",
      md5: "0cdb2197b5776244e18d4a54844ed218",
      sha1: "bc13c9e196793a9678dad20aa5329763d9dcc187",
      sha256: "a3de6dc603d8bfc5322c6057fc751131059c7271c55469e7a0879e011a6fb824",
    },
    dob: { date: "1955-06-05T01:15:24.171Z", age: 68 },
    registered: { date: "2006-01-17T14:30:15.303Z", age: 17 },
    phone: "04-37-91-81-58",
    cell: "06-48-42-46-09",
    id: { name: "INSEE", value: "1550547190728 17" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/12.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/12.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
    },
    nat: "FR",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Jessica", last: "Kelly" },
    location: {
      street: { number: 610, name: "Westheimer Rd" },
      city: "Daly City",
      state: "Oregon",
      country: "United States",
      postcode: 64361,
      coordinates: { latitude: "79.3189", longitude: "-148.0284" },
      timezone: { offset: "-7:00", description: "Mountain Time (US & Canada)" },
    },
    email: "jessica.kelly@example.com",
    login: {
      uuid: "9018682b-bec0-4403-8416-653af62899c7",
      username: "blackrabbit510",
      password: "snowboard",
      salt: "xDNy8mmK",
      md5: "f8fe17b8070e9eb7e3dee2d108846aba",
      sha1: "8b62e1f657cee2b591f8d560b96ffc7209eab374",
      sha256: "c25d959e45d139d973ac6dc23f5d2c8c3cae975c8c3639c519b0febc46923239",
    },
    dob: { date: "1967-04-28T05:32:31.851Z", age: 56 },
    registered: { date: "2003-03-18T12:57:40.313Z", age: 20 },
    phone: "(904) 365-5132",
    cell: "(558) 289-9670",
    id: { name: "SSN", value: "833-55-5067" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/94.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/94.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/94.jpg",
    },
    nat: "US",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Joar", last: "Strømberg" },
    location: {
      street: { number: 8219, name: "Korsvoll terrasse" },
      city: "Krossen",
      state: "Rogaland",
      country: "Norway",
      postcode: "4843",
      coordinates: { latitude: "80.3891", longitude: "-156.5388" },
      timezone: { offset: "0:00", description: "Western Europe Time, London, Lisbon, Casablanca" },
    },
    email: "joar.stromberg@example.com",
    login: {
      uuid: "5bcfe174-e5f6-46ed-a80e-ffc3d696cab2",
      username: "heavygorilla569",
      password: "parker",
      salt: "VLo12fbM",
      md5: "64bf33c8f333722beec62715f4c8416e",
      sha1: "c9811a03822246991c44b2c2a312396558a7b5c3",
      sha256: "28343ea54fc1c38dba3ed9fdfda1383831001595a92c6d68211f3d3100262e9a",
    },
    dob: { date: "1982-04-15T04:49:24.382Z", age: 41 },
    registered: { date: "2017-01-03T01:26:58.515Z", age: 6 },
    phone: "77227220",
    cell: "48880965",
    id: { name: "FN", value: "15048204349" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/31.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/31.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/31.jpg",
    },
    nat: "NO",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Barbara", last: "Zamora" },
    location: {
      street: { number: 4285, name: "Boulevard Porras" },
      city: "El Jicote",
      state: "Baja California",
      country: "Mexico",
      postcode: 18659,
      coordinates: { latitude: "-16.4651", longitude: "143.4183" },
      timezone: { offset: "+3:30", description: "Tehran" },
    },
    email: "barbara.zamora@example.com",
    login: {
      uuid: "e4b1a3d7-3fe7-48d8-bc47-d91afacb326f",
      username: "crazyfish924",
      password: "garrett",
      salt: "UuXLcU5a",
      md5: "66fc7a79e5c17bda52221033554b14fd",
      sha1: "77b46291f93926d7b455854e1f620d7f3d06efa3",
      sha256: "48b5c0207667193917992b9e6d7f25ddb90bd790cc0096d3855c4de289bc34f8",
    },
    dob: { date: "1945-05-16T23:57:28.896Z", age: 78 },
    registered: { date: "2015-08-03T02:38:41.340Z", age: 7 },
    phone: "(626) 523 1269",
    cell: "(697) 723 5667",
    id: { name: "NSS", value: "06 10 67 5162 4" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/95.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/95.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/95.jpg",
    },
    nat: "MX",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Carl-Heinz", last: "Walz" },
    location: {
      street: { number: 8959, name: "Heideweg" },
      city: "Schlotheim",
      state: "Bremen",
      country: "Germany",
      postcode: 23322,
      coordinates: { latitude: "-40.4182", longitude: "-176.6914" },
      timezone: { offset: "-11:00", description: "Midway Island, Samoa" },
    },
    email: "carl-heinz.walz@example.com",
    login: {
      uuid: "8eb67c2f-0e8e-414d-ae11-44a962331a4c",
      username: "beautifulpanda330",
      password: "kelly",
      salt: "3eVkzfq3",
      md5: "fa14605455143193d656851c8f895343",
      sha1: "8f190203520d41bab8834f49bdb74175fe3014e1",
      sha256: "8aefdd110ed5b3d85d6e447473a73f80e59b3bf2b58cff2e39b2fd5444bce06d",
    },
    dob: { date: "1991-11-15T18:33:24.724Z", age: 31 },
    registered: { date: "2019-06-17T15:14:25.339Z", age: 3 },
    phone: "0222-4707997",
    cell: "0176-5710705",
    id: { name: "SVNR", value: "60 151191 W 128" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/83.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/83.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/83.jpg",
    },
    nat: "DE",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Begoña", last: "Santana" },
    location: {
      street: { number: 1689, name: "Avenida del Planetario" },
      city: "Palma de Mallorca",
      state: "Islas Baleares",
      country: "Spain",
      postcode: 90452,
      coordinates: { latitude: "75.8322", longitude: "-120.8455" },
      timezone: { offset: "-8:00", description: "Pacific Time (US & Canada)" },
    },
    email: "begona.santana@example.com",
    login: {
      uuid: "d28e6d74-791f-46c3-b0b3-dff77d20f3b9",
      username: "bluebird596",
      password: "clowns",
      salt: "CeebtQHW",
      md5: "07dd74394952c24b56f18913ef7295e0",
      sha1: "553bb62b74ba1d7a9f721dbd26504752d5271081",
      sha256: "00064a5bd6b953bf3bc42e08668c3c6ff487b83ff5428e50960f2a043bbc54ca",
    },
    dob: { date: "1971-09-18T07:59:23.688Z", age: 51 },
    registered: { date: "2002-11-17T08:55:41.547Z", age: 20 },
    phone: "933-846-072",
    cell: "688-154-916",
    id: { name: "DNI", value: "86478804-H" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/19.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/19.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/19.jpg",
    },
    nat: "ES",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Anésia", last: "da Conceição" },
    location: {
      street: { number: 8540, name: "Rua Castro Alves " },
      city: "Caraguatatuba",
      state: "Rio de Janeiro",
      country: "Brazil",
      postcode: 63682,
      coordinates: { latitude: "-20.4490", longitude: "-7.6425" },
      timezone: { offset: "0:00", description: "Western Europe Time, London, Lisbon, Casablanca" },
    },
    email: "anesia.daconceicao@example.com",
    login: {
      uuid: "a6f339d2-c760-4ff0-b298-825378d1dfe9",
      username: "orangeostrich836",
      password: "michaela",
      salt: "xtHmUjgH",
      md5: "6af55c487dd0b07a6f4c3e8591357361",
      sha1: "b35a98718d95c4b01e4f54e5f363817604388863",
      sha256: "d4d002054ec28f75da5fba8dd7835f1eceb86026c8ac620990905b33e79eaf83",
    },
    dob: { date: "1980-11-08T15:09:15.010Z", age: 42 },
    registered: { date: "2015-08-04T02:40:23.278Z", age: 7 },
    phone: "(20) 5013-6653",
    cell: "(40) 4146-9285",
    id: { name: "CPF", value: "435.276.693-86" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/90.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/90.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/90.jpg",
    },
    nat: "BR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "میلاد", last: "جعفری" },
    location: {
      street: { number: 2465, name: "ستارخان" },
      city: "تهران",
      state: "مرکزی",
      country: "Iran",
      postcode: 79033,
      coordinates: { latitude: "44.7793", longitude: "-168.1296" },
      timezone: { offset: "+10:00", description: "Eastern Australia, Guam, Vladivostok" },
    },
    email: "myld.jaafry@example.com",
    login: {
      uuid: "d559890a-cc26-4d6d-b6a8-c93dd10aa768",
      username: "orangeostrich742",
      password: "mickey1",
      salt: "tAvsZxkv",
      md5: "01b442b104de8b408b431af3eb1771a8",
      sha1: "8c90a01eee6d4b811d72325d1bbb4a28fab07b10",
      sha256: "69a2971a5c405eab5ac4d698049e8e9aac597b964afdc1bf256c0668a4488ceb",
    },
    dob: { date: "1954-07-25T06:00:37.071Z", age: 68 },
    registered: { date: "2004-11-27T16:20:54.599Z", age: 18 },
    phone: "093-65617646",
    cell: "0954-740-8691",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/men/75.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    },
    nat: "IR",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Aino", last: "Laakso" },
    location: {
      street: { number: 6286, name: "Bulevardi" },
      city: "Askola",
      state: "Uusimaa",
      country: "Finland",
      postcode: 53749,
      coordinates: { latitude: "29.3604", longitude: "83.9081" },
      timezone: { offset: "+5:00", description: "Ekaterinburg, Islamabad, Karachi, Tashkent" },
    },
    email: "aino.laakso@example.com",
    login: {
      uuid: "4ac33c34-13cd-4c1e-a8e8-aa2f5962401b",
      username: "blueelephant242",
      password: "nextel",
      salt: "kJX7SsKN",
      md5: "6e320efef4ece198cddfc421789386ff",
      sha1: "6b9f936bb1d76bb1f529524bf1c6d01f09b1fae7",
      sha256: "3327612c8f3aff78ca6d4be949fb7c8fde6e0fa0d83f519a867bcd386ab66f83",
    },
    dob: { date: "1985-11-07T12:24:39.629Z", age: 37 },
    registered: { date: "2016-09-07T10:36:51.093Z", age: 6 },
    phone: "05-717-562",
    cell: "046-401-48-21",
    id: { name: "HETU", value: "NaNNA386undefined" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/21.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
    },
    nat: "FI",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Wyatt", last: "Johnson" },
    location: {
      street: { number: 502, name: "Plum St" },
      city: "Medford",
      state: "Pennsylvania",
      country: "United States",
      postcode: 88029,
      coordinates: { latitude: "-29.0630", longitude: "105.1185" },
      timezone: { offset: "-12:00", description: "Eniwetok, Kwajalein" },
    },
    email: "wyatt.johnson@example.com",
    login: {
      uuid: "90ce0644-e0af-43b8-8423-9ffcb369bac1",
      username: "brownostrich400",
      password: "elwood",
      salt: "QCkE2uI0",
      md5: "ef6052b8dc53e7f6c9a85b12751b2ca8",
      sha1: "66ea4fadd0d413d7223734f6d8bf414f50437a6e",
      sha256: "caace0a0931e6c7d317b0c7437dc0c4442b95346b40cb888dbc8cac9893f6306",
    },
    dob: { date: "1978-09-12T05:52:04.983Z", age: 44 },
    registered: { date: "2017-01-07T07:19:45.851Z", age: 6 },
    phone: "(631) 252-3953",
    cell: "(440) 831-7252",
    id: { name: "SSN", value: "862-21-7728" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/79.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/79.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/79.jpg",
    },
    nat: "US",
  },
  {
    gender: "female",
    name: { title: "Mademoiselle", first: "Nicole", last: "Jean" },
    location: {
      street: { number: 8362, name: "Rue Duguesclin" },
      city: "Hundwil",
      state: "Graubünden",
      country: "Switzerland",
      postcode: 7612,
      coordinates: { latitude: "22.7195", longitude: "-120.0714" },
      timezone: { offset: "+6:00", description: "Almaty, Dhaka, Colombo" },
    },
    email: "nicole.jean@example.com",
    login: {
      uuid: "0ac91a47-332e-40e6-842d-1c2614e80b4d",
      username: "goldenelephant418",
      password: "vibrate",
      salt: "NFwHNfIG",
      md5: "6d620d6fbb762bf6e4c217fb577678d3",
      sha1: "8bc5a30d2ec5bc269bd01b2d6879180da83edd15",
      sha256: "e9dd6ecba21b6b0d5cc4e2113b36da7443385c05808ce0d14f2f8418facb02c8",
    },
    dob: { date: "1986-02-23T22:06:40.214Z", age: 37 },
    registered: { date: "2004-06-25T00:21:41.656Z", age: 18 },
    phone: "078 235 66 98",
    cell: "076 414 64 42",
    id: { name: "AVS", value: "756.8264.5077.20" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/13.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/13.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/13.jpg",
    },
    nat: "CH",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Lindamar", last: "Pereira" },
    location: {
      street: { number: 1681, name: "Rua Santo Antônio " },
      city: "Cascavel",
      state: "Maranhão",
      country: "Brazil",
      postcode: 30586,
      coordinates: { latitude: "63.8309", longitude: "122.2374" },
      timezone: { offset: "-3:30", description: "Newfoundland" },
    },
    email: "lindamar.pereira@example.com",
    login: {
      uuid: "4437c0bf-fba9-4b21-808a-4d4f2d7222ab",
      username: "yellowgoose468",
      password: "vauxhall",
      salt: "RpiLVHnp",
      md5: "730dddfcb6cb20218ff789fb4854e2f1",
      sha1: "b7ea21b46505128bd65ba8bbc8c8da9bc724e524",
      sha256: "eae5218d86c308fa1077d50b23acbd557796bc4067a7d7939253de0e2c7d8b41",
    },
    dob: { date: "1952-06-10T18:59:34.341Z", age: 70 },
    registered: { date: "2010-06-13T02:09:11.328Z", age: 12 },
    phone: "(44) 4023-8525",
    cell: "(97) 3142-3654",
    id: { name: "CPF", value: "355.851.568-66" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/21.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
    },
    nat: "BR",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Letitia", last: "Brown" },
    location: {
      street: { number: 8364, name: "W Pecan St" },
      city: "Jackson",
      state: "South Carolina",
      country: "United States",
      postcode: 76499,
      coordinates: { latitude: "70.9045", longitude: "-17.0025" },
      timezone: { offset: "+9:30", description: "Adelaide, Darwin" },
    },
    email: "letitia.brown@example.com",
    login: {
      uuid: "1104a8c3-3087-4035-9d7a-0b4dd286e39c",
      username: "browncat395",
      password: "platypus",
      salt: "InkN0iQ1",
      md5: "a217d99cf4fb47dd90aed7b5599636e4",
      sha1: "e83a4e35bc4bdaa1bddd3c67c9922eb0a370e13d",
      sha256: "61e3d687114dbc18d8c183943f18ecae8f8efde4649fa9995ac4f243d0a510d3",
    },
    dob: { date: "1951-12-04T07:11:50.375Z", age: 71 },
    registered: { date: "2008-08-01T23:32:45.249Z", age: 14 },
    phone: "(949) 868-7409",
    cell: "(202) 517-2506",
    id: { name: "SSN", value: "753-08-2073" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/93.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/93.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/93.jpg",
    },
    nat: "US",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Aglaya", last: "Mironenko" },
    location: {
      street: { number: 5127, name: "Olegivska" },
      city: "Suhodilsk",
      state: "Ternopilska",
      country: "Ukraine",
      postcode: 77692,
      coordinates: { latitude: "34.4969", longitude: "-4.0431" },
      timezone: { offset: "-3:30", description: "Newfoundland" },
    },
    email: "aglaya.mironenko@example.com",
    login: {
      uuid: "cee1641e-13e7-4d33-b965-83c21898adaa",
      username: "organicswan652",
      password: "mike1",
      salt: "6aiIOlbt",
      md5: "4233d1b131e538644e87f30714243ba7",
      sha1: "7fd31193f10d9a82b0bbccd5192fd3bc7ce54938",
      sha256: "29981453a4c7f061626b1a07c50bc5c880a268bfabd95a606eed16975d94b1df",
    },
    dob: { date: "1984-08-07T06:53:10.519Z", age: 38 },
    registered: { date: "2007-03-07T21:59:57.855Z", age: 16 },
    phone: "(067) Y71-8281",
    cell: "(097) A83-9508",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/72.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/72.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/72.jpg",
    },
    nat: "UA",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Gabriela", last: "Rodríquez" },
    location: {
      street: { number: 1838, name: "Corredor Barrios" },
      city: "San Andrés Figueroa",
      state: "Hidalgo",
      country: "Mexico",
      postcode: 52817,
      coordinates: { latitude: "77.4107", longitude: "-93.0151" },
      timezone: { offset: "+2:00", description: "Kaliningrad, South Africa" },
    },
    email: "gabriela.rodriquez@example.com",
    login: {
      uuid: "08025aa9-6717-416a-b3e8-7694caaf5da9",
      username: "brownladybug997",
      password: "annie",
      salt: "QWzpmTWK",
      md5: "5547aef5dc1d9713c40718019775ab44",
      sha1: "110c6a7c6d321df86991a78df94851b571a6341d",
      sha256: "6aa5ae10d6e5011c541defd8c8a6f612c3001dde4fbf795d731e84becf9018e7",
    },
    dob: { date: "1945-06-23T14:59:57.546Z", age: 77 },
    registered: { date: "2018-12-22T04:03:48.201Z", age: 4 },
    phone: "(611) 435 6711",
    cell: "(640) 360 4272",
    id: { name: "NSS", value: "88 72 80 9294 3" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/26.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/26.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/26.jpg",
    },
    nat: "MX",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Paula", last: "Vázquez" },
    location: {
      street: { number: 7895, name: "Avenida de La Albufera" },
      city: "Arrecife",
      state: "Cataluña",
      country: "Spain",
      postcode: 79844,
      coordinates: { latitude: "-55.6825", longitude: "139.6774" },
      timezone: { offset: "+2:00", description: "Kaliningrad, South Africa" },
    },
    email: "paula.vazquez@example.com",
    login: {
      uuid: "0f355ac5-654d-4525-98ab-22ce5b9a2b97",
      username: "yellowbird513",
      password: "shock",
      salt: "pPpRAxGW",
      md5: "fc20a162ccf25e4520f456add7175d26",
      sha1: "12e9acfdad957bdb05c98f01629fb34f028ef9c2",
      sha256: "6068b91605ff763b9dd4127c64cfb4b9b99391d1439e18935d9dd123d851bb7e",
    },
    dob: { date: "1953-07-31T12:53:13.877Z", age: 69 },
    registered: { date: "2019-09-22T09:08:45.381Z", age: 3 },
    phone: "913-134-928",
    cell: "614-542-331",
    id: { name: "DNI", value: "42619969-O" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/44.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/44.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/44.jpg",
    },
    nat: "ES",
  },
  {
    gender: "female",
    name: { title: "Mademoiselle", first: "Vincenza", last: "Morin" },
    location: {
      street: { number: 5917, name: "Boulevard de Balmont" },
      city: "Hausen am Albis",
      state: "St. Gallen",
      country: "Switzerland",
      postcode: 3585,
      coordinates: { latitude: "32.7109", longitude: "4.9514" },
      timezone: { offset: "-9:00", description: "Alaska" },
    },
    email: "vincenza.morin@example.com",
    login: {
      uuid: "7b70e9e2-5806-4cba-90f7-29cfb49aa342",
      username: "orangezebra855",
      password: "stacy",
      salt: "ETOmNNVU",
      md5: "45d11701e90a1fc0761859eeef7face0",
      sha1: "4106a3a229ead90d8c665397b65e27446c1bc291",
      sha256: "cead494b5967885f73692f21a21102426f388c70cb3d7b6ec4678e6f173dad38",
    },
    dob: { date: "1979-08-01T11:00:41.203Z", age: 43 },
    registered: { date: "2014-07-24T03:09:09.486Z", age: 8 },
    phone: "079 310 43 39",
    cell: "078 375 54 92",
    id: { name: "AVS", value: "756.8636.8457.94" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/30.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/30.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/30.jpg",
    },
    nat: "CH",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Lilja", last: "Manni" },
    location: {
      street: { number: 6497, name: "Otavalankatu" },
      city: "Hartola",
      state: "Kymenlaakso",
      country: "Finland",
      postcode: 32980,
      coordinates: { latitude: "40.6684", longitude: "78.1619" },
      timezone: { offset: "+8:00", description: "Beijing, Perth, Singapore, Hong Kong" },
    },
    email: "lilja.manni@example.com",
    login: {
      uuid: "37c3b9a3-a612-47d3-a5eb-f5f70098cda7",
      username: "ticklishgoose533",
      password: "paulie",
      salt: "jf3Y1jPq",
      md5: "ce55a3c68460fae2348e2618225feddf",
      sha1: "de21ac04fb3a9abe67488a5b2353efd7629f02e3",
      sha256: "1e7671b394becb6a1611ccb61ab50be2179b6db3ed41564343edfe501f18981e",
    },
    dob: { date: "1976-09-24T09:03:56.377Z", age: 46 },
    registered: { date: "2017-01-15T03:44:56.184Z", age: 6 },
    phone: "06-754-069",
    cell: "043-979-95-91",
    id: { name: "HETU", value: "NaNNA122undefined" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/80.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/80.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/80.jpg",
    },
    nat: "FI",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Magdalena", last: "Gil" },
    location: {
      street: { number: 8955, name: "Avenida de Burgos" },
      city: "Granada",
      state: "Andalucía",
      country: "Spain",
      postcode: 29925,
      coordinates: { latitude: "-60.4309", longitude: "-1.1742" },
      timezone: { offset: "-5:00", description: "Eastern Time (US & Canada), Bogota, Lima" },
    },
    email: "magdalena.gil@example.com",
    login: {
      uuid: "d58f53a5-9bc9-4520-835f-95570d42c393",
      username: "beautifulwolf824",
      password: "monaco",
      salt: "d0K2eYid",
      md5: "d630a57a8be210846bd62ea2954ec14a",
      sha1: "b634208778fae51b438fed94d9cd448b0a848c17",
      sha256: "aa78189249e9aa8bdecd33dfe8b87d4bb12f38353f7680d13507f5a145eac95f",
    },
    dob: { date: "1964-03-02T05:44:39.518Z", age: 59 },
    registered: { date: "2022-03-26T18:22:42.891Z", age: 1 },
    phone: "918-876-613",
    cell: "674-175-521",
    id: { name: "DNI", value: "61812294-X" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/27.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
    },
    nat: "ES",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Dwayne", last: "Willis" },
    location: {
      street: { number: 58, name: "Washington Ave" },
      city: "Saginaw",
      state: "Florida",
      country: "United States",
      postcode: 42610,
      coordinates: { latitude: "62.0200", longitude: "48.4235" },
      timezone: { offset: "+7:00", description: "Bangkok, Hanoi, Jakarta" },
    },
    email: "dwayne.willis@example.com",
    login: {
      uuid: "433bc4d2-9c71-4cdd-a6ea-858a198f535b",
      username: "lazylion171",
      password: "august",
      salt: "cWHgNCS8",
      md5: "573e2b701e3c51c9d41bffcf78882686",
      sha1: "76f6d45dbd64165cd281c7af9f54a76febc3fdf9",
      sha256: "2cb5257a781ea62cd18e7056585f94bf3d526cde43974d9e9191b11119cd7bff",
    },
    dob: { date: "1968-08-21T03:51:46.970Z", age: 54 },
    registered: { date: "2021-07-17T20:14:38.423Z", age: 1 },
    phone: "(674) 551-7693",
    cell: "(893) 363-0975",
    id: { name: "SSN", value: "434-02-2625" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/12.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/12.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
    },
    nat: "US",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Cecilie", last: "Rasmussen" },
    location: {
      street: { number: 9839, name: "Valdemarsgade" },
      city: "Overby Lyng",
      state: "Syddanmark",
      country: "Denmark",
      postcode: 33140,
      coordinates: { latitude: "-69.8036", longitude: "-129.2454" },
      timezone: { offset: "+5:30", description: "Bombay, Calcutta, Madras, New Delhi" },
    },
    email: "cecilie.rasmussen@example.com",
    login: {
      uuid: "2ba448b9-fe36-427a-b63c-3a780cb30089",
      username: "brownpeacock613",
      password: "trapper",
      salt: "bVwecoLL",
      md5: "20226b926da15fbb94d323ba7907be62",
      sha1: "efa5e1dfd7d217f8b42573cf27be322ba2e58d37",
      sha256: "250c06cdba248e59692a177876976603adb12dbc3d8ba567c15bdf1d6c095b43",
    },
    dob: { date: "1960-09-13T03:37:22.114Z", age: 62 },
    registered: { date: "2004-09-20T17:44:01.455Z", age: 18 },
    phone: "46779990",
    cell: "37905872",
    id: { name: "CPR", value: "120960-5629" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/94.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/94.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/94.jpg",
    },
    nat: "DK",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Milla", last: "Perala" },
    location: {
      street: { number: 1585, name: "Tehtaankatu" },
      city: "Kurikka",
      state: "Kainuu",
      country: "Finland",
      postcode: 77431,
      coordinates: { latitude: "45.2647", longitude: "29.2279" },
      timezone: { offset: "+3:00", description: "Baghdad, Riyadh, Moscow, St. Petersburg" },
    },
    email: "milla.perala@example.com",
    login: {
      uuid: "52a353b4-29c8-434f-b662-63676145d849",
      username: "lazymeercat567",
      password: "sang",
      salt: "FHRBpgPq",
      md5: "d5a2ab613d569849f7a29f997be135ce",
      sha1: "3f4fc65c878e2d34b1305ea2c57d2be0f02cca62",
      sha256: "b4d64110be6d94af596c9336aac9782de021781dc712e070e4f85ad388febd97",
    },
    dob: { date: "1982-10-03T11:15:04.301Z", age: 40 },
    registered: { date: "2005-10-22T15:58:34.319Z", age: 17 },
    phone: "04-635-983",
    cell: "049-933-55-45",
    id: { name: "HETU", value: "NaNNA486undefined" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/41.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/41.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/41.jpg",
    },
    nat: "FI",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Ayşe", last: "Sandalcı" },
    location: {
      street: { number: 268, name: "Istiklal Cd" },
      city: "Tunceli",
      state: "Sinop",
      country: "Turkey",
      postcode: 98311,
      coordinates: { latitude: "87.4026", longitude: "85.7478" },
      timezone: { offset: "+9:00", description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk" },
    },
    email: "ayse.sandalci@example.com",
    login: {
      uuid: "52735a86-688d-4829-ada9-f991cede7cb8",
      username: "organicbird840",
      password: "rrrrrrr",
      salt: "vuIewHPy",
      md5: "b856638c2484e26b481ba46fe7abbbaa",
      sha1: "313bb00f016bd1c3b7d048267b9083e46eefc37a",
      sha256: "0b5926324221d324283107108a0a6c9c140c1937396b5b3cc1b0e74af2efe911",
    },
    dob: { date: "1979-08-26T05:27:09.233Z", age: 43 },
    registered: { date: "2004-02-23T17:30:50.472Z", age: 19 },
    phone: "(050)-959-6375",
    cell: "(803)-741-2580",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/43.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/43.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/43.jpg",
    },
    nat: "TR",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Nanna", last: "Christensen" },
    location: {
      street: { number: 7267, name: "Bakken" },
      city: "Fredeikssund",
      state: "Nordjylland",
      country: "Denmark",
      postcode: 11811,
      coordinates: { latitude: "-52.0787", longitude: "-121.6202" },
      timezone: { offset: "-2:00", description: "Mid-Atlantic" },
    },
    email: "nanna.christensen@example.com",
    login: {
      uuid: "af2adb31-525f-4f7e-99cc-61f10471b480",
      username: "tinyduck392",
      password: "killa",
      salt: "m1Iownjj",
      md5: "1aac15c429cb48b556b30e4405d189be",
      sha1: "30aed14b9c0766aee4cfa4543ad502d1db5d05b2",
      sha256: "f22b5bd7fcd467d62cee2de305a486707b0590d9123fa74ebca760c2a179a87a",
    },
    dob: { date: "1985-06-12T01:13:03.243Z", age: 37 },
    registered: { date: "2022-03-19T14:15:12.640Z", age: 1 },
    phone: "90248319",
    cell: "29941352",
    id: { name: "CPR", value: "110685-6099" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/70.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/70.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/70.jpg",
    },
    nat: "DK",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Diana", last: "Henríquez" },
    location: {
      street: { number: 2325, name: "Retorno Chihuahua" },
      city: "Campo Cuichapa (Mpio. Cuichapa)",
      state: "Aguascalientes",
      country: "Mexico",
      postcode: 95236,
      coordinates: { latitude: "23.3595", longitude: "168.7346" },
      timezone: { offset: "+5:45", description: "Kathmandu" },
    },
    email: "diana.henriquez@example.com",
    login: {
      uuid: "70f9a3bf-b951-4d41-85ed-09a58adcce02",
      username: "yellowgorilla616",
      password: "atlantis",
      salt: "3nhVKgd4",
      md5: "49a97ae78771825c9e1b323b836c7016",
      sha1: "32b6f551a85d837f7193c316dbbaf439690c63da",
      sha256: "659e3b7870830cea528ad5528cf857580673d50fc9346fd013f6e4ec1f4126b1",
    },
    dob: { date: "1991-01-06T04:18:15.282Z", age: 32 },
    registered: { date: "2003-11-20T12:52:19.632Z", age: 19 },
    phone: "(617) 262 8035",
    cell: "(607) 177 9151",
    id: { name: "NSS", value: "82 88 64 0752 4" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/1.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
    },
    nat: "MX",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Olga", last: "Canales" },
    location: {
      street: { number: 6355, name: "Avenida Guanajuato" },
      city: "Cruz Quemada",
      state: "Puebla",
      country: "Mexico",
      postcode: 44497,
      coordinates: { latitude: "9.0368", longitude: "57.5437" },
      timezone: { offset: "-5:00", description: "Eastern Time (US & Canada), Bogota, Lima" },
    },
    email: "olga.canales@example.com",
    login: {
      uuid: "20499d9b-3c2f-4b1d-8d2b-0d5f81eaa6c1",
      username: "beautifulbird865",
      password: "superior",
      salt: "UYR8GiXq",
      md5: "ac94a029c21b78f6048bf768d2da7ae1",
      sha1: "30e0d56e9d38cccfc2b0f4ec3d372332f5512898",
      sha256: "a3a2f00fcbe4ea1ee4d0aaa96d99b931c29565b6f5e5beea16c9ccf7710d0061",
    },
    dob: { date: "1987-03-12T18:59:16.693Z", age: 36 },
    registered: { date: "2006-02-12T03:38:59.458Z", age: 17 },
    phone: "(663) 185 6647",
    cell: "(627) 072 8498",
    id: { name: "NSS", value: "23 23 64 3187 1" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/63.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/63.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/63.jpg",
    },
    nat: "MX",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Milla", last: "Pakkala" },
    location: {
      street: { number: 5635, name: "Pirkankatu" },
      city: "Alavieska",
      state: "Kainuu",
      country: "Finland",
      postcode: 10176,
      coordinates: { latitude: "5.3089", longitude: "-113.8495" },
      timezone: { offset: "-10:00", description: "Hawaii" },
    },
    email: "milla.pakkala@example.com",
    login: {
      uuid: "8a67ac64-3bc9-4137-b0d4-21758bc22714",
      username: "yellowfish619",
      password: "fanny",
      salt: "9j0xDDdr",
      md5: "ada36fc0aa2083f13bb8936437fd87e0",
      sha1: "69dc4dc120f211b37af192f7579588fc0f5817fb",
      sha256: "2783572ef8fee6795d570516b68cd3c50482aa9953b550e8b652b9d815db5aad",
    },
    dob: { date: "1986-10-09T05:44:17.033Z", age: 36 },
    registered: { date: "2022-01-16T13:02:24.240Z", age: 1 },
    phone: "06-859-613",
    cell: "040-614-09-45",
    id: { name: "HETU", value: "NaNNA480undefined" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/17.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg",
    },
    nat: "FI",
  },
  {
    gender: "female",
    name: { title: "Madame", first: "Helena", last: "Richard" },
    location: {
      street: { number: 3149, name: "Rue Victor-Hugo" },
      city: "Vulliens",
      state: "Solothurn",
      country: "Switzerland",
      postcode: 1920,
      coordinates: { latitude: "29.1968", longitude: "-175.0906" },
      timezone: { offset: "+11:00", description: "Magadan, Solomon Islands, New Caledonia" },
    },
    email: "helena.richard@example.com",
    login: {
      uuid: "74b3deb3-d0e3-4e74-8ccf-f8c216c4a3b6",
      username: "purplesnake467",
      password: "snapple",
      salt: "QflIwu97",
      md5: "fa7038d6ee2c1054a05c4933098d4acb",
      sha1: "c39020823033138c0c65d4a1c0c227884d90e2ea",
      sha256: "00c76583d47b57282d140450073932d84ecb9140c47a536b11fdb85c15afba81",
    },
    dob: { date: "1994-03-12T23:28:38.082Z", age: 29 },
    registered: { date: "2004-04-19T10:37:06.445Z", age: 19 },
    phone: "079 569 68 72",
    cell: "076 566 80 26",
    id: { name: "AVS", value: "756.2819.1969.64" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/84.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/84.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/84.jpg",
    },
    nat: "CH",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Afet", last: "Biçer" },
    location: {
      street: { number: 9041, name: "Atatürk Sk" },
      city: "Kahramanmaraş",
      state: "Van",
      country: "Turkey",
      postcode: 62253,
      coordinates: { latitude: "-23.2212", longitude: "9.7555" },
      timezone: { offset: "+3:30", description: "Tehran" },
    },
    email: "afet.bicer@example.com",
    login: {
      uuid: "ccf072d7-2615-47f3-9279-6355263a2ffa",
      username: "beautifulelephant973",
      password: "volcom",
      salt: "yZ6bFKyu",
      md5: "130256ac993961d7fc2daa3dbb1ea121",
      sha1: "3ab42a7e0c757a24d0ef608ea8b2041daf0f1a76",
      sha256: "2c7c0b129cb6e62b776132ca680a226997116c9bb1c0999b0a2424c0ae3600ec",
    },
    dob: { date: "1984-02-05T15:19:19.550Z", age: 39 },
    registered: { date: "2015-11-12T02:27:42.707Z", age: 7 },
    phone: "(772)-503-0317",
    cell: "(904)-099-6285",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/55.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/55.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/55.jpg",
    },
    nat: "TR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Akhil", last: "Kaur" },
    location: {
      street: { number: 1717, name: "Commercial St" },
      city: "South Dumdum",
      state: "Andaman and Nicobar Islands",
      country: "India",
      postcode: 41843,
      coordinates: { latitude: "75.7075", longitude: "19.4406" },
      timezone: { offset: "-8:00", description: "Pacific Time (US & Canada)" },
    },
    email: "akhil.kaur@example.com",
    login: {
      uuid: "2cfb6292-6b87-4ba3-aacc-d8fd99464d51",
      username: "crazymeercat688",
      password: "karina",
      salt: "4yHHT5X1",
      md5: "24c041d84fd203f3b19ad27ebb207e32",
      sha1: "ae3eb35e194ee0228f04cd6cb91a4020946037f3",
      sha256: "28fb2d931252609ebfae376bcca60e5427753ea2e2dcefcb2256c8f0cbe1b28f",
    },
    dob: { date: "1968-11-13T17:55:37.462Z", age: 54 },
    registered: { date: "2002-04-23T23:55:54.126Z", age: 21 },
    phone: "8632487459",
    cell: "8622140670",
    id: { name: "UIDAI", value: "439304127131" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/20.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/20.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/20.jpg",
    },
    nat: "IN",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Jessie", last: "Jimenez" },
    location: {
      street: { number: 3671, name: "York Road" },
      city: "Canterbury",
      state: "Fife",
      country: "United Kingdom",
      postcode: "ZB2 0BE",
      coordinates: { latitude: "-81.1189", longitude: "-13.0601" },
      timezone: { offset: "+3:00", description: "Baghdad, Riyadh, Moscow, St. Petersburg" },
    },
    email: "jessie.jimenez@example.com",
    login: {
      uuid: "56fb5b89-6f4d-4a5a-968b-f75d797da813",
      username: "yellowpeacock504",
      password: "streets",
      salt: "pBvY9DLC",
      md5: "e41380fbd64f6a97d3b43c02845273f1",
      sha1: "21b30cab03cca57100ceff63eae5077583ed0dc5",
      sha256: "69d94602b757c27a2de2dbb9839cee97ef8add468f1d38c71fb3999e903aec88",
    },
    dob: { date: "1966-08-17T23:36:29.037Z", age: 56 },
    registered: { date: "2016-08-20T11:59:23.196Z", age: 6 },
    phone: "023 7543 9691",
    cell: "07278 345180",
    id: { name: "NINO", value: "LH 79 35 88 H" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/50.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/50.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/50.jpg",
    },
    nat: "GB",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Angeline", last: "Tiebosch" },
    location: {
      street: { number: 7667, name: "Groteweid" },
      city: "Berkelland",
      state: "Limburg",
      country: "Netherlands",
      postcode: "1823 KL",
      coordinates: { latitude: "-44.0382", longitude: "-127.5951" },
      timezone: { offset: "+8:00", description: "Beijing, Perth, Singapore, Hong Kong" },
    },
    email: "angeline.tiebosch@example.com",
    login: {
      uuid: "1ecd2a4a-d579-4bd8-8971-9e5fcff8e213",
      username: "lazypeacock391",
      password: "guinness",
      salt: "ljw8hkE7",
      md5: "ecf1d761a1ef4d01ff84b1b9df22330a",
      sha1: "b5cd3aa8a15fdd2cbbeae95f13516889d7956079",
      sha256: "2b1816a4eb528dcf084cb62876572ee5163069d1a67db64af46aff9482794f8b",
    },
    dob: { date: "2000-03-16T00:29:58.707Z", age: 23 },
    registered: { date: "2004-10-28T12:47:32.203Z", age: 18 },
    phone: "(0520) 516162",
    cell: "(06) 40664669",
    id: { name: "BSN", value: "32364407" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/27.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
    },
    nat: "NL",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Rohan", last: "Shroff" },
    location: {
      street: { number: 3188, name: "Mint St" },
      city: "Shimla",
      state: "Nagaland",
      country: "India",
      postcode: 28265,
      coordinates: { latitude: "-38.4286", longitude: "-75.4209" },
      timezone: { offset: "+5:30", description: "Bombay, Calcutta, Madras, New Delhi" },
    },
    email: "rohan.shroff@example.com",
    login: {
      uuid: "a95b3e15-030f-49d1-9209-0fc5f42ddb9a",
      username: "redladybug668",
      password: "135790",
      salt: "0obVtsEr",
      md5: "a797899a6e82db3ee35b06eded7d5519",
      sha1: "aae199bca4f9ea5415f3c7437a00c79d7b6bc69d",
      sha256: "5c4af28d7c82d9dca3954dd7279eb99599fa974070f562fecda70fddf2bd82c9",
    },
    dob: { date: "1976-05-27T23:41:01.849Z", age: 47 },
    registered: { date: "2012-07-22T01:09:35.795Z", age: 10 },
    phone: "9179721017",
    cell: "7149895460",
    id: { name: "UIDAI", value: "280230720994" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/35.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/35.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
    },
    nat: "IN",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Don", last: "Fields" },
    location: {
      street: { number: 4908, name: "Washington Ave" },
      city: "Hobart",
      state: "Tasmania",
      country: "Australia",
      postcode: 9636,
      coordinates: { latitude: "-65.6350", longitude: "-38.0656" },
      timezone: { offset: "+4:30", description: "Kabul" },
    },
    email: "don.fields@example.com",
    login: {
      uuid: "c63c8841-a2d2-444e-bef1-4fd0fc250c81",
      username: "whiteleopard347",
      password: "bergkamp",
      salt: "fIPYl7Uo",
      md5: "97d4b24f45cbf97e6172604b93ae6546",
      sha1: "99e947e681bcd51597957b9790d18f40b3ff2b2f",
      sha256: "70cdb995cf132e9d048236077a2d66f8949246ba10cf45dbe011b1705e8c8251",
    },
    dob: { date: "1992-11-05T05:42:26.606Z", age: 30 },
    registered: { date: "2009-11-24T22:06:40.014Z", age: 13 },
    phone: "08-2324-8780",
    cell: "0453-528-698",
    id: { name: "TFN", value: "519387656" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/28.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
    },
    nat: "AU",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Sarah", last: "Hawkins" },
    location: {
      street: { number: 3358, name: "Hogan St" },
      city: "Honolulu",
      state: "Washington",
      country: "United States",
      postcode: 95081,
      coordinates: { latitude: "25.6741", longitude: "-15.0725" },
      timezone: { offset: "+2:00", description: "Kaliningrad, South Africa" },
    },
    email: "sarah.hawkins@example.com",
    login: {
      uuid: "bf17916f-18c6-4781-baf4-df43a41fc875",
      username: "bigbutterfly264",
      password: "12121212",
      salt: "dh3d0oDl",
      md5: "1f0371cf04fce2225e85831a41bfa278",
      sha1: "82316c941dc994a157f14bd97c352684dd2f1bcf",
      sha256: "e4d477d5974964c0d081bc0ac29439a7a3d0d32ca8fb2d82d221481bbe326c1f",
    },
    dob: { date: "1969-02-08T08:45:39.720Z", age: 54 },
    registered: { date: "2005-02-16T16:12:38.902Z", age: 18 },
    phone: "(661) 941-2460",
    cell: "(547) 207-2860",
    id: { name: "SSN", value: "232-54-7402" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/38.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/38.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/38.jpg",
    },
    nat: "US",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Leana", last: "Bonnet" },
    location: {
      street: { number: 7248, name: "Rue Gasparin" },
      city: "Lille",
      state: "Meuse",
      country: "France",
      postcode: 69692,
      coordinates: { latitude: "-11.6995", longitude: "-156.5639" },
      timezone: { offset: "+4:30", description: "Kabul" },
    },
    email: "leana.bonnet@example.com",
    login: {
      uuid: "33a48482-ecbf-4e9e-80c5-10399e3c941f",
      username: "heavyswan307",
      password: "blackie",
      salt: "Ev558mce",
      md5: "2e1ce594cba48b07b608d2c2fc3622ce",
      sha1: "650b71d9c84cf399f1d651885b5e9a1988d32e44",
      sha256: "79fd4b947aad150f651991568ec4c2d9efb6a1e4b595c78eb4ef6c480d04b729",
    },
    dob: { date: "1952-03-18T20:40:55.679Z", age: 71 },
    registered: { date: "2004-05-21T21:26:24.900Z", age: 19 },
    phone: "02-37-18-97-48",
    cell: "06-79-60-45-83",
    id: { name: "INSEE", value: "2520229501519 64" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/50.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/50.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/50.jpg",
    },
    nat: "FR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Roman", last: "Henrich" },
    location: {
      street: { number: 5515, name: "Am Bahnhof" },
      city: "Wörth am Rhein",
      state: "Brandenburg",
      country: "Germany",
      postcode: 10174,
      coordinates: { latitude: "-6.6776", longitude: "36.2434" },
      timezone: { offset: "-12:00", description: "Eniwetok, Kwajalein" },
    },
    email: "roman.henrich@example.com",
    login: {
      uuid: "ccfef05c-f08d-4c49-a3e5-c9b882e62b88",
      username: "whitetiger967",
      password: "watcher",
      salt: "izscpFPj",
      md5: "c99d111ed15cd353c9b18baec7444389",
      sha1: "8299a6c04e21f269ea19ef048fd865499c2c88fe",
      sha256: "173c052886dcc8ca8cb9566d7abd19ed1e3e72ab8b547930a48391b02f568c74",
    },
    dob: { date: "1952-03-29T02:06:44.334Z", age: 71 },
    registered: { date: "2010-04-21T20:00:04.594Z", age: 13 },
    phone: "0678-5088972",
    cell: "0171-2448334",
    id: { name: "SVNR", value: "38 280352 H 077" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/55.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/55.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/55.jpg",
    },
    nat: "DE",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Marta", last: "Forbord" },
    location: {
      street: { number: 1596, name: "Ole Reistads vei" },
      city: "Maura",
      state: "Oppland",
      country: "Norway",
      postcode: "6058",
      coordinates: { latitude: "36.8365", longitude: "-21.3189" },
      timezone: { offset: "-3:00", description: "Brazil, Buenos Aires, Georgetown" },
    },
    email: "marta.forbord@example.com",
    login: {
      uuid: "41a4c898-a265-4b68-ad5e-f6689686ebde",
      username: "bigpanda722",
      password: "grace",
      salt: "6taVh4k2",
      md5: "21e995a60e4fc8eddd341fbf701538d1",
      sha1: "c5c4223dfbe676cd7263a4304e03aa76104ca2a7",
      sha256: "27957d3c870a9967d8a1819af15611af5efcffecbcae05b76fde1f6c27857df0",
    },
    dob: { date: "1984-07-13T10:40:38.761Z", age: 38 },
    registered: { date: "2022-01-07T05:49:47.726Z", age: 1 },
    phone: "70999062",
    cell: "41383334",
    id: { name: "FN", value: "13078436039" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/14.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/14.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg",
    },
    nat: "NO",
  },
];

const countryList = [
  {
    label: "Canada",
    value: "canada",
  },
  {
    label: "Usa",
    value: "usa",
  },
  {
    label: "Mexico",
    value: "mexico",
  },
  {
    label: "China",
    value: "china",
  },
  {
    label: "Brazil",
    value: "brazil",
  },
  {
    label: "Japan",
    value: "japan",
  },
  {
    label: "Australia",
    value: "australia",
  },
];

const LongDataList = [
  {
    label: "Option 1",
    value: "value1",
  },
  {
    label: "Option 2",
    value: "value2",
  },
  {
    label: "Option 3",
    value: "value3",
  },
  {
    label: "Option 4",
    value: "value4",
  },
  {
    label: "Option 5",
    value: "value5",
  },
  {
    label: "Option 6",
    value: "value6",
  },
  {
    label: "Option 7",
    value: "value7",
  },
  {
    label: "Option 8",
    value: "value8",
  },
  {
    label: "Option 9",
    value: "value9",
  },
  {
    label: "Option 10",
    value: "value10",
  },
  {
    label: "Option 11",
    value: "value11",
  },
  {
    label: "Option 12",
    value: "value12",
  },
  {
    label: "Option 13",
    value: "value13",
  },
  {
    label: "Option 14",
    value: "value14",
  },
  {
    label: "Option 15",
    value: "value15",
  },
  {
    label: "Option 16",
    value: "value16",
  },
  {
    label: "Option 17",
    value: "value18",
  },
  {
    label: "Option 19",
    value: "value19",
  },
  {
    label: "Option 20",
    value: "value20",
  },
  {
    label: "Option 21",
    value: "value21",
  },
];

const meta = {
  title: "Combobox/Select",
  component: Select,
  args: {
    label: "I'm an select",
    disabled: false,
    enableSearch: false,
    includeEmptyOption: false,
    showValueTooltip: false,
    emptyOptionValue: null,
    options: [],
    variant: "default",
    style: {
      maxWidth: 500,
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryFn<typeof Select>;

export const Basic: Story = (args) => {
  const [value, setValue] = useState<TSelectOptionValue>(undefined);

  return (
    <Select
      {...args}
      value={value}
      label="Search country"
      options={countryList}
      onChange={val => {
        setValue(val);
        action("onChange")(val);
      }}
    />
  );
};

export const WithSearch: Story = (args) => {
  const [value, setValue] = useState<any | undefined>(undefined);

  return (
    <Select
      {...args}
      label="Search country"
      options={countryList}
      value={value}
      onChange={val => {
        setValue(val);
        action("onChange")(val);
      }}
    />
  );
};

export const WithLongList: Story = (args) => {
  const [value, setValue] = useState<any | undefined>(undefined);

  return (
    <Select
      {...args}
      label="Search country"
      options={LongDataList}
      value={value}
      onChange={val => {
        setValue(val);
        action("onChange")(val);
      }}
    />
  );
};

export const WithCustomContent: Story = (args) => {
  const [value, setValue] = useState<any | undefined>(undefined);

  return (
    <Select
      {...args}
      value={value}
      label="Select a country"
      options={countryList.map(country => ({
        ...country,
        customContent: (
          <Stack.Horizontal alignItems="center">
            <WorldIcon />
            <Text>{country.label}</Text>
          </Stack.Horizontal>
        ),
      }))}
      onChange={val => {
        setValue(val);
        action("onChange")(val);
      }}
    />
  );
};

type SearchDataType = {
  email: string;
  name: {
    first: string;
    last: string;
  };
};

export const WithAsyncSearch: Story = (args) => {
  const [value, setValue] = useState<any | undefined>(undefined);

  const onSearch = async (searchValue: string) =>
    new Promise<SearchDataType[]>(resolve => {
      setTimeout(() => {
        const results = randomUsers.filter(
          user =>
            user.name.first.includes(searchValue) ||
            user.name.last.includes(searchValue) ||
            user.email.includes(searchValue)
        );

        resolve(results);
      }, 2000); // Delay of 2 seconds
    });

  return (
    <Select
      {...args}
      label="Search user"
      options={countryList}
      value={value}
      enableSearch
      onChange={val => {
        setValue(val);
        action("onChange")(val);
      }}
      onSearch={async searchValue => {
        action("onSearch")(searchValue);
        const results = await onSearch(searchValue);

        return results.map(user => ({
          value: user.email,
          label: user.email,
        }));
      }}
    />
  );
};