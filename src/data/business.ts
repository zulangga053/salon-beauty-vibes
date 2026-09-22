export const business = {
  name: "Salon Beauty Vibes",
  owner: "Ely Sumpiyati",
  whatsappNumber: "6285333240210",
  instagramUrl: "https://instagram.com/salonbeautyvibes__",
  email: "salonbeautyvibes@gmail.com",
  address: "Jl. Sadia 1, Kec. Mpunda, Kota Bima, NTB",
  shortAddress: "Jl. Sadia 1, Kec. Mpunda, Kota Bima",
  hours: "09:00 – 22:00 WITA",
  openDays: "Buka Setiap Hari",
};

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${business.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
